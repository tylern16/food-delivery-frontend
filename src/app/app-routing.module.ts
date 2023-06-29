import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RouteGuardService } from './services/route-guard.service';
import { combineLatest } from 'rxjs';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { DishesComponent } from './components/dishes/dishes.component';
import { AddDishesComponent } from './components/add-dishes/add-dishes.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [RouteGuardService]}, //, canActivate: [RouteGuardService]
  {path: 'home', component: HomeComponent, canActivate: [RouteGuardService]}, //, canActivate: [RouteGuardService]
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'restaurant', component: RestaurantComponent},
  {path: 'add/restaurant', component: AddRestaurantComponent},
  {path: 'dish/:restaurantId', component: DishesComponent},
  {path: 'add/dish/:restaurantId', component: AddDishesComponent},

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
