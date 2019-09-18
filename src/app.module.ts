// app.module.ts
import { Module, Inject } from '@nestjs/common';
import { AppController } from './app.controller';
import {
  ZeebeModule,
  ZeebeServer,
  ZEEBE_CONNECTION_PROVIDER,
} from '@payk/nestjs-zeebe';
import { ZBClient } from 'zeebe-node';

import { AppService } from './app.service';

@Module({
  imports: [
    ZeebeModule.forRoot({
      gatewayAddress: 'localhost',
      options: { loglevel: 'INFO', longPoll: 30000 },
    }),
  ],
  controllers: [AppController],
  providers: [ZeebeServer, AppService],
})
export class AppModule {
  constructor(
    @Inject(ZEEBE_CONNECTION_PROVIDER) private readonly zbClient: ZBClient,
  ) {
    this.zbClient.deployWorkflow('./bpmn/order-process.bpmn').then(res => {
      // tslint:disable-next-line: no-console
      console.log(res);

      // tslint:disable-next-line: no-console
      console.log('\nNow open http://localhost:3000 to start a workflow.');
    });
  }
}
