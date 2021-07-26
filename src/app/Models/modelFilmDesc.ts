
export interface iModelFilmDescFilm {
    Poster?: string;
    Film_description?: string ;
    Title?: string ;
    Year?: string ;
    Rated?: string ;
    Released?: string ;
    Runtime?: string ;
    Genre?: string ;
    PlotDescription?: string ;
    Country?: string ;
    Language?: string ;
}


export class modelFilmDesc implements iModelFilmDescFilm{

    constructor(
        public Poster?: string,
        public  Film_description?: string, 
        public Title?: string ,
        public Year?: string ,
        public Rated?: string ,
        public Released?: string ,
        public Runtime?: string ,
        public Genre?: string ,
        public PlotDescription?: string ,
        public Country?: string ,
        public Language?: string ,
    ) {

    }



}