export class Subscription {
    id?: string;
    userId?: string;
    name: string;
    serviceName?: string;
    nextCharge?: Date;
    period: Period;
    price: number;
    policy: Policy;
    hasActionReleased?: boolean;
    isActive?: boolean;

    constructor(name: string,  period: Period, price: number, policy: Policy, id?: string, isActive?: boolean) {
        this.id = id;
        this.name = name;
        this.period = period;
        this.price = price;
        this.policy = policy;
        this.isActive = isActive;
    }
}

export enum Period {
    Monthly,
    Yearly
}

export enum Policy {
    Always,
    InactivityAsProlongation,
    InactivityAsCancel
}
