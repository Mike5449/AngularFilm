export interface iModelFilm{
    Title?: string;
    Year?: string;
    Type?: string;
    Poster?: string;
    imDbId?: string;
}

export class modelFilm implements iModelFilm{

constructor(
    Title: string,
    Year: string,
    Type: string,
    Poster: string,
    imDbId: string,
){

}
}