import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {

  @Input()
  public characters: Character[] =[]

  @Output()
  public deleteCharacterById: EventEmitter<string> = new EventEmitter()

  indexEmiter( index: string ) {
    this.deleteCharacterById.emit( index )
  }


}
