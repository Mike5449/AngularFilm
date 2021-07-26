import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { modelFilmDesc } from '../Models/modelFilmDesc';
import { Search } from '../Models/search';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-description-film',
  templateUrl: './description-film.component.html',
  styleUrls: ['./description-film.component.css']
})
export class DescriptionFilmComponent implements OnInit {

  filmDesc?:modelFilmDesc;

  constructor(private route:ActivatedRoute ,private router :Router ,private filmServ :FilmService ) { }

  ngOnInit(): void {

    const id=this.route.snapshot.params['id'];
           
    this.filmServ.searchMovieById(id)
   
    .subscribe((data)=>{this.filmDesc=data;
     
      console.log(this.filmDesc);
    });

       

  }

}
