import { Controller , Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto'

@Controller('messages')
export class MessagesController {
  
  @Get()
  listMessages(){

  }

  // argument decorator
  @Post()
  createMessage(@Body() body: CreateMessageDto){
    console.log(body)
  }


  // param decorator
  @Get('/:id')
  getMessage(@Param('id') id: string){
    console.log(id)
  }
}
