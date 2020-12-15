import {CartController} from './cart.controller';
import {CartService} from './cart.service';
import {Module} from '@nestjs/common';

@Module({
  imports: [],
  controllers: [
    CartController,
  ],
  providers: [
    CartService,
  ],
})
export class AppModule { }
