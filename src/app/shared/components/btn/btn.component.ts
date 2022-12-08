import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent implements OnInit {
  // récupérer la propriété
  @Input() label!: string;
  @Input() route!: string;
  @Input() styleBtn!: string;

  constructor() {
    //console.log(this.label); // ??? undefined
    //console.log(this.route); // ??? undefined
  }

  // HOOKS = accroche
  // déclenché une seule fois
  ngOnInit(): void {
    //console.log(this.label); // ??? ajouter ?
    //console.log(this.route); // ??? ajouter ?
  }

  // déclenchée plusieurs fois
  ngOnChanges(){
    //console.log(this.label); // ??? ajouter ?
    // console.log(this.route); // ??? ajouter ?
  }
}
