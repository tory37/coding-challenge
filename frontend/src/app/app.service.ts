import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService {

  constructor(private http: Http ) { }

  public getDrivers(): Observable<any> {
    return this.http.get( "/drivers");
  }

}
