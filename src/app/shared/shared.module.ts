import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';
import { TotalPipe } from './pipes/total.pipe';
import { RouterModule } from '@angular/router';


// décorateur
@NgModule({
  declarations: [BtnComponent, TotalPipe], // aucun composant
  imports: [CommonModule, RouterModule],
  exports: [TotalPipe, BtnComponent],
})
export class SharedModule {}
