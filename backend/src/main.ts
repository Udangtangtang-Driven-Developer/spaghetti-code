import { NestFactory } from '@nestjs/core';
import { configureApplication, configureOpenAPI } from '@udtt-libs/configs';
import { AppModule } from '@udtt/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  configureApplication(app);
  configureOpenAPI(app);

  app.enableShutdownHooks();
  await app.listen(3000);
}

bootstrap();
