import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Deck } from '../entities/deck.entity';
import { Flashcard } from '../entities/flashcard.entity';

export class InitialSeeder implements Seeder {
  public async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
    const deckFactory = factoryManager.get(Deck);
    const flashcardFactory = factoryManager.get(Flashcard);

    const decks = await deckFactory.saveMany(3);  // Corrigindo para usar 'saveMany'

    for (const deck of decks) {
      await flashcardFactory.saveMany(50, { deck });  // Corrigindo para usar 'saveMany'
    }
  }
}
