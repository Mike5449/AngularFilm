
// @ts-ignore
import {HttpClient,Response} from "@angular/common/http";
import {Observable} from "rxjs";
import {iSearch, Search} from "../Models/search";
import {map} from "rxjs/operators";
import { Injectable } from '@angular/core';

// @ts-ignore
@Injectable({providedIn: 'root'})

export class FilmService{


  constructor(private http:HttpClient) {

  }


  // getData(): Observable<iModelFilm> {
     

  //     return this.http.get(this.url).pipe(map((response :Response)=> response.json()));

  // }

  getFilm(value:string):Observable<any>{
    const url='http://www.omdbapi.com/?s='+value+'&apikey=a21b9531';

      return this.http.get<any>(url).pipe(map(data=> data.Search));

  }

  searchMovieById(value:string):Observable<any>{

    const url='http://www.omdbapi.com/?i='+value+'&apikey=a21b9531';

      return this.http.get<any>(url).pipe(map(data=> data));

  }

}
