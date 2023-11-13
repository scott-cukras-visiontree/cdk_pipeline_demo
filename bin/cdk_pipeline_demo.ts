#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkPipelineDemoStack } from '../lib/cdk_pipeline_demo-stack';

const app = new cdk.App();
new CdkPipelineDemoStack(app, 'CdkPipelineDemoStack', {
  env: {
    account: '535911648344',
    region: 'us-west-2',
    // region: 'us-east-2',
  }
});

app.synth()