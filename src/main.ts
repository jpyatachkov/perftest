import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import {AppModule} from './app.module';
import {NestFactory} from '@nestjs/core';

(async () => {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  await app.listen(8081);
})();
