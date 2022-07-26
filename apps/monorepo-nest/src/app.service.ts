import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('MAIL_SERVICE') private clientMail: ClientProxy) {}
  getHello(): string {
    return 'Hola soy el servicio monorepo';
  }

  newUser(user: any) {
    this.clientMail.emit('new_email', user);
    return 'send_queue';
  }
}
