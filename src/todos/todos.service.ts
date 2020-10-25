import { Injectable, NotFoundException } from '@nestjs/common';
import { addTodoDto } from './dto/add-todo-dtos';
import { updateTodoDto } from './dto/update-todo-dtos';
import { Todo } from './interfaces/todo.interfaces';
import { todoslist } from './entities/todo.entity';

@Injectable()
export class TodosService {
  // ----- le magasin ------
  todosList: Todo[] = todoslist;

  findAllPosts(): Todo[] {
    return this.todosList;
  }

  findSomePosts(): Todo[] {
    return this.todosList.slice(0, 3);
  }

  getTodoteById(id: number): Todo {
    const todo = this.todosList.find(todo => todo.id === id);
    if (todo) {
      return todo;
    }
    throw new NotFoundException(`Le todo d'id: ${id} n'existe pas`).stack;
  }

  createPost(newTodo): Todo[] {
    return (this.todosList = [...this.todosList, newTodo]);
    //return (this.todosList = Object.assign({}, this.todosList, newTodo));
    //return (this.todosList = this.todosList.concat(newTodo));
    //return (this.todosList = this.todosList.push(newTodo);
  }

  updatePost(id: number, todo: Partial<Todo>) {
    // on va reccuperer l'objet à modifier par son id
    //const todoToupdate = this.todosList.find(todo => todo.id === +id);
    const todoToupdate2 = this.getTodoteById(id);
    console.log(todoToupdate2);
    todoToupdate2.description = todo.description
      ? todo.description
      : todoToupdate2.description;
    todoToupdate2.title = todo.title ? todo.title : todoToupdate2.title;
    todoToupdate2.required = todo.required
      ? todo.required
      : todoToupdate2.required;
    return todoToupdate2;
  }

  patchPost(id: number, todo: addTodoDto) {
    console.log(todo instanceof addTodoDto);
    // D'abord réccuperer le todo à modifier
    //const todoToUpdate = this.todosList.find(t => t.id === Number(id));
    const todoToUpdate = this.todosList.find(todo => todo.id === id);

    if (!todoToUpdate) {
      return new NotFoundException("ooohhh!!! ce todo n'exist pas!");
    }

    // ------- Ensuite appliquer les modifications -----------
    // on va appliquer granulairement les modifications aux propriétés une à une.
    if (todo.hasOwnProperty('done')) {
      todoToUpdate.required = todo.required;
    }

    if (todo.title) {
      todoToUpdate.title = todo.title;
    }

    if (todo.description) {
      todoToUpdate.description = todo.description;
    }
    // on va appliquer tuotes les transformations au todo existant
    const updateTodoDtos = this.todosList.map(t =>
      t.id !== +id ? t : todoToUpdate,
    );
    this.todosList = [...updateTodoDtos];
    console.log(todoToUpdate);
    return { updateTodo: 1, todo: todoToUpdate };
  }

  deleteOnePost(id: number) {
    // on calcule la taille de notre tableau de todo avant la suppression d'objet
    // on va chercher l'objet via son id et le supprime grace à la méthode filter
    // ensuite on fait une comparaison de la taille du tableau "Avant" et "Après" pour voir s'il y'a eu suppression d'objet
    const nbOfTodoBeforeDelete = this.todosList.length;
    console.log(nbOfTodoBeforeDelete);
    this.todosList = [...this.todosList.filter(todo => todo.id !== id)];
    if (this.todosList.length < nbOfTodoBeforeDelete) {
      return { todoTodelete: 1, nbTodosRestant: this.todosList.length };
    } else {
      return { todoTodelete: 0, nbTodosRestant: this.todosList.length };
    }
  }

  deleteOnePost2(id: number) {
    // on va chercher l'index l'objet via son id dans le tableu des todos
    // s'ils existe, le supprimmer avec la methode "splice"
    const index = this.todosList.findIndex(todo => todo.id === id);
    console.log(index);
    if (index > 0) {
      this.todosList.splice(index, 1);
    } else {
      throw new NotFoundException("L'objet démandé n'existe pas");
    }
    return {
      message: `l'objet d'id: ${id} a été supprimé avec succès`,
      count: 1,
    };
  }
}
