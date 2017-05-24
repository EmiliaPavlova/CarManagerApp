import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CarListComponent } from './cars/car-list.component';
import { CarDetailComponent } from './cars/car-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    RouterModule.forRoot([
      { path: 'cars', component: CarListComponent },
      { path: 'car/:id', component: CarDetailComponent },
      { path: '', redirectTo: 'cars', pathMatch: 'full' },
      { path: '**', redirectTo: 'cars', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
