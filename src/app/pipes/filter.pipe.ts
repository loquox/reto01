import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter',
    standalone:true
}
    
)
export class FilterPipe implements PipeTransform{


    transform(values: string[], arg:string):string[] {

        if (!arg || arg.length > 3){
        let result: string[] = [];

        for(const value of values){
            if(value.indexOf(arg) > -1){
                result= [...result, value];
            }
        }
        return result;
    }else{
        return values
        
    }
    }






    
}