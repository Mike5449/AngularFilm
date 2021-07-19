import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { modelFilm } from '../Models/modelFilm';
import { Observable } from 'rxjs';

import {map} from 'rxjs/operators';

 //import 'rxjs/add/operator/map'

// import 'rxjs/Rx'

@Injectable(

)
export class FilmService{

private url="http://www.omdbapi.com/?i=tt3896198&apikey=a21b9531"


  constructor(private http:HttpClient) {

   }

   getData(): Observable<modelFilm[]> {
 return this.http.get(this.url).pipe(map((response :any)=> response.json()));
 }

    getFilm():Observable<modelFilm[]>{
      
     return this.http.get<modelFilm[]>(this.url);
  }

}
