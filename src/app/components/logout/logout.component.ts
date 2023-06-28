import { Component } from '@angular/core';
import { CognitoService } from 'src/app/services/cognito.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private cognitoService: CognitoService) { }

  public ngOnInit(): void {
    this.cognitoService.signOut().then(() => {
      console.log("Logged Out");
    })
  }
}
