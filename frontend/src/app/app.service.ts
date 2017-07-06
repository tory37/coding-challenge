import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private http: Http ) { }

  public getDrivers$(): Observable<any> {
    return this.http.get( "/drivers")
      .map((data) => data.json())
      .catch((err) => Observable.of(this.errorObj(err)));
  }

  public findDriver$(driverId: string): Observable<any> {
    return this.http.get( "/drivers/" + driverId)
      .map((data) => data.json())
      .catch((err) => Observable.of(this.errorObj(err)));
  }

  public getDriverReviews$(driverId: string): Observable<any> {
    return this.http.get("/drivers/" + driverId + "/reviews")
      .map((data) => data.json())
      .catch((err) => Observable.of(this.errorObj(err)));
  }

  public createDriver$(name: string, latitude: number, longitude: number): Observable<any> {
    let body = {
      "name": name,
      "location": {
        "latitude": latitude,
        "longitude": longitude
      }
    };

    return this.http.post("/drivers/", body)
      .map((data) => data.json())
      .catch((err) => Observable.of(this.errorObj(err)));
  }

  public createDeliveryReview$(driverId: string, deliveryId: string, rating: number, description: string): Observable<any> {
    let body = {
      "rating": rating,
      "description": description
    }

    return this.http.post("/drivers/" + driverId + "/deliveries/" + deliveryId + "/review", body)
      .map((data) => data.json())
      .catch((err) => Observable.of(this.errorObj(err)));
  }

  private errorObj(err: any) {
    return { error: err };
  }
}
