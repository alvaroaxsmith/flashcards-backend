import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { FlashcardsService } from './flashcards.service';
import { Flashcard } from '../entities/flashcard.entity';

@Controller('flashcards')
export class FlashcardsController {
  constructor(private readonly flashcardsService: FlashcardsService) {}

  @Get()
  findAll(): Promise<Flashcard[]> {
    return this.flashcardsService.findAll();
  }

  @Post()
  create(@Body() flashcard: Flashcard): Promise<Flashcard> {
    return this.flashcardsService.create(flashcard);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() flashcard: Partial<Flashcard>): Promise<Flashcard> {
    return this.flashcardsService.update(Number(id), flashcard);
  }
}