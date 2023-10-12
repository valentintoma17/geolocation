import { faker, Faker, es  } from '@faker-js/faker';

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        const customFaker = new Faker ({ locale: [es] });
        this.name = customFaker.person.firstName();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }
    }

    markerContent(): string {
        return `
        <div>
            <h1>Customer name is ${this.name}</h1>
        </div>
        `
    }
}