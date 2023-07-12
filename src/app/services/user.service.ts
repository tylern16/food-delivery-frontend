import { Injectable } from '@angular/core';
import { IUser } from './cognito.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser!: IUser;

  currentUserName!: string;

  constructor(private http: HttpClient) { }

  public addUser(user: IUser): Observable<IUser>{
    console.log("posting: " + user.email);
    return this.http.post<IUser>(`http://localhost:8080/user`, user);
  }

  //save user
  saveUser(user: IUser){
    this.addUser(user).subscribe(data => {
      console.log(data);
    },
    (error: Error) => console.log(error));
  }

  //get user by email
  public getCurrentUserByEmail(email: string): Observable<IUser> {
    return this.http.get<IUser>(`http://localhost:8080/user/find/${email}`);
  }

  public getUserById(userId: number): Observable<IUser> {
    return this.http.get<IUser>(`http://localhost:8080/user/${userId}`);
  }

  public saveCurrentUser(user: IUser) {
    this.getCurrentUserByEmail(user.email).subscribe(data => {
      this.currentUser = data;
      this.currentUserName = this.currentUser.name;
      //console.log(this.currentUser);
    },
    (error: Error) => console.log(error));
  }

  
}
