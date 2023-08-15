export class Cart {
        id : number;
        userid :number; 
        itemname : string;
        itemprice :number;
        quantity : number;
        subtotal : number;
        constructor(){
            this.id= 0;
            this.userid = 0;
            this.itemname = '';
            this.itemprice =0;
            this.quantity = 0;
            this.subtotal=0;
        }
}
