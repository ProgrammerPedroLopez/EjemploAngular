import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'ironman';
  public age:number = 45;
  public btnNameExists:boolean = true;
  public btnAgeExists:boolean = true;

  get capitalizeName():string
  {
    return this.name.toUpperCase();
  }

  getHeroDescription():string
  {
    return `${this.name} - ${this.age}`;
  }

  public changeName():void
  {
    this.btnNameExists = false;
    this.name = 'spiderman';
  }

  public changeAge():void
  {
    this.btnAgeExists = false;
    this.age = 25;
  }
}
