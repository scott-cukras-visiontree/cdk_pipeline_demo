import { Duration, Stack, StackProps } from "aws-cdk-lib";
import { Architecture, Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { Construct } from "constructs";

interface DemoLambdaProps extends StackProps {
  deploymentStage: string
}

export class LambdaStack extends Stack {
  constructor(scope: Construct, id: string, props: DemoLambdaProps) {
    super (scope, id, props)

    new NodejsFunction(this, `lambdaHello-${props.deploymentStage}`, {
      runtime: Runtime.NODEJS_18_X,
      handler: 'hello',
      entry: './lib/lambdas/hello.ts',
      environment: {
        'DEPLOYMENT_STAGE': props.deploymentStage
      },
      logRetention: RetentionDays.ONE_DAY,
      memorySize: 128,
      timeout: Duration.seconds(5),
      architecture: Architecture.X86_64,
      functionName: `hello${props.deploymentStage}`
    })

    // new NodejsFunction(this, `lambdaGoodbye-${props.deploymentStage}`, {
    //   runtime: Runtime.NODEJS_18_X,
    //   handler: 'goodbye',
    //   entry: './lib/lambdas/handlers.ts',
    //   environment: {
    //     'DEPLOYMENT_STAGE': props.deploymentStage
    //   },
    //   logRetention: RetentionDays.ONE_DAY,
    //   memorySize: 128,
    //   timeout: Duration.seconds(5),
    //   architecture: Architecture.ARM_64,
    //   functionName: `goodbye${props.deploymentStage}`
    // })
  }
}