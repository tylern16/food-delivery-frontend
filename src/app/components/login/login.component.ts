import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService, IUser } from 'src/app/services/cognito.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
//   username: string;
//   password: string;
  user: IUser;

  constructor(private router: Router, private cognitoService: CognitoService) {
    this.user = {} as IUser;
  }

  public signIn(): void {
    //console.log(this.username + ", " + this.password);
    this.cognitoService.signIn(this.user).then(() => {
      this.router.navigate(['/home'])
    }).catch(() => {
      console.log("Error on signIn on login component");
    });
  }
}
