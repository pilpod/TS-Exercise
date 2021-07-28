export default class Clock {

    private hour: number;
    private min?: number;

    constructor(hour: number, min?: number)
    {
        this.hour = hour;
        this.min = min;

        this.getTime();        
    }

    getTime()
    {
        return this.toString();
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

    convertHourToStr() : string
    {   
        this.checkHour();
        if(this.hour < 10) return '0' + this.hour;
        
        return this.hour.toString();
    }

    convertMinToStr() : string
    {
        if(this.min == undefined) this.min = 0;

        if(this.min != undefined && this.min < 10) return '0' + this.min;

        return '' + this.min;
    }

    toString() : string
    {
        let hour = this.convertHourToStr();
        let min = this.convertMinToStr();        
        return `${hour}:${min}`;
    }

    checkHour()
    {
        if(this.hour == 24) this.hour = 0;
    }
    
}