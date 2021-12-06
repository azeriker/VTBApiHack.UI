import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "policy"
})
export class SubscriptionPolicyPipe implements PipeTransform {

    transform(policy: number | string): string {

        if(typeof policy === "string") {
            return policy;
        }
        
        switch (policy) {
            case 0:
                return "Всегда продлять";
            case 1:
                return "Продление при бездействии";
            case 2:
                return "Отмена при бездействии";

            default:
                return "";
        }
    }
}
