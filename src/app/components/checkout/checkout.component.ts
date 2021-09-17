import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  x:Product[]=[];
  total=0;
  

  pmethod?:string;
  method?:string;
  msg?:string;

  SetMethod(pmethod:string){
    if(pmethod==='d'){
      this.method="Debit"
    }
    else if(pmethod==='cr'){
      this.method="Credit";
    }
    else if(pmethod==='c'){
      this.method="Cash";
    }
  }

  

  display(){
    if(this.method=="Debit")
    {
      this.msg=`You have completed your transaction using Debit Card`;
    }
    else if(this.method=="Credit"){
      this.msg=`You have completed your transaction using Credit Card`;
    }
    else if(this.method=="Cash"){
      this.msg=`You have completed your transaction using COD method`;
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.x=history.state.x;
    this.total=history.state.total;
    // console.log(history.state);
  }

}
