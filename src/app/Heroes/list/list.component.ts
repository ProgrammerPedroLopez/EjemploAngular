import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public Games:string[] = ['Crash Bandicoot', 'Cortex Strikes Back', 'Warped', 'Crash Team Racing'];
  public deletedGame?:string;

  public removeLastGame():void
  {
    this.deletedGame = this.Games.pop();
  }
}
