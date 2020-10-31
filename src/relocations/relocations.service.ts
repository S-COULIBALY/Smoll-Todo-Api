import { Injectable } from '@nestjs/common';
import { estimate } from 'src/features/quotation';
import { addRelocationsDto } from './dtos/addRelocations.dto';
import { relocationsList } from './storage/storage';

@Injectable()
export class RelocationsService {
  relocationsList = relocationsList;

  postQuoteInfos(data: addRelocationsDto) {
    this.relocationsList = [...this.relocationsList, data];
    estimate(data);
    return this.relocationsList;
  }
}
