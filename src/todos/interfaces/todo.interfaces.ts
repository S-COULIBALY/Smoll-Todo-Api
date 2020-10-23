import { State } from '../enums/enums';

export interface Todo {
  id: number;
  date: Date;
  title: string;
  description: string;
  status: State;
  required: boolean;
}
