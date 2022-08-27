import {
  Controller,
  Post,
  Get,
  Delete,
  Put,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { User } from '../model/user.interface';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs';

@Controller('users')
export class UserController {
  constructor(private readonly userSerivce: UserService) {}

  @Post()
  create(@Body() user: User): Observable<User> {
    return this.userSerivce.create(user);
  }

  @Get()
  findAll(): Observable<User[]> {
    return this.userSerivce.findAll();
  }

  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: number): Observable<User> {
    return this.userSerivce.findOne(id);
  }

  @Delete('/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number): Observable<User> {
    return this.userSerivce.deleteOne(id);
  }

  @Put('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: User,
  ): Observable<User> {
    return this.userSerivce.update(id, user);
  }
}
