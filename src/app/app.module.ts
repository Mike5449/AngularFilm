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
// @ts-ignore
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

// @ts-ignore
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path:"cardFilm" , component : CardFilmComponent},
  {path:"tableauFilm" , component : TableauFilmComponent},
  {path:"descFilm/:id" , component : DescriptionFilmComponent},
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
    HttpClientModule,
    FormsModule
  ],
  providers: [FilmService, FilmDescService],
  bootstrap: [AppComponent]
})
export class AppModule { }
