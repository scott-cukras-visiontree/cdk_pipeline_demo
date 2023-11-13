import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
import { DemoStage } from './cdk-pipeline-demo.stage';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

interface CdkPipelineDemoStackProps extends cdk.StackProps {
  prodRegion: string
}

export class CdkPipelineDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: CdkPipelineDemoStackProps) {
    super(scope, id, props);

    const { account, region } = props?.env as { account: string, region: string }
    const { prodRegion } = props as CdkPipelineDemoStackProps

    const pipeline = new CodePipeline(this, 'DemoPipeline', {
      pipelineName: 'DemoPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('scott-cukras-visiontree/cdk_pipeline_demo', 'main'),
        commands: [
          'npm ci',
          'npm run build',
          'npx cdk synth -- -v',
        ],
        primaryOutputDirectory: './cdk.out',
      })
    })

    pipeline.addStage( new DemoStage(this, 'dev', {
      env: { account, region }
    }))

    pipeline.addStage( new DemoStage(this, 'prod', {
      env: { account, region: prodRegion }
    }))
  }
}
