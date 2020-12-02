import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRouterModule } from './admin-router.module';
import { PaintinglistComponent } from './paintinglist/paintinglist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';



@NgModule({
  declarations: [DashboardComponent,
    PaintinglistComponent,
    UserlistComponent,
    PaymentlistComponent],
  imports: [
    CommonModule,
    AdminRouterModule
  ]
})
export class AdminModule { }
