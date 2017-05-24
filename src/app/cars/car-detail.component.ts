import { Component } from '@angular/core';
import { ICar } from './car';

@Component({
    templateUrl: './car-detail.component.html'
})

export class CarDetailComponent {
    pageTitle: string = 'Car Detail';
    car: ICar;
}