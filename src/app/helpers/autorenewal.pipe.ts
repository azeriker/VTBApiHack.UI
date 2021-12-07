import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "autorenewal"
})
export class IsActivePipe implements PipeTransform {

    transform(isActive?: boolean): string {
        if(isActive == undefined) {
            return "";
        }

        if (isActive) {
            return "Автопродление";
        }
        else {
            return "Отключено";
        }
    }

}
