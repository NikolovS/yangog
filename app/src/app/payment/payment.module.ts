import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentListItemComponent } from './payment-list-item/payment-list-item.component';
import { PaymentRouterModule } from './payment-router.module';
import { PaymentService } from './payment.service';



@NgModule({
  declarations: [DetailComponent, NewComponent, ListComponent, PaymentComponent, PaymentListItemComponent],
  imports: [
    CommonModule,
    PaymentRouterModule
  ],
  providers: [PaymentService]
})
export class PaymentModule { }
