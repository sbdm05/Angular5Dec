import { StateOrder } from '../enums/state-order';
import { OrderI } from '../interfaces/order-i';

export class Order implements OrderI {
  tjmHt = 1200;
  nbJours = 1;
  tva = 20;
  state = StateOrder.OPTION;
  typePresta!: string;
  client!: string;
  comment!: string;
  id!: number;
  // constructor
  constructor(obj?: Partial<Order>){
    if(obj){
      // prendre les nouvelles valeurs de obj et les affecter à this
      Object.assign(this, obj)
    }
  }

}

// créer nouvel Order
// new Order()
