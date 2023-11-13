import { Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { LambdaStack } from "./lambda.stack";

export class DemoStage extends Stage {
  constructor(scope: Construct, deploymentStage: string, props?: StageProps) {
    super(scope, `${deploymentStage}_Stage`, props)

    new LambdaStack(this, 'LambdaStack', deploymentStage)
  }
}