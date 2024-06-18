import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFlashcardDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly question: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly answer: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly deckId: string;
}
