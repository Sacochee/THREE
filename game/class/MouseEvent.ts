export default class {
    private leftCanDrag = false
    private rightCanDrag = true

    private leftCanMouve = true
    private rightCanMouve = true


    getCanDrag(){
        return {
            left : this.leftCanDrag,
            rigth : this.rightCanDrag
        }
    }

    getCanMouve(){
        return {
            left : this.leftCanMouve,
            right : this.rightCanMouve
        }
    }

    setCanDragLeft(bool : boolean){
        this.leftCanDrag = bool
    }

    setCanDragRight(bool : boolean){
        this.rightCanDrag = bool
    }

    setCanMouveRight(bool : boolean){
        this.rightCanMouve = bool
    }
    setCanMouveLeft(bool : boolean){
        this.leftCanMouve = bool
    }
}