export class product
{
    productname;
    productprice;
    productquantity;
    total:number;
    constructor(pn,pp,pq)
    {
        this.productname=pn;
        this.productprice=pp;
        this.productquantity=pq;
        this.total=pp*pq;
    }
}
