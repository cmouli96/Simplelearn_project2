import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

 id:number=0;
 pname:string='';
 x:any;

 constructor(private _ps:ProductService){}

getProductByIdViaService(id:number){
  this.x=this._ps.getProductById(id);
}

getProductByNameViaService(pname:string){
  this.x=this._ps.getProductByName(pname);
}


  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params)=>{
    //   this.product=this.products.filter((product:{id:number})=>product.id=== +params.productid)[0];
    // });

    // this.activatedRoute.queryParams.subscribe((qs)=>{
    //   console.log('Got the QS as :',qs);
    // });
  }

}
