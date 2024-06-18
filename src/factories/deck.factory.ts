import { setSeederFactory } from 'typeorm-extension';
import { Deck } from '../entities/deck.entity';
import { faker } from '@faker-js/faker';

setSeederFactory(Deck, (faker) => {
  const deck = new Deck();
  deck.name = faker.lorem.words(2);
  return deck;
});
