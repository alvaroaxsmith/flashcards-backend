import { EntityRepository, Repository } from 'typeorm';
import { Flashcard } from '../../entities/flashcard.entity';

@EntityRepository(Flashcard)
export class FlashcardsRepository extends Repository<Flashcard> {
  findAllFlashcards(): Promise<Flashcard[]> {
    return this.find();
  }

  createFlashcard(flashcard: Flashcard): Promise<Flashcard> {
    return this.save(flashcard);
  }

  updateFlashcard(id: number, flashcard: Partial<Flashcard>): Promise<Flashcard> {
    return this.save({ ...flashcard, id });
  }
}