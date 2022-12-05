import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';


// décorateur
@NgModule({
  declarations: [
    BtnComponent
  ], // aucun composant
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
