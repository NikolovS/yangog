import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPayment } from 'src/app/shared/interfaces';
import { PaymentService } from '../payment.service';

import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private id: string;
  public payment: IPayment | null;

  constructor(private paintingService: PaymentService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params.id;
    this.payment = null;

  }

  ngOnInit(): void {
    this.paintingService.getPayment(this.id).subscribe((payment: IPayment) => {
      this.payment = payment;
    });

  }

}
