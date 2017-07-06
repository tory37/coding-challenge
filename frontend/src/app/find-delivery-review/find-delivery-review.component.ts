import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-find-delivery-review',
  templateUrl: './find-delivery-review.component.html',
  styleUrls: ['./find-delivery-review.component.scss']
})
export class FindDeliveryReviewComponent implements OnInit {

  drivers: any = null;
  reviews: any = null;

  constructor(private appSvc: AppService) { }

  ngOnInit() {
    this.appSvc.getDrivers$()
      .subscribe((data) => {
        this.drivers = data;
      })
  }

  onSubmit(f: NgForm) {

    if (f.value.driverId == "" || !f.value.driverId) {
      this.reviews = { error: "Pick a driver." }
    }

    if (f.value.deliveryId == "" || f.value.deliveryId == null) {
      this.reviews = { error: "Delivery ID cannot be empty." };
      return;
    }

    this.appSvc.getDeliveryReview$(f.value.driverId, f.value.deliveryId)
      .subscribe((data) => {
        this.reviews = data
      });
  }
}
