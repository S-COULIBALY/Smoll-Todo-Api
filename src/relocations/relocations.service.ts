import { Injectable } from '@nestjs/common';
import Relocation from 'src/features/quotation';
import { addRelocationsDto } from './dtos/addRelocations.dto';
import { relocationsList } from './storage/storage';

@Injectable()
export class RelocationsService {
  relocationsList = relocationsList;
  //relocation: Relocation;
  //distance_infos: any;
  postQuoteInfos(data: addRelocationsDto) {
    this.relocationsList = [...this.relocationsList, data];
    let relocation = new Relocation(data);
    let distance_infos = relocation.calculDistance();
    console.log(distance_infos);
  }
}
