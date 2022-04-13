import { ExistingProvider } from '@angular/core';

export class Bootcamp {

}

export const classProvider: ExistingProvider = {
    provide: Bootcamp,
    useExisting: 'token'
};
