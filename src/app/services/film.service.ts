
// @ts-ignore
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {iModelFilm, modelFilm} from "../Models/modelFilm";
import {map} from "rxjs/operators";
import { Injectable } from '@angular/core';

// @ts-ignore
@Injectable({providedIn: 'root'})
export class FilmService{

private url="http://www.omdbapi.com/?i=tt3896198&apikey=a21b9531"


  constructor(private http:HttpClient) {

   }

   getData(): Observable<iModelFilm> {
 return this.http.get(this.url).pipe(map((response :any)=> response.json()));
 }

    getFilm():Observable<iModelFilm>{
     return this.http.get<iModelFilm>(this.url);
  }

}
