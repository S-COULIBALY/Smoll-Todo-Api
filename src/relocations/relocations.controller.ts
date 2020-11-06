import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { addRelocationsDto } from './dtos/addRelocations.dto';
import { RelocationsService } from './services/relocations.service';

@Controller('relocations')
export class RelocationsController {
  constructor(private relocationsService: RelocationsService) {}

  @Post()
  postQuoteInfos(@Body() data: addRelocationsDto) {
    //postQuoteInfos(@Req() request: Request)
    return this.relocationsService.postQuoteInfos(data);
  }
}
