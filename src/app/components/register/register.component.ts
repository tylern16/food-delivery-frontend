import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { CognitoService, IUser } from 'src/app/services/cognito.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  isConfirm: boolean;
  user: IUser;

  constructor(private router: Router, private cognitoService: CognitoService) {
    this.isConfirm = false;
    this.user = {} as IUser;
  }

  public signUp(): void{
    console.log("signUp");
    this.cognitoService.signUp(this.user).then(() => {
      this.isConfirm = true;
    }).catch(() => {
      console.log("Error with SignUp");
    })
  }

  public confirmSignUp(): void{
      this.cognitoService.confirmSignUp(this.user).then(() => {
        this.router.navigate(['/login']);
      }).catch(() => {
        console.log("Error with Confirm SignUp");
      })
    }
}