export default class Clock {

    private hour: number;
    private min?: number;

    constructor(hour: number, min?: number)
    {
        this.hour = hour;
        this.min = min;
    }

    plus(min: number) : number
    {
        if(!this.min) min = 0;

        return min;

    }

    minus(min: number) : number
    {
        return min;
    }

    convertToStr(hour: number, min?: number) : string
    {
        hour.toString();

        if(min != undefined) min.toString();

        return hour + ':' + min;
    }

    
}