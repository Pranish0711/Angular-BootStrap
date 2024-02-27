import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartComponent } from '../cart/cart.component';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule, CartComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
      pname ="Event";
      pcount= 5;
      TicketsAvailable = 10;
      Quantity=0;

      ProductArray= ["Tv","Remote","Laptop","System","Mobile"]
            x = new Date();

      popData(){
        this.ProductArray.pop();
      }

      BuyProduct(){
        this.pcount=this.pcount-1;
    }

    BuyTickets(){
        if(this.Quantity<this.TicketsAvailable){
        this.Quantity=this.Quantity+1;
        
     
      }
      else{
        alert ("soldout");
      }

    }
    RemoveTickets(){
      if(this.Quantity>0){
        this.Quantity=this.Quantity-1;
      }
      else{
        alert ("add to cart")
      }
      
    }
    // Gender(){
    //   if(){

    //   }
    // }
      
      Availablity(){
        if(this.pcount>0){
            return true;
        }
        else{
            return false;
        }
      }

      aaa(){
        alert("Thankyou! for your response");
      }


      
      
}

