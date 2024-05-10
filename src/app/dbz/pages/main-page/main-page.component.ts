import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor(private dbzService: DbzService ) {}
  
  public get characters() : Character[] {
    return [ ...this.dbzService.characters ]
  }
  
  public deleteCharacterById( id: string ) {
    this.dbzService.deleteCharacterById( id )
  }

  public onNewCharacter( character: Character ) {
    this.dbzService.onNewCharacter( character )
  }

  /**
   * reset
   */
  public reset() {
    this.dbzService.reset()
  }




}
