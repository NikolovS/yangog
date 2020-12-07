import { Component, OnInit } from '@angular/core';
import { IPayment } from 'src/app/shared/interfaces';
import { PaymentService } from '../../payment/payment.service';
@Component({
  selector: 'app-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.css']
})
export class PaymentlistComponent implements OnInit {

  paymentList: IPayment[] = [];
  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.paymentService.listPayments().subscribe(paymentList => {
      this.paymentList = paymentList;
    });
  }

}


