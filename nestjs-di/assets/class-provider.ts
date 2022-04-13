import { ClassProvider } from '@nestjs/common';

export class Bootcamp {

}

export class SuperBootcamp {

}

export const classProvider: ClassProvider = {
    provide: Bootcamp,
    useClass: SuperBootcamp
};
