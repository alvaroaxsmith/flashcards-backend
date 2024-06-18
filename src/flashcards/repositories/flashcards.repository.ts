import { Repository } from 'typeorm';
import { Flashcard } from '../../entities/flashcard.entity';

export class FlashcardsRepository extends Repository<Flashcard> {
  async findAllFlashcards(): Promise<Flashcard[]> {
    return this.find();
  }

  async createFlashcard(flashcard: Flashcard): Promise<Flashcard> {
    return this.save(flashcard);
  }

  async updateFlashcard(id: number, flashcard: Partial<Flashcard>): Promise<Flashcard> {
    return this.save({ ...flashcard, id });
  }
}
