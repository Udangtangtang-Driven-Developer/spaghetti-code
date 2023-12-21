import { User } from '@udtt/rest/users/domains';
import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const UserSchema = z.object({
  nickname: z.string().min(2).max(20),
  email: z.string().email(),
  city: z.string(),
  country: z.string(),
  password: z.string().min(8).max(20),
});

export class SignupReq extends createZodDto(UserSchema) {
  public static toEntity(req: SignupReq): User {
    return User.new({
      nickname: req.nickname,
      email: req.email,
      city: req.city,
      country: req.country,
      password: req.password,
    });
  }
}
