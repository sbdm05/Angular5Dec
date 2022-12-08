import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private collection$ !: Observable<Order[]>;

  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    // faire appel à set
    // backticks = `` =  altGr7
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`);
  }

  public get collection() {
    return this.collection$;
  }

  public set collection(col: Observable<Order[]>) {
    this.collection$ = col
  }

  // méthode pour POST
  // Observable / Observer avec .subscribe()
  public add(item: Order): Observable<Order>{
    return this.http.post<Order>(`${this.urlApi}/orders`, item);
  }

  // méthode pour retrouver item by id
  public getItemById(id: number): Observable<Order>{
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }

  // méthode pour modifier un objet
  public update(obj: Order): Observable<Order>{
    return this.http.put<Order>(`${this.urlApi}/orders/${obj.id}`, obj);
  }


}
