import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CharactersComponent } from './components/characters/characters.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { OtherPageComponent } from './pages/other-page/other-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent,
    AddCharacterComponent,
    OtherPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent,
  ]
})
export class DbzModule { }
