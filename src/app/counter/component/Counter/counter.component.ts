import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>hola counter</h1>
  <h3>Counter: {{counter}}</h3>
<button (click)="IncreaseBy(1)">+1</button>
<button (click)="IncreaseBy(-1)">-1</button>
<button (click)="Reset()">reset</button>
  `
})

export class CounterComponent {
  constructor() { }

  public counter:number = 10;
  private originalValue:number = 10;
  public IncreaseBy(param:number):void
  {
    this.counter += param;
  }

  public Reset():void
  {
    this.counter = this.GetOriginalValue();
  }

  private GetOriginalValue():number
  {
    return this.originalValue;
  }
}
