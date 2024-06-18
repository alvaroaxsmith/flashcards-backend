import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlashcardsService } from './flashcards.service';
import { FlashcardsController } from './flashcards.controller';
import { Flashcard } from '../entities/flashcard.entity';
import { Deck } from '../entities/deck.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Flashcard, Deck])],
  providers: [FlashcardsService],
  controllers: [FlashcardsController],
})
export class FlashcardsModule {}
