import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPayment } from 'src/app/shared/interfaces';
import { PaymentService } from '../payment.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-payment-list-item',
  templateUrl: './payment-list-item.component.html',
  styleUrls: ['./payment-list-item.component.css']
})
export class PaymentListItemComponent implements OnInit {
  private id: string;
  @Input() payment: IPayment | undefined;
  public environment: any;
  constructor(
    private paymentService: PaymentService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
    this.environment = environment;
  }

  ngOnInit(): void {
    this.paymentService.getPayment(this.id).subscribe((payment: IPayment) => {
      this.payment = payment;
    });
  }
  submitHandler(data: IPayment): void {
    console.log(data);
    this.paymentService.updatePayment(this.id, data).subscribe({
      next: () => {
        this.router.navigate(['/admin/paymentlist']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  deleteHandler(): void {
    if (window.confirm('Are you sure')) {
      this.paymentService.deletePayment(this.id).subscribe(() => {
        this.router.navigate(['/admin/paymentlist']);
        console.log('done');
      },
        () => {
          console.log('err');
        });

    }
  }


}
