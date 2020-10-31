import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class AddToCartService {

  constructor() { }
  items = [];

  addToCart(item) {
    this.items.push(item);
   return  localStorage.getItem('accessToken')

  }


  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}

