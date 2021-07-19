
export interface iModelFilmDescFilm {
    Film_description?: string 
    Title?: string 
    Year?: string 
    Rated?: string 
    Released?: string 
    Runtime?: string 
    Genre?: string 
    PlotDescription?: string 
    Country?: string 
    Language?: string 
}


export class modelFilmDesc implements iModelFilmDescFilm{

    constructor(
        Film_description?: string, 
        Title?: string ,
        Year?: string ,
        Rated?: string ,
        Released?: string ,
        Runtime?: string ,
        Genre?: string ,
        PlotDescription?: string ,
        Country?: string ,
        Language?: string ,
    ) {

    }



}