export class Song{
    constructor(public songName:string,public artistName:string){}
    makeQuery(){
        return this.songName.trim().replace(" ","+") +"+"+this.artistName.trim().replace(" ","+");
    }
}