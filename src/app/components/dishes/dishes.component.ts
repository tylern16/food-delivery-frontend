import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dish } from 'src/app/dish';
import { DishService } from 'src/app/services/dish.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent {

  public dishes: Dish[] = [];

  public currentDishId: number = 0;

  restaurantId: number = this.route.snapshot.params['restaurantId'];

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService,
    private router: Router,
    private userService: UserService
  ){}

  ngOnInit(): void {
    console.log("customerId:" + this.restaurantId);
    this.getDishes(this.restaurantId);
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
  }

}
