import { setSeederFactory } from 'typeorm-extension';
import { Flashcard } from '../entities/flashcard.entity';
import { faker } from '@faker-js/faker';
import { Deck } from 'src/entities/deck.entity';

setSeederFactory(Flashcard, (faker, context: { deck: Deck }) => {
  const flashcard = new Flashcard();
  flashcard.question = faker.lorem.sentence();
  flashcard.answer = faker.lorem.sentence();
  flashcard.deck = context.deck;  // Garantir que 'deck' é do tipo correto
  return flashcard;
});
