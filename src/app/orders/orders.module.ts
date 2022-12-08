import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageAddOrComponent } from './pages/page-add-or/page-add-or.component';
import { PageEditOrdersComponent } from './pages/page-edit-orders/page-edit-orders.component';
import { TestComponent } from './pages/test/test.component';
import { SharedModule } from '../shared/shared.module';
import { FormOrderComponent } from './components/form-order/form-order.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageAddOrComponent,
    PageEditOrdersComponent,
    TestComponent,
    FormOrderComponent,
  ],
  imports: [CommonModule, OrdersRoutingModule, SharedModule, ReactiveFormsModule],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }],
})
export class OrdersModule {}
