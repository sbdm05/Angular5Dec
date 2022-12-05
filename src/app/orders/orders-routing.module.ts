import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddOrComponent } from './pages/page-add-or/page-add-or.component';
import { PageEditOrdersComponent } from './pages/page-edit-orders/page-edit-orders.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { TestComponent } from './pages/test/test.component';

// créer des routes
// Guards
const routes: Routes = [
  { path: 'orders', component: PageListOrdersComponent },
  { path: 'orders/add', component: PageAddOrComponent },
  { path: 'orders/edit', component: PageEditOrdersComponent },
  { path: 'orders/test', component: TestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
