// @ts-ignore
import { Component, OnInit ,Input } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  @Input()
  poster?: string;

  @Input()
  title?: string;

  @Input()
  type?: string;

  constructor() { }

  ngOnInit(): void {

  }




}
