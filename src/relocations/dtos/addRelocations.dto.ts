import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsIn,
  IsMobilePhone,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class addRelocationsDto {
  @IsString()
  @IsNotEmpty()
  @IsIn(['Madame', 'Monsieur', 'Entreprise'])
  readonly civilite: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 30)
  readonly nom: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 30)
  readonly prenom: string;

  @IsString()
  @IsNotEmpty()
  @IsMobilePhone('fr-FR')
  readonly telephone: string;
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly Email: string;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  readonly date: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 100)
  readonly adresseDepart: string;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  readonly nbreEtageDepart: number;

  @IsNotEmpty()
  @IsBoolean()
  readonly ascenseurDepart: boolean;

  @IsString()
  @IsNotEmpty()
  @Length(5, 100)
  readonly adresseArrivee: string;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  readonly nbreEtageArrivee: number;

  @IsNotEmpty()
  @IsBoolean()
  readonly ascenseurArrivee: boolean;

  @Min(10)
  @Max(200)
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  readonly volume: number;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  readonly distanceDePortage: number;

  @IsString()
  @IsNotEmpty()
  @IsIn([
    "FOURNITURES D'EMBALLAGE",
    'EMBALLAGE / DÉBALLAGE OBJETS FRAGILES',
    'EMBALLAGE / DÉBALLAGE OBJETS NON FRAGILES',
    'DÉMONTAGE / REMONTAGE MOBILIER',
    'ASSURANCE DÉMÉNAGEMENT',
    'OBJETS PARTICULIERS OU LOURDS',
  ])
  readonly prestationComplementaire: string;
}
