import { ResponseStatus, createResponseEntitySchema } from '@udtt-libs/dto';
import { User } from '@udtt/rest/users/domains';
import { createZodDto } from 'nestjs-zod';
import { string } from 'zod';

const SignupResSchema = createResponseEntitySchema({ nickname: string() });

export class SignupRes extends createZodDto(SignupResSchema) {
  public static from(user: User): SignupRes {
    const res = new SignupRes();
    res.message = 'User created successfully';
    res.statusCode = ResponseStatus.OK;
    res.data = { nickname: user.nickname };
    return res;
  }
}
