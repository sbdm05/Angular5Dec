import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-orders',
  templateUrl: './page-edit-orders.component.html',
  styleUrls: ['./page-edit-orders.component.scss'],
})
export class PageEditOrdersComponent implements OnInit {
  // extraire l'id de l'url
  // appel vers la bdd pour retrouver l'objet concerné
  // quand on a retrouvé l'objet
  // stocker dans une prop

  public item!: Order; // undefined = false

  constructor(
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private router : Router
  ) {
    // ici on transforme en type number
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    console.log(typeof id); // attention par défaut, string
    // console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    // faire appel au service ordersService
    this.ordersService.getItemById(id).subscribe(data => {
      console.log(data)
      // faire passer data à app-form
      this.item = data;
    });
  }

  ngOnInit(): void {}

  public onEdit(obj: Order){
    console.log(obj);
    // faire appel au service update()
    this.ordersService.update(obj).subscribe(()=>{
      // redirection
      this.router.navigate(['orders'])
    })

  }
}
