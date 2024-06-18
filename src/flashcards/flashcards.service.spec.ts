import { Test, TestingModule } from '@nestjs/testing';
import { FlashcardsService } from './flashcards.service';
import { FlashcardsRepository } from './repositories/flashcards.repository';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Flashcard } from '../entities/flashcard.entity';
import { CreateFlashcardDto } from './dtos/create-flashcard.dto';
import { Deck } from '../entities/deck.entity';

describe('FlashcardsService', () => {
  let service: FlashcardsService;
  let repository: FlashcardsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FlashcardsService,
        {
          provide: getRepositoryToken(FlashcardsRepository),
          useValue: {
            findAllFlashcards: jest.fn(),
            createFlashcard: jest.fn(),
            updateFlashcard: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<FlashcardsService>(FlashcardsService);
    repository = module.get<FlashcardsRepository>(getRepositoryToken(FlashcardsRepository));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a flashcard', async () => {
    const createFlashcardDto: CreateFlashcardDto = {
      question: 'Test question',
      answer: 'Test answer',
      deckId: '1',
    };

    const deck = new Deck();
    deck.id = 1;
    deck.name = 'Test Deck';

    const flashcard = new Flashcard();
    flashcard.question = createFlashcardDto.question;
    flashcard.answer = createFlashcardDto.answer;
    flashcard.deck = deck;

    jest.spyOn(repository, 'createFlashcard').mockResolvedValue(flashcard);

    expect(await service.create(flashcard)).toEqual(flashcard);
  });
});
