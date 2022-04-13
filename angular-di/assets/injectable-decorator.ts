import { Injectable } from '@angular/core';

export class DependencyService {

}

@Injectable({provideIn: 'root'})
export class MyService {
    constructor(public readonly dep: DependencyService) {
    }
}
