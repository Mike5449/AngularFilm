import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardFilmComponent } from './card-film/card-film.component';
import { TableauFilmComponent } from './tableau-film/tableau-film.component';
import { DescriptionFilmComponent } from './description-film/description-film.component';

import { FilmDescService} from 'src/app/services/film-desc.service';
import { FilmService } from 'src/app/services/film.service';
import { FilmComponent } from './film/film.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {path:"cardFilm" , component : CardFilmComponent},
  {path:"tableauFilm" , component : TableauFilmComponent},
  {path:"descFilm" , component : DescriptionFilmComponent},
  {path:"" , redirectTo:'cardFilm',pathMatch:'full'},
  {path:"**" , redirectTo :"cardFilm"},
];
@NgModule({
  declarations: [
    AppComponent,
    CardFilmComponent,
    TableauFilmComponent,
    DescriptionFilmComponent,
    FilmComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [FilmService, FilmDescService],
  bootstrap: [AppComponent]
})
export class AppModule { }
