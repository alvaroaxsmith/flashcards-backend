import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Flashcard } from './flashcard.entity';

@Entity()
export class Deck {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Flashcard, flashcard => flashcard.deck)
  flashcards: Flashcard[];
}