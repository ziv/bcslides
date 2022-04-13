import { ClassProvider } from '@angular/core';

export class Bootcamp {

}

export class SuperBootcamp {

}

export const classProvider: ClassProvider = {
    provide: Bootcamp,
    useClass: SuperBootcamp
};
