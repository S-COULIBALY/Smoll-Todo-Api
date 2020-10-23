import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { DurationInterceptor } from 'src/interceptors/duration.interceptor';
import { PassThrough } from 'stream';
import { addTodoDto } from './dto/add-todo-dtos';
import { updateTodoDto } from './dto/update-todo-dtos';
import { Todo } from './interfaces/todo.interfaces';
import { TodosService } from './todos.service';

//@UseInterceptors(DurationInterceptor)
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAllPosts(): Todo[] {
    return this.todosService.findAllPosts();
  }

  //@Get()
  //findSomePosts(@Query() mesQueriesParams) {
  //console.log(mesQueriesParams);
  //return mesQueriesParams;
  //Test la route pour réccupérer une partie des Todos à l'adresse:
  //http://localhost:3000/todos?10&page8 en GET
  //}

  @Get(':id')
  findPosteById(@Param('id', ParseIntPipe) id: number): Todo {
    return this.todosService.getTodoteById(id); // ou (+id) pour caster en nomber
  }

  @Post()
  createPost(@Body() newTodo: addTodoDto): Todo[] {
    console.log(newTodo instanceof addTodoDto);
    return this.todosService.createPost(newTodo);
  }

  @Put(':id')
  updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() todo: Partial<Todo>,
  ) {
    //console.log(typeof id);
    //console.log(todo);
    return this.todosService.updatePost(id, todo);
  }

  @Patch(':id')
  patchPost(@Param('id', ParseIntPipe) id: number, @Body() todo: addTodoDto) {
    return this.todosService.patchPost(id, todo);
  }
  /*
  @Delete(':id')
  deleteOnePost(@Param('id', ParseIntPipe) id: number) {
    return this.todosService.deleteOnePost(id);
  }
*/

  @Delete(':id')
  deleteOnePost2(@Param('id', ParseIntPipe) id: number) {
    return this.todosService.deleteOnePost2(id);
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
