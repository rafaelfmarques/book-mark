import { INestApplication, Injectable } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SWAGGER_CONFIG } from './interfaces/swagger.config';

@Injectable()
export class ConfigurationService {
  createDocument(app: INestApplication) {
    const builder = new DocumentBuilder()
      .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'access-token')
      .setTitle(SWAGGER_CONFIG.title)
      .setDescription(SWAGGER_CONFIG.description)
      .setVersion(SWAGGER_CONFIG.version)
      .addTag('Auth')
      .addTag('Book')
      .addTag('User')
      .build();

    const document = SwaggerModule.createDocument(app, builder);

    SwaggerModule.setup('docs', app, document);
  }
}
