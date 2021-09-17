import { Injectable } from '@angular/core';
import { Product } from 'src/app/components/product';
import { ProductService } from '../product.service';


@Injectable({
  providedIn: 'root'
})


export class AdminService {

  ad_index:number=0;

 products:Product[]=[];

AddProduct(p:Product)
{
  this.products.push(p);
}

DeleteProduct(name:String)
{
  this.ad_index=this.products.findIndex(x=>x.pname==name);
  this.products.splice(this.ad_index,1);
}


getAllProducts()
{
  return this.products;
}


  constructor(private _ps:ProductService) {
    this.products=this._ps.getAllProducts();
   }
}
