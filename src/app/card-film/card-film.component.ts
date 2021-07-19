import { Component, OnInit } from '@angular/core';
import { modelFilm } from '../Models/modelFilm';
import { FilmDescService } from '../services/film-desc.service';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.css']
})
export class CardFilmComponent implements OnInit {

  public films?:modelFilm[] ;

  constructor(private filmService:FilmService) { }

  ngOnInit(): void {
   
    this.filmService.getFilm()
    .subscribe(data=>this.films=data);

    console.log(this.films)

    
  }

}
