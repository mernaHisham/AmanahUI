import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../Models/invoice.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService extends BaseService {
  formData: Invoice = new Invoice();
  list:Invoice[]=[];
  totalVal:number=0;
  visible:boolean=false;
  constructor(private http: HttpClient) {
    super();
  }
  GetInvoices = (invId: number = 0) =>
    this.http.get(`${this.baseURl}Invoice/GetInvoices?invId=${invId}`)
    .subscribe((res:any) =>{
      this.totalVal=0;
      this.list = res.invs as Invoice[];
       this.list.forEach(inv =>  this.totalVal += inv.value );
    },err=>console.log(err))
  
  UpdateInvoice = () =>
    this.http.post(`${this.baseURl}Invoice/UpdateInvoice`, this.formData);
  DeleteInvoice = (invId: number) =>
    this.http.delete(`${this.baseURl}Invoice/DeleteInvoice?invId=${invId}`);
 ResetForm=()=>{
  this.formData=new Invoice();
 }

}
