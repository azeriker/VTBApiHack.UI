import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "autorenewal"
})
export class IsActivePipe implements PipeTransform {

    transform(isActive: boolean): string {
        if (isActive) {
            return "Автопродление";
        }
        else {
            return "";
        }
    }

}
