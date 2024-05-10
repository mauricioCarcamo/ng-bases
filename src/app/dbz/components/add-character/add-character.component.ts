import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter()

  @Output()
  onReset: EventEmitter<void> = new EventEmitter()
  
  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void {
    if (this.character.name =='') return

    this.onNewCharacter.emit( this.character )

    this.character.name = ""
    this.character.power = 0
  }

  emitReset(): void {
    this.onReset.emit()
  }

}
