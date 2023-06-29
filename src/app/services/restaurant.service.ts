import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Restaurant } from '../restaurant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.apiServerUrl}/restaurant/all`)
  }

  public getRestaurantByRestaurantId(restaurantId: number): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.apiServerUrl}/restaurant/${restaurantId}`)
  }

  public getRestaurantsByUserId(userId: number): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.apiServerUrl}/user/${userId}/restaurant`);
  }

  public addRestaurant(userId: number, restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(`${this.apiServerUrl}/user/${userId}/restaurant`, restaurant);
  }

  public deleteRestaurant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/restaurant/${id}`);
  }
}
