import { Injectable, Scope } from '@nestjs/common';

export class DependencyService {

}

@Injectable({scope: Scope.DEFAULT})
export class MyService {
    constructor(public readonly dep: DependencyService) {
    }
}
