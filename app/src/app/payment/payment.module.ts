import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';

import { ListComponent } from './list/list.component';

import { PaymentListItemComponent } from './payment-list-item/payment-list-item.component';
import { PaymentRouterModule } from './payment-router.module';
import { PaymentService } from './payment.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DetailComponent, ListComponent, PaymentListItemComponent],
  imports: [
    CommonModule,
    PaymentRouterModule,
    FormsModule
  ],
  providers: [PaymentService]
})
export class PaymentModule { }
