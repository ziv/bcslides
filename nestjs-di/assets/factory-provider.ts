import { FactoryProvider } from '@nestjs/common';

export const factoryProvider: FactoryProvider = {
    provide: 'token',
    useFactory: function () {

    },
    inject: []
};
