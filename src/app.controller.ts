// app.controller.ts
import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ZBClient } from 'zeebe-node';
import { CreateWorkflowInstanceResponse } from 'zeebe-node/interfaces';
import {
  ZEEBE_CONNECTION_PROVIDER,
  ZeebeWorker,
  ZeebeServer,
} from '@payk/nestjs-zeebe';
import { tsIndexSignature } from '@babel/types';

@Controller()
export class AppController {
  constructor(
    @Inject(ZEEBE_CONNECTION_PROVIDER) private readonly zbClient: ZBClient,
    private readonly zeebeServer: ZeebeServer,
    private readonly appService: AppService,
  ) {}

  // Use the client to create a new workflow instance
  @Get()
  getHello(): Promise<CreateWorkflowInstanceResponse> {
    return this.zbClient.createWorkflowInstance('order-process', {
      test: 1,
      or: 'romano',
    });
  }

  // Subscribe to events of type 'payment-service
  @ZeebeWorker('payment-service')
  paymentService(job, complete) {
    // tslint:disable-next-line: no-console
    console.log('Payment-service, Task variables', job.variables);
    const variableUpdate = {
      paymentService: 'Did my job',
    };

    // Task worker business logic goes here

    complete.success(variableUpdate);
  }

  // Subscribe to events of type 'inventory-service and create a worker with the options as passed below (zeebe-node ZBWorkerOptions)
  @ZeebeWorker('inventory-service', { maxJobsToActivate: 10, timeout: 300 })
  inventoryService(job, complete) {
    // tslint:disable-next-line: no-console
    console.log('inventory-service, Task variables', job.variables);
    const variableUpdate = {
      inventoryVar: 'Inventory donnnneee',
    };

    // Task worker business logic goes here

    complete.success(variableUpdate);
  }
}
