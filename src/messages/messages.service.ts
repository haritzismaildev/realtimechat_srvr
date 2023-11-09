import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  messages: Message[] = [{ username: 'Haritz', text: 'haloo gantenk' }];
  clientToUser = {};

  identify(username: string, clientId: string) {
    this.clientToUser[clientId] = username;

    return Object.values(this.clientToUser);
  }

  getClientName(clientId: string){
    return this.clientToUser[clientId];
  }

  create(createMessageDto: CreateMessageDto, clientId: string) {
    const message = {
      username: this.clientToUser[clientId],
      text: createMessageDto.text,
    };

    this.messages.push(message);

    return message;
  }

  findAll() {
    return this.messages;
  }
}
