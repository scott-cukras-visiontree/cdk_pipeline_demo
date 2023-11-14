import { Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { LambdaStack } from "./lambda.stack";

interface DemoStageProps extends StageProps {
  deploymentStage: string
}

export class DemoStage extends Stage {
  constructor(scope: Construct, id: string, props: DemoStageProps) {
    super(scope, `${id}-Stage`, props)

    new LambdaStack(this, `LambdaStack-${props.deploymentStage}`, props)
  }
}