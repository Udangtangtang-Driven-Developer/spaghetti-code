import { Controller, Post } from '@nestjs/common';
import { ResponseEntity } from '@udtt-libs/dto';
import { UserService } from '@udtt/rest/users/services';

@Controller('users')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Post('signup')
  public async signup() {
    const newUser = await this._userService.signup();

    return ResponseEntity.OK_WITH({
      status: 201,
      message: 'User created successfully',
      data: newUser,
    });
  }
}