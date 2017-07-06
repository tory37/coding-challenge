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
      .catch((err) => Observable.of({ error: err }));
  }

  public findDriver$(driverId: string): Observable<any> {
    return this.http.get( "/drivers/" + driverId)
      .map((data) => data.json())
      .catch((err) => Observable.of({ error: err }));
  }

  public getDriverReviews$(driverId: string): Observable<any> {
    return this.http.get("/drivers/" + driverId + "/reviews")
      .map((data) => data.json())
      .catch((err) => Observable.of({ error: err }));
  }

}
