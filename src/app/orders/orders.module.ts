import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageAddOrComponent } from './pages/page-add-or/page-add-or.component';
import { PageEditOrdersComponent } from './pages/page-edit-orders/page-edit-orders.component';
import { TestComponent } from './pages/test/test.component';


@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageAddOrComponent,
    PageEditOrdersComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
