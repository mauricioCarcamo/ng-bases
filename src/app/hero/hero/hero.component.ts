import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  
  public nombre = "spiderman"
  public edad = 23
  public get capitalizado() {
    return this.nombre.toLocaleUpperCase()
  }
  public metodo() {
    return `${ this.nombre } - ${ this.edad }`
  }

  public changeName() {
    this.nombre = "ironman"

  }

  public changeAge() {
    this.edad = 43
  }

  public reset() {
    this.nombre = "spiderman"
    this.edad = 23
  }







}
