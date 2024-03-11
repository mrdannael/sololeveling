import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";
import { HealthModule } from "./health/health.module.js";
import { User } from "./user/entities/user.entity.js";
import { UserModule } from "./user/user.module.js";

@Module({
  imports: [
    HealthModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "postgres",
      entities: [User],
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
