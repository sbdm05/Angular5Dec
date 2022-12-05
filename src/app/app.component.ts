import { Component } from '@angular/core';

// décorateur = metadatas
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'crm';

  public open: boolean = true;

  // toutes les props et méthodes sont
  // disponibles dans le template html correspondant

  public onClick() {
    // vérifier que le clic est bien détecté
    this.open = !this.open;
    console.log(this.open);
  }
} // ne rien écrire après cette ligne
