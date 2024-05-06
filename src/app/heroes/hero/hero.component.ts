import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  
  nombre = "Spiderman"
  edad = 23
  metodo = "nombre()"
  capitalizado = "¿?"



}
