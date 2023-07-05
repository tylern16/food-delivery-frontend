import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  upload(file: File, restaurantId: number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('image', file);

    const req = new HttpRequest('POST', `${this.apiServerUrl}/upload/${restaurantId}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getLicense(restaurantId: number): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/file/${restaurantId}`);
  }
}
