import {Rating} from "./ratting.model";

export interface iSearch{
    Title?: string;
    Year?: string;
    Type?: string;
    Poster?: string;
    imdbID?: string;
    Ratings?: Rating[];
}

export class Search implements iSearch{

constructor(
    public Title?: string,
    public  Year?: string,
    public Type?: string,
    public Poster?: string,
    public imdbID?: string,
    public Ratings?: Rating[]
){

}
}
