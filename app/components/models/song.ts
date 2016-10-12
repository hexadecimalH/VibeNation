export class Song{
    public SongName:string;
    public Artist:string;
    public ImgString:string[];
    public YTurl:string;
    constructor(){}
    makeQuery(){
        return this.SongName.trim().replace(" ","+") +"+"+this.Artist.trim().replace(" ","+");
    }
}