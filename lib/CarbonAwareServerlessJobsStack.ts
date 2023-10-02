import * as cdk from "aws-cdk-lib";
import { Duration } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Queue } from "aws-cdk-lib/aws-sqs";

export class CarbonAwareServerlessJobsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // new Queue(this, "CdkWorkshopQueue", {
    //   visibilityTimeout: Duration.seconds(300),
    // });
  }
}
