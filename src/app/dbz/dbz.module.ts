import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListadoPersonajesComponent } from './components/listado-personajes/listado-personajes.component';
import { AddPersonajeComponent } from './components/add-personaje/add-personaje.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainPageComponent, ListadoPersonajesComponent,AddPersonajeComponent],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
