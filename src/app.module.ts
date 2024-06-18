import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FlashcardsModule } from './flashcards/flashcards.module';
import { Flashcard } from './entities/flashcard.entity';
import { Deck } from './entities/deck.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Torna as configurações disponíveis globalmente
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [Flashcard, Deck],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    FlashcardsModule,
  ],
})
export class AppModule {}
