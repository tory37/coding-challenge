import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-delivery-review',
  templateUrl: './create-delivery-review.component.html',
  styleUrls: ['./create-delivery-review.component.scss']
})
export class CreateDeliveryReviewComponent implements OnInit {

  drivers: any = null;
  review: any = null;

  constructor(private appSvc: AppService) { }

  ngOnInit() {
    this.appSvc.getDrivers$()
      .subscribe((data) => {
        this.drivers = data;
      })
  }

  onSubmit(f: NgForm) {

    if (f.value.driverId == "" || !f.value.driverId) {
      this.review = { error: "Pick a driver." }
    }

    if (f.value.deliveryId == "" || f.value.deliveryId == null) {
      this.review = { error: "Delivery ID cannot be empty." };
      return;
    }

    if (f.value.description == "" || f.value.description == null) {
      this.review = { error: "Description cannot be empty." };
      return;
    }

    this.appSvc.createDeliveryReview$(f.value.driverId, f.value.deliveryId, Number(f.value.rating), f.value.description)
      .subscribe((data) => this.review = data);
  }
}
