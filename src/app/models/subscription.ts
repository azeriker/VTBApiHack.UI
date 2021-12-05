export class Subscription {
    id: string;
    userId: string;
    name: string;
    serviceName: string;
    nextCharge: Date;
    period: Period;
    price: number;
    policy: Policy;
    hasActionReleased: boolean;
    isActive: boolean;

    constructor(id: string, userId: string, name: string, serviceName: string, nextCharge: Date, period: Period, price: number, policy: Policy, hasActionReleased: boolean, isActive: boolean) {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.serviceName = serviceName;
        this.nextCharge = nextCharge;
        this.period = period;
        this.price = price;
        this.policy = policy;
        this.hasActionReleased = hasActionReleased;
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
