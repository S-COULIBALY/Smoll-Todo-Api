import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { State } from '../enums/enums';

export class addTodoDto {
  @IsNumber()
  readonly id: number;
  @IsDate()
  @Type(() => Date)
  readonly date: Date;
  @IsString()
  @IsNotEmpty()
  @MinLength(6, {
    message: 'La taille minimal de ce champ est de 6 caractères',
  })
  @MaxLength(200, {
    message: 'La taille maximal de ce champ est de 200 caractères',
  })
  readonly title: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(6, {
    message: 'La taille minimal de ce champ est de 6 caractères',
  })
  @MaxLength(200, {
    message: 'La taille maximal de ce champ est de 200 caractères',
  })
  readonly description: string;
  @IsString()
  @IsEnum(State)
  readonly status: State;

  @IsBoolean()
  @IsNotEmpty()
  readonly required: boolean;
}
