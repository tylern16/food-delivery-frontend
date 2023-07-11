import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dish } from 'src/app/dish';
import { Restaurant } from 'src/app/restaurant';
import { DishService } from 'src/app/services/dish.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent {

  public dishes: Dish[] = [];

  public currentDishId: number = 0;
  dishToDeleteId: number = 0;

  restaurantId: number = this.route.snapshot.params['restaurantId'];

  restaurant: Restaurant = new Restaurant();

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService,
    private router: Router,
    private userService: UserService,
    private restaurantService: RestaurantService
  ){}

  ngOnInit(): void {
    console.log("customerId:" + this.restaurantId);
    this.getDishes(this.restaurantId);
    this.getRestaurant();
  }

  getDishes(restaurantId: number) {
    this.dishService.getDishes(restaurantId).subscribe(
      (response)=>{
        this.dishes = response;
        console.log("Get Dependents:" + this.dishes);
      },
      (error: Error) => {
        alert(error);
      }
    )
  }

  goToAddDishes() {
    this.router.navigate(['/add/dish/' + this.restaurantId]);
  }

  deleteDish(dishId: number) {
    this.dishService.deleteDish(dishId).subscribe(
      (response) => {
        console.log("deleted");
        this.getDishes(this.restaurantId);
      },
      (error: Error) => {
        alert(error);
      }
    )

    const modalDiv = document.getElementById("myModal");
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }

  getRestaurant() {
    this.restaurantService.getRestaurantByRestaurantId(this.restaurantId).subscribe(
      (data) => {
        this.restaurant = data;
        console.log(this.restaurant)
      },
      (error) => console.log(error)
    );
  }

  openModal(dishId : number) {
    this.dishToDeleteId = dishId;
    //console.log("open modal");
    const modalDiv = document.getElementById('myModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'block';
    }
  }

  closeModal() {
    console.log("close modal");
    const modalDiv = document.getElementById("myModal");
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }

}
