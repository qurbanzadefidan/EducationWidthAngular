import { Component, OnInit } from '@angular/core';
import {AddToCartService} from "../services/add-to-cart.service";
import {Router} from "@angular/router";
import {AlertifyService} from "../services/alertify.service";

declare  let alertify;
@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  items;
  quantity: number = 0;
  i=1;
  constructor( private cartService: AddToCartService,
               private router: Router) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();

  }


  increase(id){
    if (this.i !=100){
      this.i++;
      this.quantity=this.i;
    }
  }
  decrease(id){
    if (this.i !=1){
      this.i--;
      this.quantity=this.i;
    }
  }

  clearCart(){
    this.items=[];
    return this.items;

      alertify.success("Cart Empty")

  }


}
