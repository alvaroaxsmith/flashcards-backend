import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateFlashcardDto } from './dtos/create-flashcard.dto';
import { UpdateFlashcardDto } from './dtos/update-flashcard.dto';
import { FlashcardsService } from './flashcards.service';
import { Flashcard } from '../entities/flashcard.entity';

@ApiTags('flashcards')
@Controller('flashcards')
export class FlashcardsController {
  constructor(private readonly flashcardsService: FlashcardsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all flashcards' })
  @ApiResponse({
    status: 200,
    description: 'List of flashcards',
    type: [Flashcard],
  })
  findAll() {
    return this.flashcardsService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new flashcard' })
  @ApiResponse({
    status: 201,
    description: 'The flashcard has been successfully created.',
    type: Flashcard,
  })
  create(@Body() createFlashcardDto: CreateFlashcardDto) {
    return this.flashcardsService.create(createFlashcardDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing flashcard' })
  @ApiResponse({
    status: 200,
    description: 'The flashcard has been successfully updated.',
    type: Flashcard,
  })
  update(
    @Param('id') id: number,
    @Body() updateFlashcardDto: UpdateFlashcardDto,
  ) {
    return this.flashcardsService.update(id, updateFlashcardDto);
  }
}
