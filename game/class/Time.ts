export default class Time {
    private time : number = 0
    private tic : number = 0
    private fnc : Function

    constructor(fnc : Function){
        this.fnc = fnc
    }

    actual(){
        this.tic += 1
        if(this.tic = 60){
            this.tic = 0
            this.time+=1
            this.fnc(this.time)
        }
    }

    getTime(){
        return this.time / 60
    }

}