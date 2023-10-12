import { faker, Faker, es  } from '@faker-js/faker';

class User {
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
}