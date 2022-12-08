import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-or',
  templateUrl: './page-add-or.component.html',
  styleUrls: ['./page-add-or.component.scss'],
})
export class PageAddOrComponent implements OnInit {
  public item: Order = new Order();

  constructor(private ordersService: OrdersService, private router: Router) {}

  ngOnInit(): void {}

  public onAdd(obj: Order) {
    console.log(obj, 'depuis parent');
    // envoyer l'item dans bdd
    // post dans le service
    // redirection
    this.ordersService.add(obj).subscribe(() => {
      // redirection avec Router - attention besoin d'injecter dans constructor
      this.router.navigate(['orders']);
    });
  }
}
