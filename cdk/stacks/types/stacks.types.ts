import type { StackProps } from "aws-cdk-lib";

export type EventBridgeStackProps = StackProps & {
	stage: string;
	serviceName: string;
	eventBusName: string;
};
