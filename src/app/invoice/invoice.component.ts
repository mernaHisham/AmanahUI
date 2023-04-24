import { Component } from '@angular/core';
import { Invoice } from "../Models/invoice.model";
import { InvoiceService } from "../Services/invoice.service";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  cols:any[]=[];
constructor(public service:InvoiceService){}
ngOnInit(){
  this.cols=[
    {'header':'customer name','field':'customerName'},
    {'header':'customer type','field':'customerType'},
    {'header':'value','field':'value'},
    {'header':'payment method','field':'paymentMethod'},
  ]
  this.service.GetInvoices();
}

openNew=()=>{
  this.service.visible=true;
}

}
