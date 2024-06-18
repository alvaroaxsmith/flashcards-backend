import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Flashcard } from './flashcard.entity';

@Entity()
export class Deck {
  @ApiProperty({ example: 1, description: 'The unique identifier of the deck' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'French Capitals',
    description: 'The name of the deck',
  })
  @Column()
  name: string;

  @ApiProperty({
    type: () => Flashcard,
    isArray: true,
    description: 'The flashcards in this deck',
  })
  @OneToMany(() => Flashcard, (flashcard) => flashcard.deck)
  flashcards: Flashcard[];
}
