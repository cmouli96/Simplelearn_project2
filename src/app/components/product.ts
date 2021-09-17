export class Product {
        pname:string;
        qty:number;
        price:number;
        cost:number=0;
        ordered_qty:number=0;
    
        constructor(pname:string,qty:number,price:number){
            this.pname=pname;
            this.qty=qty;
            this.price=price;
        }
}
