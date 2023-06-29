import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dish } from 'src/app/dish';
import { DishService } from 'src/app/services/dish.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-dishes',
  templateUrl: './add-dishes.component.html',
  styleUrls: ['./add-dishes.component.css']
})
export class AddDishesComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService,
    private router: Router
  ){}

  ngOnInit(): void {
    console.log(this.restaurantId);
  }

  restaurantId: number = this.route.snapshot.params['restaurantId'];

  dish: Dish = new Dish();

  saveDish(){
    this.dishService.addDish(this.restaurantId, this.dish).subscribe( data =>{
      console.log(data);
      this.router.navigate(['/dish/' + this.restaurantId]);
    },
    (error: Error) => console.log(error));
  }

  onSubmit(){
    console.log(this.dish);
    this.saveDish();
  }
}
