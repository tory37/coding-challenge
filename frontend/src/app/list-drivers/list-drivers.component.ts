import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.scss']
})
export class ListDriversComponent implements OnInit {

  constructor(private appSvc: AppService) { }

  drivers$: Observable<any>;

  ngOnInit() {
      this.drivers$ = this.appSvc.getDrivers$();
  }
}
