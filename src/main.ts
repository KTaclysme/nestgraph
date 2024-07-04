import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuration de CORS
  app.enableCors({
    origin: 'http://localhost:3000', // URL du client React
    credentials: true,
  });

  // Écouter les requêtes sur le port 3001
  await app.listen(3001);
  console.log('🚀 Server ready and running on http://localhost:3001');
}

bootstrap();
