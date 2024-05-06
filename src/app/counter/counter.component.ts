import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = 10

  incrementar( value: number ):void {
    this.counter += value
  }

  decrementar( value: number ):void {
    this.counter -= value
  }

  reset():void {
    this.counter = 10
  }

}
