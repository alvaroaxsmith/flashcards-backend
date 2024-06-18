import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFlashcardDto {
  @ApiProperty({
    description: 'The question of the flashcard',
    example: 'What is the capital of France?',
  })
  @IsNotEmpty()
  @IsString()
  readonly question: string;

  @ApiProperty({
    description: 'The answer to the flashcard question',
    example: 'Paris',
  })
  @IsNotEmpty()
  @IsString()
  readonly answer: string;

  @ApiProperty({
    description: 'The ID of the deck this flashcard belongs to',
    example: '1',
  })
  @IsNotEmpty()
  @IsString()
  readonly deckId: string;
}
