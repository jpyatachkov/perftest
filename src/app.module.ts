import {ActuatorModule} from '@glosur/nestjs-actuator';
import {CartController} from './cart.controller';
import {CartService} from './cart.service';
import {Module} from '@nestjs/common';

const imports = [];

if (process.env.ADMIN_SERVER_URL) {
  imports.push(
    ActuatorModule.forRoot({
      registration: {
        adminServerUrl: process.env.ADMIN_SERVER_URL,
        name: 'node',
        serviceUrl: `http://localhost:${process.env.NODE_PORT || 8081}`,
      },
    }),
  );
}

@Module({
  imports,
  controllers: [
    CartController,
  ],
  providers: [
    CartService,
  ],
})
export class AppModule { }
