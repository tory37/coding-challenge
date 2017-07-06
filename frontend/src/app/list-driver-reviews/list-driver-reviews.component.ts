import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-list-driver-reviews',
  templateUrl: './list-driver-reviews.component.html',
  styleUrls: ['./list-driver-reviews.component.scss']
})
export class ListDriverReviewsComponent implements OnInit {

  drivers$: Observable<any>;
  driverReviews$: Observable<any>;

  constructor(private appSvc: AppService) { }

  selectedDriver = null;

  ngOnInit() {
    this.drivers$ = this.appSvc.getDrivers$();
  }

  getDriverReviews(driverId: any) {
    this.driverReviews$ = this.appSvc.getDriverReviews$(driverId);
  }
}
