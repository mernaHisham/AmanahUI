import { Component } from '@angular/core';
import { InvoiceService } from '../Services/invoice.service';
import { Invoice } from '../Models/invoice.model';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent {
  RequiredName:boolean=false;
  RequiredType:boolean=false;
  RequiredValue:boolean=false;
  RequiredpayMethod:boolean=false;
  Types:any;
  Methods:any;
constructor(public service:InvoiceService){}
ngOnInit(){
  this.Types=[{'name':'Individual','value':'Individual'},
  {'name':'Company','value':'Company'}]
  this.Methods=[{'name':'Credit card','value':'Credit card'},
  {'name':'Master card','value':'Master card'}]
}
SubmitData=()=>{
  this.service.formData.createdBy=1;
  this.service.formData.updatedBy=1;
  this.service.formData.createdDate=new Date;
  this.service.formData.updatedDate=new Date;
  this.service.UpdateInvoice().subscribe(res=>{
    this.service.visible=false;
    this.service.GetInvoices();
    this.service.ResetForm();
  },err=>console.log(err))
}

}
