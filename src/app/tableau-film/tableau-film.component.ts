import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Search } from '../Models/search';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-tableau-film',
  templateUrl: './tableau-film.component.html',
  styleUrls: ['./tableau-film.component.css']
})
export class TableauFilmComponent implements OnInit {

  constructor(private filmService:FilmService , private router:Router) { }

  films?:Search[] ;

  ngOnInit(): void {

    this.filmService.getFilm('Titanic')
   
    .subscribe((data)=>{
     this.films=data;

      //console.log(this.films);
    });
  }

  descriptionFilm(id:number){
    
    this.router.navigate(['/descFilm',id])

  }

}
