import { Injectable } from '@angular/core';
import { Product } from '../components/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  index:number=-1;


  products=new Array<Product>(
    new Product("bread",10,20),
    new Product("cake",30,20),
    new Product("milk",15,30),
    new Product("biscuit",25,20),
    new Product("chocolate",10,50)
  );

  getAllProducts():Array<Product>{
    return this.products;
  }

  // getProductPriceByName(pname:string):any{
  //   var rows=this.products.filter(x=>x.pname==pname);

  //   return rows[0].price;
   
  // }

  DeleteProductByName(pname:string){
    this.index=this.products.findIndex(x=>x.pname==pname);
    this.products=this.products.slice(this.index,1);


    // return this.products;
  }
  
  AddProduct(p:Product)
  {
    this.products.push(p);
  }

  getProductByName(pname:string):Product{
    var rows=this.products.filter(x=>x.pname==pname);

    return rows[0];
  }

  getProducts():Product[]{
    return this.products.slice();
  }


  constructor() { }
}
