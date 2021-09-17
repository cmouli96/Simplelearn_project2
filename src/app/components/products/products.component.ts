import { Component} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

 products=new Array<Product>();
  
 constructor(private _ps:ProductService){
   this.products=this._ps.getAllProducts();
 }

}
