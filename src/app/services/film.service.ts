
// @ts-ignore
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {modelFilm} from "../Models/modelFilm";
import {map} from "rxjs/operators";

// @ts-ignore
@Injectable(

)
export class FilmService{

private url="http://www.omdbapi.com/?i=tt3896198&apikey=a21b9531"


  constructor(private http:HttpClient) {

   }

   getData(): Observable<modelFilm> {
 return this.http.get(this.url).pipe(map((response :any)=> response.json()));
 }

    getFilm():Observable<modelFilm>{
     return this.http.get<modelFilm>(this.url);
  }

}
