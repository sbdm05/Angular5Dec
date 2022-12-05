import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PageEditOrdersComponent } from './orders/pages/page-edit-orders/page-edit-orders.component';

import { PageListOrdersComponent } from './orders/pages/page-list-orders/page-list-orders.component';
import { PageNotFoundComponent } from './page-not-found/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  // définir des routes
  { path: '', redirectTo: 'orders', pathMatch: 'full' },
  // wildcard = page 404
  // lazyloading
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router){
    console.log(this.router.config, 'tableau de routes')
  }
}
