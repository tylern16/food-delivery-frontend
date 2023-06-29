import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit{

  public restaurants: Restaurant[] = [];

  userId: number = this.userService.currentUser.id;


  constructor(
    private userService: UserService,
    private restaurantService: RestaurantService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.getRestaurants();
    console.log(this.restaurants);
  }  

  public getRestaurants() {
    this.restaurantService.getRestaurantsByUserId(this.userId).subscribe(
      (response: Restaurant[]) => {
        this.restaurants = response;
        //console.log("GetCustomers: ");
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }

  goToAddRestaurants() {
    this.router.navigate(['/add/restaurant']);
  }


  deleteRestaurant(restaurantId: number) {
    this.restaurantService.deleteRestaurant(restaurantId).subscribe(
      (response) => {
        console.log("deleted");
        this.getRestaurants();
      },
      (error: Error) => {
        alert(error);
      }
    )
  }

  viewDishes(restaurantId: number) {
    this.router.navigate(['/dish/' + restaurantId]);
  }


}
