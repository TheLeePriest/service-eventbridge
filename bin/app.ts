#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { ServiceEventBridgeStack } from "../cdk/stacks/ServiceEventbridgeStack";

const stage = process.env.STAGE || "dev";

const app = new cdk.App();
new ServiceEventBridgeStack(app, `service-event-bridge-stack-${stage}`, {
	stage,
	serviceName: "service-eventbridge",
	eventBusName: "service-eventbridge-event-bus",
});
