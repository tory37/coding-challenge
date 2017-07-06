import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-driver',
  templateUrl: './create-driver.component.html',
  styleUrls: ['./create-driver.component.scss']
})
export class CreateDriverComponent implements OnInit {

  driver: any = null;

  constructor(private appSvc: AppService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    if (f.value.name == "" || f.value.name == null) {
      this.driver = { error: "Driver name cannot be empty." };
      return;
    }

    this.appSvc.createDriver$(f.value.name, f.value.latitude, f.value.longitude)
      .subscribe((data) => this.driver = data);
  }
}
