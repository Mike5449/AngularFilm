import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  url?:"http://www.omdbapi.com/?i=tt3896198&apikey=a21b9531";

  constructor(private http:HttpClient){

    // this.http.get("http://www.omdbapi.com/?i=tt3896198&apikey=a21b9531").toPromise.then(data=>{
    //      console.log(data);
    // })
  }
  title = 'AngularMovie';
}
