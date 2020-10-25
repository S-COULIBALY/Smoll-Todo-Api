import { IsNumber, IsString } from 'class-validator';

export class addRelocationsDto {
  @IsString()
  readonly nom: string;
  @IsString()
  readonly prenom: string;
  @IsString()
  readonly adresseDepart: string;
  @IsString()
  readonly adresseArrivee: string;
  @IsNumber()
  readonly distance: number;
  @IsNumber()
  readonly volume: number;
  @IsNumber()
  readonly mainsDoeuvre: number;
  @IsNumber()
  readonly distanceDePortage: number;
}
