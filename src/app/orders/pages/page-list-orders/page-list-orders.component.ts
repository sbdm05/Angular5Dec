import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  // propriété pour stocker data
  public collection!: Order[];

  public headers: string[] = [
    'Action',
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];

  constructor(private ordersService: OrdersService) {
    // déclencher l'appel http + afficher le résultat dans la page
    this.ordersService.collection.subscribe((data) => {
      // console.log(data);
      this.collection = data;
    });
  }

  ngOnInit(): void {}

  //méthode pour calculer totalHT et total TTC
  // public total(val:number, coef: number, tva?: number): number{
  //   console.log('déclenché');
  //   if(tva) return val * coef * (1 + tva/100);
  //   return val * coef;
  // }


}
