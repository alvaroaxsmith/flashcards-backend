import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flashcard } from '../entities/flashcard.entity';
import { Deck } from '../entities/deck.entity';
import { CreateFlashcardDto } from './dtos/create-flashcard.dto';
import { UpdateFlashcardDto } from './dtos/update-flashcard.dto';

@Injectable()
export class FlashcardsService {
  constructor(
    @InjectRepository(Flashcard)
    private flashcardsRepository: Repository<Flashcard>,
    @InjectRepository(Deck)
    private decksRepository: Repository<Deck>,
  ) { }

  findAll(): Promise<Flashcard[]> {
    return this.flashcardsRepository.find();
  }

  async create(createFlashcardDto: CreateFlashcardDto): Promise<Flashcard> {
    const { question, answer, deckId } = createFlashcardDto;
    const deck = await this.decksRepository.findOneBy({ id: Number(deckId) });

    if (!deck) {
      throw new Error('Deck not found');
    }

    const flashcard = new Flashcard();
    flashcard.question = question;
    flashcard.answer = answer;
    flashcard.deck = deck;

    return this.flashcardsRepository.save(flashcard);
  }

  update(id: number, updateFlashcardDto: UpdateFlashcardDto): Promise<Flashcard> {
    return this.flashcardsRepository.save({ ...updateFlashcardDto, id });
  }
}
