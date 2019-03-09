import { Component } from '@angular/core';
import { product } from './Model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{ 
  
  //Example of Two-way data binding 
  
  product;
  pricea;
  quantity;

  productdata:product[] = [];

  adddata(pname,price,qty)
  {
    var  v = new product(pname,price,qty);
    this.productdata.push(v);
    this.product='';
    this.pricea='';
    this.quantity='';
    return this.productdata;
  }

  //Example of ngClass
  img:string="rounded";

  imgtype1()
    {
       this.img ="rounded";
    }
  imgtype2()
    {
       this.img ="rounded-circle";
    }
  imgtype3()
    {
       this.img ="img-thumbnail";
    }
 
 
    //Example of ngStyle 
    tclr='';
    bclr='';
    ff='';
    fs='';
    
  changestyle()
  {
    let st={
      'color':this.tclr,
      'background-color':this.bclr,
      'font-family':this.ff,
      'font-style':this.fs
    };  
    return st;  
  }
  
     // Example of Component Iteraction
     public EmployeeData=
     [
       {'Name':'Mayank','Age':20,'City':'Mumbai','Gender':'Male'},
       {'Name':'Shruti','Age':22,'City':'Ahmedabad','Gender':'Female'},
       {'Name':'Meet','Age':20,'City':'Benglore','Gender':'Male'},
       {'Name':'Rushika','Age':21,'City':'Nadiad','Gender':'Female'},
       {'Name':'Abhisek','Age':25,'City':'Patna','Gender':'Male'},
       {'Name':'Roshan','Age':20,'City':'Mumbai','Gender':'Male'}
     ]
}
