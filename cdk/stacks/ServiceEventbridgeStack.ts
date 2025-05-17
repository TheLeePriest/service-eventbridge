import { EventBus } from "aws-cdk-lib/aws-events";
import { Duration, RemovalPolicy, Stack } from "aws-cdk-lib";
import type { Construct } from "constructs";
import type { EventBridgeStackProps } from "./types/stacks.types";
import { Queue } from "aws-cdk-lib/aws-sqs";

export class ServiceEventBridgeStack extends Stack {
	public readonly eventBus: EventBus;

	constructor(scope: Construct, id: string, props: EventBridgeStackProps) {
		super(scope, id, props);

		const { stage, serviceName, eventBusName } = props;

		const eventBusDlq = new Queue(
			this,
			`${serviceName}-event-bus-dlq-${stage}`,
			{
				queueName: `${eventBusName}-dlq-${stage}`,
				retentionPeriod: Duration.days(14),
				removalPolicy: RemovalPolicy.DESTROY,
			},
		);

		this.eventBus = new EventBus(this, `${serviceName}-event-bus-${stage}`, {
			eventBusName: `${eventBusName}-${stage}`,
			deadLetterQueue: eventBusDlq,
		});
	}
}
