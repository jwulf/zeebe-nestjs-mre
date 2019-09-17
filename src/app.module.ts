// app.module.ts
import { Module, Inject } from '@nestjs/common';
import { AppController } from './app.controller';
import {
  ZeebeModule,
  ZeebeServer,
  ZEEBE_CONNECTION_PROVIDER,
} from '@payk/nestjs-zeebe';
import { AppService } from './app.service';
import { ZBClient } from 'zeebe-node';

@Module({
  imports: [ZeebeModule.forRoot({})],
  controllers: [AppController],
  providers: [ZeebeServer, AppService],
})
export class AppModule {
  constructor(
    @Inject(ZEEBE_CONNECTION_PROVIDER) private readonly zbClient: ZBClient,
  ) {
    this.zbClient.deployWorkflow('./bpmn/order-process.bpmn').then(
      // tslint:disable-next-line: no-console
      console.log,
    );
  }
}
