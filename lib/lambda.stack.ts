import { Duration, Stack, StackProps } from "aws-cdk-lib";
import { Architecture, Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { Construct } from "constructs";
import path = require("path");

export class LambdaStack extends Stack {
  constructor(scope: Construct, id: string, deploymentStage: string, props?: StackProps) {
    super (scope, id, props)

    new NodejsFunction(this, 'lambdaHello', {
      runtime: Runtime.NODEJS_18_X,
      handler: 'hello',
      entry: path.join(__dirname, 'lambdas/handlers.ts'),
      environment: {
        'DEPLOYMENT_STAGE': deploymentStage
      },
      logRetention: RetentionDays.ONE_DAY,
      memorySize: 128,
      timeout: Duration.seconds(5),
      architecture: Architecture.ARM_64,
      functionName: 'hello'
    })

    new NodejsFunction(this, 'lambdaGoodbye', {
      runtime: Runtime.NODEJS_18_X,
      handler: 'goodbye',
      entry: path.join(__dirname, 'lambdas/handlers.ts'),
      environment: {
        'DEPLOYMENT_STAGE': deploymentStage
      },
      logRetention: RetentionDays.ONE_DAY,
      memorySize: 128,
      timeout: Duration.seconds(5),
      architecture: Architecture.ARM_64,
      functionName: 'goodbye'
    })
  }
}