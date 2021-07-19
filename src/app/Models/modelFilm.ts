import {Rating} from "./ratting.model";

export interface iModelFilm{
    Title?: string;
    Year?: string;
    Type?: string;
    Poster?: string;
    imDbId?: string;
    Ratings?: Rating[];
}

export class modelFilm implements iModelFilm{

constructor(
    Title: string,
    Year: string,
    Type: string,
    Poster: string,
    imDbId: string,
    Ratings?: Rating[]
){

}
}
