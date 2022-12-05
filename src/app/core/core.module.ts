import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { OrdersModule } from '../orders/orders.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FooterComponent, NavComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [OrdersModule, FooterComponent, NavComponent, HeaderComponent],
})
export class CoreModule {}
