import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cart } from '../components/cart';
import { Product } from '../components/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  cart_items:Product[]=[];
  

  getCartItems(){
    return this.cart_items;
  }

  deleteCartItem(index: number){
    this.cart_items.slice(index,1);
  }

  addCartItems(item:Product){
    this.cart_items.push(item);
  }

  constructor() { }
}
