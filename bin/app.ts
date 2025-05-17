#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { ServiceEventBridgeStack } from "../cdk/stacks/ServiceEventbridgeStack";

const stage = process.env.STAGE || "dev";

const app = new cdk.App();
new ServiceEventBridgeStack(app, `ServiceEventBridgeStack-${stage}`, {
	stage,
	serviceName: "service-eventbridge",
	eventBusName: "cdk-insights-event-bus",
});
