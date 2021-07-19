import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  @Input()

  poster!: string;
  title !: string;
  Genre !: string;

  films!: any[];

  constructor() { }

  ngOnInit(): void {
    
  }

  


}
