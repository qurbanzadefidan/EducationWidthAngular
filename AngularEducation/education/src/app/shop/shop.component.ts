import { Component, OnInit } from '@angular/core';
import {Product} from "./product";
import {AlertifyService} from "../services/alertify.service";
declare  let alertify;
import {AddToCartService} from "../services/add-to-cart.service";
import {ActivatedRoute} from "@angular/router";
import {Basket} from "../model/basket"
import {element} from "protractor";
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  addToCartProductRes: Basket= new Basket();

  constructor( private addcart:AddToCartService,
               private route: ActivatedRoute,) { }
  filterText=""
 Products:Product[]=[
  {title:"Psychology of Money",img:"assets/img/shop/shop-img-1.jpg",pirce:36,dis:18,id:1},
  {title:"Ego is The Enemy",img:"assets/img/shop/shop-img-2.jpg",pirce:45,dis:20,id:2},
  {title:"Der liebe",img:"assets/img/shop/shop-img-3.jpg",pirce:12,dis:6,id:3},
  {title:"Failed it!",img:"assets/img/shop/shop-img-4.jpg",pirce:87,dis:65,id:4},
  {title:"E.A.POE",img:"assets/img/shop/shop-img-5.jpg",pirce:45,dis:35,id:5},
  {title:"Dior",img:"assets/img/shop/shop-img-6.jpg",pirce:52,dis:24,id:6},
  {title:"Your Heart is the Sea",img:"assets/img/shop/shop-img-7.jpg",pirce:45,dis:42,id:7},
  {title:"HardCover",img:"assets/img/shop/shop-img-8.jpg",pirce:12,dis:11,id:8},
  {title:"Book Cover Mockup",img:"assets/img/shop/shop-img-9.jpg",pirce:35,dis:25,id:9},

];
  ngOnInit(): void {
  }

  addToCart(item) {
    this.addcart.addToCart(item);
    alertify.success("Added!");

  }
}
