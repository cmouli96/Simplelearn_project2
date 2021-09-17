import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/services/admin/admin.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Cart } from '../cart';
import { Product } from '../product';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

 
  
  items:Product[];
  item:Cart=new Cart();
  x:Product[]=[];
  total=0;
  pname:string='';
  // dname:string='';
  p:Product=new Product("0",0,0);
  prod:Product=new Product("0",0,0);
  availableproducts:Product[]=[];


  @Input() ordered_qty:number=0;
 
  


  constructor(private _ps: ProductService,
    private _cs:CartService,private _as:AdminService) {
    this.items = this._cs.getCartItems();
}

getProductByNameViaService(pname:string){
  this.p=this._ps.getProductByName(pname);
}



AddItemtoCartViaService(pname:string,ordered_qty:number){
  this.p=this._ps.getProductByName(pname);

  // this.existingqty=this.p.qty;

  this.p.qty=this.p.qty-ordered_qty;
  this.p.ordered_qty=ordered_qty;

  // this.item.name=this.p.pname;
  // this.item.price=this.total;
  // this.item.quantity=qty;



  this._cs.addCartItems(this.p);
  this.p.cost=ordered_qty*this.p.price;
    this.total=this.total+this.p.cost;

    // this._ps.DeleteProductByName(pname);
    // this.prod=this.p;
    // this.prod.qty=this.existingqty-qty;

    // this._ps.AddProduct(this.p);

    // this.availableproducts=this._as.getAllProducts();

  

  this.x=this._cs.getCartItems();
  console.log(this.x);

}
// AddItemtoCartViaService(item:Cart){

  
//   console.log(item);
//   this._cs.addCartItems(item);
//   this._cs.getCartItems().forEach(cart_item => {
//     this.x.push(cart_item);
//   });
// }

  // AddItemtoCartViaService(item:Cart){
  //   console.log(item);
  //   this._cs.addCartItems(item);
  //   this._cs.getCartItems().forEach(cart_item => {
  //     this.x.push(cart_item);
  //   });
  // }
  // private subscription!: Subscription;

   ngOnInit() {
    this.availableproducts=this._as.getAllProducts();
    
  }

  // calcTotalCost(items: any){
  //   let total=0;
  //   items.array.forEach((item:any) => {
  //     total+=(item.price * item.qty);
  //   });
  //   this.total=total;
  // }


}
