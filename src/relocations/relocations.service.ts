import { Injectable } from '@nestjs/common';
import { addRelocationsDto } from './dtos/addRelocations.dto';
import { Relocation } from './relocationsInterfaces/relocations.entity.interface';
import { relocationsList } from './storage/storage';

@Injectable()
export class RelocationsService {
  relocationsList: Relocation[] = relocationsList;

  postQuoteInfos(data: Relocation) {
    this.relocationsList = [...this.relocationsList, data];
    return this.relocationsList;
  }
}
