import { Component, input, OnInit } from '@angular/core';
import { ListadoPersonajesComponent } from '../components/listado-personajes/listado-personajes.component';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-bdz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent
{
  constructor(private dbzService:DbzService){}

  get characters():Character[]
  {
    return [...this.dbzService.characters];
  }

  OnDeleteCharacter(id:string):void
  {
    this.dbzService.deleteCharacterByID(id);
  }

  onNewCharacter(character:Character):void
  {
    this.dbzService.onNewCharacter(character);
  }
}
