import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, Input, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-listado-personajes',
  templateUrl: './listado-personajes.component.html',
  styleUrl: './listado-personajes.component.css',
})
export class ListadoPersonajesComponent
{
  @Input()
  public CharacterList:Character[] = [
    {name: 'Goku', power: 10000}];

  /*onDeleteCharacter(index:number):void
  {
    //emitir el ID del personaje
    console.log({index});

    console.log('emit character');
    console.log(this.CharacterList);

    this.onDelete.emit(index);

  }*/

  deleteCharacterByID(Character:Character):void
  {
    this.onDelete.emit(Character.id);
    console.log(Character);
  }

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter(); //emitir index

}
