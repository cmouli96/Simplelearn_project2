import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Product } from '../product';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  name:string='';
  dname:string='';
  qty:number=0;
  price:number=0;

  product:Product=new Product("0",0,0);

  products:Product[]=[];

  

  AddProduct(name:string,qty:number,price:number)
  {
    this.product.pname=name;
    this.product.qty=qty;
    this.product.price=price;
    this.product.cost=price*qty;
    this._as.AddProduct(this.product);

    this.products=this._as.getAllProducts();
    console.log(this._as.getAllProducts());
  }

  DeleteProduct(dname:string)
  {
    this._as.DeleteProduct(dname);
    this.products=this._as.getAllProducts();
    // console.log(this._as.getAllProducts());
  }


  constructor(private _as:AdminService) {
    this.products=this._as.getAllProducts();
   }

  ngOnInit(): void {
  }

}
