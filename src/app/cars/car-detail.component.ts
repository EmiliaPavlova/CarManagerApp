import { Component } from '@angular/core';
import { ICar } from './car';

@Component({
    templateUrl: './car-detail.component.html',
    styleUrls: ['./car-detail.component.css']
})

export class CarDetailComponent {
    pageTitle: string = 'Car Detail';
    car: ICar;
}