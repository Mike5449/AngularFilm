// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {iModelFilm, modelFilm} from '../Models/modelFilm';
import { FilmDescService } from '../services/film-desc.service';
import { FilmService } from '../services/film.service';

// @ts-ignore
@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.css']
})
export class CardFilmComponent implements OnInit {

  public film?:iModelFilm ;

  constructor(private filmService:FilmService) { }

  ngOnInit(): void {

    this.filmService.getFilm()
    .subscribe(data=>this.film=data);

    console.log(this.film)
  }

}
