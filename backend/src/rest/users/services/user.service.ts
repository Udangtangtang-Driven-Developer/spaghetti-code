import { Injectable } from '@nestjs/common';
import { User } from '@udtt/rest/users/domains';

@Injectable()
export class UserService {
  constructor() {}

  public async signup() {
    return User.new({
      nickname: 'test',
      email: 'test@email.net',
      city: 'Seoul',
      country: 'Korea',
      password: '1234',
    });
  }
}
