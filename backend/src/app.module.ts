import { Module } from '@nestjs/common';
import { UserModule } from '@udtt/rest/users/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
