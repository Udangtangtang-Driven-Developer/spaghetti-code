import { Module } from '@nestjs/common';
import { PrismaModule } from '@udtt-libs/prisma';
import { UserModule } from '@udtt/rest/users/user.module';

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
