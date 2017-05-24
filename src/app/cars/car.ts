export interface ICar {
    id: number;
    brand: string;
    model: string;
    description: string;
    registration_number: any;
    fuelType: string; /*[ “Petrol”, “Diesel”, “Electric” ]*/
    transmission: string; /*[  “Manual ”, “Automatic”, “Semi-Automatic” ]*/
}

/*export class Car implements ICar {
    constructor(public id: number,
                public brand: string,
                public model: string,
                public description: string,
                public registration_number: any,
                public fuelType: string,
                public transmission: string) {

    }
}*/