import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Deck } from './deck.entity';

@Entity()
export class Flashcard {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the flashcard',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'What is the capital of France?',
    description: 'The question of the flashcard',
  })
  @Column()
  question: string;

  @ApiProperty({
    example: 'Paris',
    description: 'The answer to the flashcard question',
  })
  @Column()
  answer: string;

  @ApiProperty({
    type: () => Deck,
    description: 'The deck this flashcard belongs to',
  })
  @ManyToOne(() => Deck, (deck) => deck.flashcards)
  deck: Deck;
}
