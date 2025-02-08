import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './v1/users/users.module';
import { UsersModule as UsersModuleV2 } from './v1/users/users.module';

@Module({
  imports: [UsersModule, UsersModuleV2],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
