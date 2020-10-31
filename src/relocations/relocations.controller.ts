import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { addRelocationsDto } from './dtos/addRelocations.dto';
import { RelocationsService } from './relocations.service';

@Controller('relocations')
export class RelocationsController {
  constructor(private relocationsService: RelocationsService) {}

  @Post()
  postQuoteInfos(@Body() data: addRelocationsDto): addRelocationsDto[] {
    //postQuoteInfos(@Req() request: Request)
    return this.relocationsService.postQuoteInfos(data);
  }
}
