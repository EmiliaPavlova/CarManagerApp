import { Component, OnInit } from '@angular/core';
import { ICar } from './car';
import { CarService } from './car.service';

@Component({
    templateUrl: './car-list.component.html',
    styleUrls: ['./car-list.component.css']
})

export class CarListComponent implements OnInit {
    pageTitle: string = 'Cars List';
    errorMessage: string;
    cars: ICar[];

    constructor(private _carService: CarService) {

    }

    editCar(): void {

    }

    deleteCar(): void {
        
    }

    ngOnInit(): void {
        this._carService.getCars()
            .subscribe(cars => this.cars = cars,
                error => this.errorMessage = <any>error);
    }

}