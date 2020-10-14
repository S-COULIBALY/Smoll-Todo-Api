import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { addTodoDto } from './dto/add-todo-dtos';
import { Todo } from './entities/todo.entity';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAllPosts(@Param() mesParams): any {
    console.log(mesParams);
    return mesParams;
    //Test la route pour réccupérer tous les Todos à l'adresse:
    //http://localhost:3000/todos en GET
  }
  @Get()
  findSomePosts(@Query() mesQueriesParams) {
    console.log(mesQueriesParams);
    return mesQueriesParams;
    //Test la route pour réccupérer une partie des Todos à l'adresse:
    //http://localhost:3000/todos?10&page8 en GET
  }

  @Get(':id')
  findPosteById(@Param('id') id): any {
    console.log(typeof id);
    return id;
    //Test la route pour réccupérer un Todo à l'adresse:
    //http://localhost:3000/todos/1Todo en GET
  }

  @Post()
  createPost(@Body() newTodo: addTodoDto): any {
    console.log(newTodo);
    return newTodo;
    //Test la route pour poster un Todo à l'adresse:
    //http://localhost:3000/todos en POST
  }

  @Put(':id')
  updatePoste(@Param() id) {
    console.log(id);
    return id;
    //Test la route pour mettre à jour un Todo à l'adresse:
    //http://localhost:3000/todos/MAJ-1Todo en PUT
  }

  @Patch(':id')
  updateOneFieldOnPost(@Param() id): string {
    console.log(id);
    return id;
    //Test la route pour mettre à jour une partie d'un Todo à l'adresse:
    //http://localhost:3000/todos/MAJ-unepartieDuTodo en PATCH
  }

  @Delete(':id')
  deleteOnePost(@Param('id') id): string {
    console.log(id);
    return id;
    //Test la route pour mettre à jour un Todo à l'adresse:
    //http://localhost:3000/todos/SUPR-1Todo en DELETE
  }
}

/*

@Get('one')
  findPosteById(@Req() request: Request, @Res() response: Response): string {
    console.log(request.hostname);
    console.log(response);
    return 'je retourne un todo par son Id';
  }

  
*/
