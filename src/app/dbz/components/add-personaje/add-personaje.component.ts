import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-personaje',
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.css',
})
export class AddPersonajeComponent
{
  @Output()
  public OnNewCharacter: EventEmitter<Character> = new EventEmitter;

  public character: Character = {name: '', power: 0};

  emitCharacter():void
  {
    console.log('emit character');
    console.log(this.character);

    if(this.character.name.length === 0) return;

    this.OnNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 };

    // this.character.name = '';
    // this.character.power = 0;
  }
}
