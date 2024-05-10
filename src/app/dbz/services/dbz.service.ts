import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[] = [
    { 
      id: uuid(),
      name: "Goku", 
      power: 9000
    },
    {
      id: uuid(),
      name: "Trunks",
      power: 1000
    },
    {
      id: uuid(),
      name: "Veggeta",
      power: 7500
    },
  ]

  public onNewCharacter( character: Character ) {
    this.characters.push( { ...character } )
  }

  public deleteCharacterById( id: string ) {
    this.characters = this.characters.filter( item => item.id !== id )
  }

  /**
   * reset
   */
  public reset() {
   this.characters = [
    { 
      id: uuid(),
      name: "Goku", 
      power: 9000
    },
    {
      id: uuid(),
      name: "Trunks",
      power: 1000
    },
    {
      id: uuid(),
      name: "Veggeta",
      power: 7500
    },
  ] 
    
  }
}
