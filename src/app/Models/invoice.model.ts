export class Invoice {
    id: number = 0;

    customerName: string = "";

    customerType: string = "";

    value: number = 0;

    paymentMethod: string = "";

    createdBy: number = 0;

    createdDate: Date =  new Date;

    updatedBy: number = 0;

    updatedDate: Date =  new Date;
}
