import { NestFactory } from '@nestjs/core';
import { ConfigureApplication } from '@udtt-libs/configs';
import { AppModule } from '@udtt/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  ConfigureApplication(app);

  await app.listen(3000);
}

bootstrap();
