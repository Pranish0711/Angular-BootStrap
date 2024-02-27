import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {


  phone="";
  email= "@yahoo.com"

@Input("aaa")
  PList:String[]=[];

@Output("bbb")
emit = new EventEmitter();

  rem(){
    this.emit.emit()
  }

  contact(data:NgForm){
    console.log("call....");
    console.log(data);
  }

  
}