import {CartService, Item} from './cart.service';
import {Controller, Get} from '@nestjs/common';

@Controller('cart')
export class CartController {

    public constructor(
        private readonly cartService: CartService,
    ) {
    }

    @Get()
    public async getAll(): Promise<Item[]> {
        return this.cartService.getAll();
    }
}
