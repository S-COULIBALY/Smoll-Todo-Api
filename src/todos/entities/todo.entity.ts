import { Todo } from '../interfaces/todo.interfaces';
import { State } from '../enums/enums';

export const todoslist: Todo[] = [
  {
    id: 1,
    date: new Date(),
    title: "Création de l'App smoll-api ",
    description: "Création de l'App Todo avec la commande: nest new smoll-api ",
    status: State.InBox,
    required: false,
  },

  {
    id: 2,
    date: new Date(),
    title: "Création de l'App smoll-api ",
    description: "Création de l'App Todo avec la commande: nest new smoll-api ",
    status: State.InProgress,
    required: true,
  },

  {
    id: 3,
    date: new Date(),
    title: "Création de l'App smoll-api ",
    description: "Création de l'App Todo avec la commande: nest new smoll-api ",
    status: State.Open,
    required: false,
  },

  {
    id: 4,
    date: new Date(),
    title: "Création de l'App smoll-api ",
    description: "Création de l'App Todo avec la commande: nest new smoll-api ",
    status: State.Done,
    required: true,
  },
];
