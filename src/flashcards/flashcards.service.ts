import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FlashcardsRepository } from './repositories/flashcards.repository';
import { Flashcard } from '../entities/flashcard.entity';

@Injectable()
export class FlashcardsService {
  constructor(
    @InjectRepository(FlashcardsRepository)
    private flashcardsRepository: FlashcardsRepository,
  ) {}

  findAll(): Promise<Flashcard[]> {
    return this.flashcardsRepository.findAllFlashcards();
  }

  create(flashcard: Flashcard): Promise<Flashcard> {
    return this.flashcardsRepository.createFlashcard(flashcard);
  }

  update(id: number, flashcard: Partial<Flashcard>): Promise<Flashcard> {
    return this.flashcardsRepository.updateFlashcard(id, flashcard);
  }
}