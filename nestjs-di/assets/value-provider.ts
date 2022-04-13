import { ValueProvider } from '@nestjs/common';


export const valueProvider: ValueProvider= {
    provide: 'Token',
    useValue: 'bootcamp'
};
