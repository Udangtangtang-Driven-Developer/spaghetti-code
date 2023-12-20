import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function configureOpenAPI(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('UDTT API')
    .setDescription('The UDTT API description')
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}
