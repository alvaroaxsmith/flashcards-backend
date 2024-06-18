import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { FlashcardsService } from './flashcards.service';
import { Flashcard } from '../entities/flashcard.entity';
import { CreateFlashcardDto } from './dtos/create-flashcard.dto';
import { UpdateFlashcardDto } from './dtos/update-flashcard.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('flashcards')
@Controller('flashcards')
export class FlashcardsController {
  constructor(private readonly flashcardsService: FlashcardsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all flashcards' })
  @ApiResponse({ status: 200, description: 'List of flashcards', type: [Flashcard] })
  findAll(): Promise<Flashcard[]> {
    return this.flashcardsService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a flashcard' })
  @ApiResponse({ status: 201, description: 'The flashcard has been successfully created.', type: Flashcard })
  async create(@Body() createFlashcardDto: CreateFlashcardDto): Promise<Flashcard> {
    return this.flashcardsService.create(createFlashcardDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a flashcard' })
  @ApiResponse({ status: 200, description: 'The flashcard has been successfully updated.', type: Flashcard })
  update(
    @Param('id') id: string,
    @Body() updateFlashcardDto: UpdateFlashcardDto,
  ): Promise<Flashcard> {
    return this.flashcardsService.update(Number(id), updateFlashcardDto);
  }
}
