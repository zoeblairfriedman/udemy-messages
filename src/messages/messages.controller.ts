import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto'
import { MessagesService } from './messages.service'

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService

  constructor() {
    // NOT GONNA USE THIS ULTIMATELY
    this.messagesService = new MessagesService()
  }

  @Get()
  listMessages() {
    return this.messagesService.findAll()
  }

  // argument decorator
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content)
  }


  // param decorator
  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id)

    if (!message) {
      throw new NotFoundException("message not found")
    }

    return message;
  }

}
