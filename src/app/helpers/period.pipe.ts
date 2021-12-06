import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "period"
})
export class PeriodPipe implements PipeTransform {

    transform(period: number | string): string {

        if(typeof period === "string") {
            return period;
        }
        
        switch (period) {
            case 0:
                return "Месячная";
            case 1:
                return "Годовая";

            default:
                return "";
        }
    }
}
