import { Component } from '@angular/core';
import { CarService } from './cars/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CarService]
})

export class AppComponent {
  title = 'Car Manager App';
}
