import { Component, OnInit } from '@angular/core';
import { IPayment } from 'src/app/shared/interfaces';
import { PaymentService } from '../payment.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  paymentList: IPayment[] = [];
  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.paymentService.listPayments().subscribe(paymentList => {
      this.paymentList = paymentList;
    });
  }

}
