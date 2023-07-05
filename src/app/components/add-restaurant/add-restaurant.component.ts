import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent{

  constructor(
    private userService: UserService,
    private restaurantService: RestaurantService,
    private router: Router,
    public fb: FormBuilder,
    private http: HttpClient
  ) {}

  restaurant: Restaurant = new Restaurant();

  userId: number = this.userService.currentUser.id;

  saveRestaurant(){
    this.restaurantService.addRestaurant(this.userId, this.restaurant).subscribe( data =>{
      console.log(data);
      this.router.navigate(['/restaurant']);
    },
    (error: Error) => console.log(error));
  }

  onSubmit(){
    console.log(this.restaurant);
    this.saveRestaurant();
  }

}
