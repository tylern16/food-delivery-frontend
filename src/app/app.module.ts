import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, NgControl } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { DishesComponent } from './components/dishes/dishes.component';
import { AddDishesComponent } from './components/add-dishes/add-dishes.component';
import { AddLicenseComponent } from './components/add-license/add-license.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    RestaurantComponent,
    AddRestaurantComponent,
    DishesComponent,
    AddDishesComponent,
    AddLicenseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
