import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/services/cognito.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private userService: UserService,
    private router: Router) {}

  goToRestaurants() {
    this.router.navigate(['/restaurant']);
  }

}
