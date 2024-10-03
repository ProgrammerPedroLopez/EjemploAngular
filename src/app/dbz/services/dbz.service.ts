import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public characters:Character[] = [
    {id:uuid(), name: 'Krillin', power: 1000},
    {id:uuid(), name:'Goku', power: 10000},
    {id:uuid(), name:'Vegeta', power: 9000}];

  onNewCharacter(character:Character):void
  {
    const NewCharacter:Character = {id: uuid(), ...character}
    this.characters.push(NewCharacter);
  }

  /*onDeleteCharacter(index:number):void
  {
    this.characters.splice(index,1);
  }*/

  deleteCharacterByID(id:string):void
  {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
