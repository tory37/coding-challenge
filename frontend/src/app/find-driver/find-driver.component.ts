import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-find-driver',
  templateUrl: './find-driver.component.html',
  styleUrls: ['./find-driver.component.scss']
})
export class FindDriverComponent implements OnInit {

  driver$: Observable<any>;

  driver: any = null;

  constructor(private appSvc: AppService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    if (f.value.driverId == "" || f.value.driverId == null) {
      this.driver = { error: "Driver id cannot be empty."};
      return;
    }

      this.appSvc.findDriver$(f.value.driverId)
        .subscribe((data) => this.driver = data);
  }
}
