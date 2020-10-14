import { Injectable } from '@nestjs/common';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  todosList: Todo[] = [
    {
      id: 1,
      title: "Création de l'App smoll-api ",
      description:
        "Création de l'App Todo avec la commande: nest new smoll-api ",
    },

    {
      id: 2,
      title: 'Création du module Todos',
      description:
        "Création de l'App Todo avec la commande: nest generate module todos ",
    },

    {
      id: 3,
      title: 'Création du controller Todos',
      description:
        "Création de l'App Todo avec la commande: nest generate controller todos ",
    },

    {
      id: 4,
      title: 'Création du service Todos',
      description:
        "Création de l'App Todo avec la commande: nest generate service todos ",
    },
  ];

  findAll(): Todo[] {
    return this.todosList;
  }
}
