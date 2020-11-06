import { Injectable } from '@nestjs/common';
import DevisService from './devis.service';
import { addRelocationsDto } from '../dtos/addRelocations.dto';
import { relocationsList } from '../storage/storage';

@Injectable()
export class RelocationsService {
  relocationsList = relocationsList;
  //relocation: Relocation;
  //distance_infos: any;
  postQuoteInfos(relocationData: addRelocationsDto) {
    this.relocationsList = [...this.relocationsList, relocationData];
    let relocation = new DevisService(relocationData);
    let distance_infos = relocation.distance();
    return distance_infos;
  }
}
