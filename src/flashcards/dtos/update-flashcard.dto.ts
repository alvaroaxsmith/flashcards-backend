import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFlashcardDto } from './create-flashcard.dto';

export class UpdateFlashcardDto extends PartialType(CreateFlashcardDto) {
  @ApiProperty({
    description: 'The question of the flashcard',
    example: 'What is the capital of France?',
  })
  readonly question?: string;

  @ApiProperty({
    description: 'The answer to the flashcard question',
    example: 'Paris',
  })
  readonly answer?: string;

  @ApiProperty({
    description: 'The ID of the deck this flashcard belongs to',
    example: '1',
  })
  readonly deckId?: string;
}
