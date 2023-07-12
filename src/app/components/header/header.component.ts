import { Component, OnInit } from '@angular/core';
import { CognitoService, IUser } from 'src/app/services/cognito.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  user: IUser = this.userService.currentUser;

  constructor(
    private userService: UserService, 
    private cognitoService: CognitoService,
  ){}  

  ngOnInit(): void {
      console.log(this.user);
  }

  public isAuthenticated(): boolean{
    return this.cognitoService.isAuthenticated();
  }



}
