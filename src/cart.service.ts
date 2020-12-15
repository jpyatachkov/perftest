import {Injectable} from '@nestjs/common';
import faker from 'faker';

export interface Item {
    id: number;
    name: string;
    price: number;
}

@Injectable()
export class CartService {

    private items: Item[] = [];

    public constructor() {
        for (let i = 0; i < 5_000; i++) {
            this.items.push({
                id: i + 1,
                name: faker.lorem.word(),
                price: faker.random.number(),
            });
        }
    }

    public async getAll(): Promise<Item[]> {
        await new Promise(resolve => setTimeout(resolve, 3000));
        return this.items;
    }
}
