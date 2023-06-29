import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Dish } from '../dish';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getDishes(restaurantId: number): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${this.apiServerUrl}/restaurant/${restaurantId}/dish`);
  }

  public addDish(restaurantId: number, dish: Dish): Observable<Dish> {
    return this.http.post<Dish>(`${this.apiServerUrl}/restaurant/${restaurantId}/dish`, dish);
  }

  public deleteDish(dishId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/dish/${dishId}`);
  }
}
