import { Test, TestingModule } from '@nestjs/testing';
import { FlashcardsController } from './flashcards.controller';
import { FlashcardsService } from './flashcards.service';
import { CreateFlashcardDto } from './dtos/create-flashcard.dto';
import { Flashcard } from '../entities/flashcard.entity';
import { Deck } from '../entities/deck.entity';

describe('FlashcardsController', () => {
  let controller: FlashcardsController;
  let service: FlashcardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlashcardsController],
      providers: [
        {
          provide: FlashcardsService,
          useValue: {
            findAll: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<FlashcardsController>(FlashcardsController);
    service = module.get<FlashcardsService>(FlashcardsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
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
    flashcard.id = 1;
    flashcard.question = createFlashcardDto.question;
    flashcard.answer = createFlashcardDto.answer;
    flashcard.deck = deck;

    jest.spyOn(service, 'create').mockResolvedValue(flashcard);

    expect(await controller.create(createFlashcardDto)).toEqual(flashcard);
  });
});
