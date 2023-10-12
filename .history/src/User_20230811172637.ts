import { Faker, es  } from '@faker-js/faker';

class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        const customFaker = new Faker ({ locale: [es] });
        this.name = customFaker.person.firstName();
    }
}