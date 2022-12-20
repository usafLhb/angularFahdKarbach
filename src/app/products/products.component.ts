import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { throwError } from 'rxjs'; 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   
  products:any;  
  constructor(private http:HttpClient  ) { 
    

  }

 

  ngOnInit(): void {
    this.http.get("http://localhost:8888/INVENTORY-SERVICE/products").subscribe({
      next:(data)=>{
        console.log(data);
       this.products=data;
      },
      error:(err)=>{

      }
    }) 
  }
 


 
 

}
