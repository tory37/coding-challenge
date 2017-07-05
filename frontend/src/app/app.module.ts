import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListDriversComponent } from './list-drivers/list-drivers.component';
import { CreateDriverComponent } from './create-driver/create-driver.component';
import { FindDriverComponent } from './find-driver/find-driver.component';
import { ListDriverReviewsComponent } from './list-driver-reviews/list-driver-reviews.component';
import { CreateDriverReviewComponent } from './create-driver-review/create-driver-review.component';
import { FindDeliveryReviewComponent } from './find-delivery-review/find-delivery-review.component';
import { CreateDeliveryReviewComponent } from './create-delivery-review/create-delivery-review.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'list-drivers', component: ListDriversComponent },
  { path: 'create-driver', component: CreateDriverComponent },
  { path: 'find-driver', component: FindDriverComponent },
  { path: 'list-driver-reviews', component: ListDriverReviewsComponent },
  { path: 'create-driver-review', component: CreateDriverReviewComponent },
  { path: 'find-delivery-review', component: FindDeliveryReviewComponent },
  { path: 'create-delivery-review', component: CreateDeliveryReviewComponent },
  { path: '', redirectTo: 'list-drivers', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListDriversComponent,
    CreateDriverComponent,
    FindDriverComponent,
    ListDriverReviewsComponent,
    CreateDriverReviewComponent,
    FindDeliveryReviewComponent,
    CreateDeliveryReviewComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
