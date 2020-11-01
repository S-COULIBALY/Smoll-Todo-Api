import { Injectable } from '@nestjs/common';
import Relocation from 'src/features/quotation';
import { addRelocationsDto } from './dtos/addRelocations.dto';
import { relocationsList } from './storage/storage';

@Injectable()
export class RelocationsService {
  relocationsList = relocationsList;

  postQuoteInfos(data: addRelocationsDto) {
    this.relocationsList = [...this.relocationsList, data];
    const donnee = new Relocation(data);
    donnee.calculDistance();
    return this.relocationsList;
  }
}
