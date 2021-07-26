// @ts-ignore
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import {iSearch, Search} from '../Models/search';
import { FilmDescService } from '../services/film-desc.service';
import { FilmService } from '../services/film.service';

// @ts-ignore
@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.css']
})
export class CardFilmComponent implements OnInit {
  

   films?:Search[] ;
   titreFilm="";


  constructor(private filmService:FilmService ,private router:Router) { }

  ngOnInit(): void {


    this.filmService.getFilm('Titanic')
   
    .subscribe((data:Search[])=>{
     this.films=data;

    });

    
  }

  descFilm(id?:string){
    
    this.router.navigate(['/descFilm',id])
  }

  search(){

    this.filmService.getFilm(this.titreFilm)
   
    .subscribe((data)=>{
     this.films=data;

    });
  }
}
