import { Pipe } from '@angular/core';
@Pipe({
       name: 'secondsToTime'
})
export class secondsToTimePipe{
times = {
    d: 86400,
    h: 3600,
    m: 60,
    s: 1
}

    transform(seconds){
        let time_string: string = '';
        let plural: string = '';
        for(var key in this.times){
            if(Math.floor(seconds / this.times[key]) > 0){
                time_string += Math.floor(seconds / this.times[key]).toString() + ' ' + key.toString() + ' ';
                seconds = seconds - this.times[key] * Math.floor(seconds / this.times[key]);

            }
        }
        return time_string;
    }
}