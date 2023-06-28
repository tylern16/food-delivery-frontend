import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Amplify, Auth } from 'aws-amplify';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export interface IUser {
  email: string;
  password: string;
  code: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})

export class CognitoService {
  private authenticationSubject: BehaviorSubject<any>;

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
    Amplify.configure({
      Auth: environment.cognito
    });
    this.authenticationSubject = new BehaviorSubject<boolean>(false);
  }

  public signUp(user: IUser): Promise<any> {
    this.addUser(user);
    return Auth.signUp({
        username: user.email,
        password: user.password
    });
  }

  public confirmSignUp(user: IUser): Promise<any> {
    return Auth.confirmSignUp(user.email, user.code);
  }

  public signIn(user: IUser): Promise<any> {
    //console.log(user);
    return Auth.signIn(user.email, user.password).then(() => {
        this.authenticationSubject.next(true);
    });
  }

  public signOut(): Promise<any> {
    return Auth.signOut().then(() => {
        this.authenticationSubject.next(false);
    });
  }

  public getUser(): Promise<any> {
    return Auth.currentUserInfo();
  }

  public isAuthenticated(): boolean {
    return this.authenticationSubject.value
  }


  //add user to db
  public addUser(user: IUser): Observable<IUser>{
    console.log("posting: " + user.email);
    return this.http.post<IUser>(`http://localhost:8080/user`, user);
  }

}
