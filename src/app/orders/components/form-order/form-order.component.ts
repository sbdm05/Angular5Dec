import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {

  @Input() init !: Order;
  @Output() submitted = new EventEmitter<Order>();

  // créer une propriété pour stocker l'énum
  // Object.values pour transformer en array
  public states = Object.values(StateOrder);

  constructor(private fb: FormBuilder) {
    console.log(this.init); // undefined
  }

  // créer une propriété pour le form
  public form!: FormGroup;


  ngOnInit(): void {
    // définir un objet
    this.form = this.fb.group({
      // objet
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      typePresta: [this.init.typePresta],
      client: [this.init.client, [Validators.required, Validators.minLength(3), Validators.maxLength(10) ]],
      comment: [this.init.comment],
      id: [this.init.id],
    });
  }

  onSubmit(){
    console.log(this.form.value);
    this.submitted.emit(this.form.value);
  }

}
