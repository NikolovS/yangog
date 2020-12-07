import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRouterModule } from './admin-router.module';
import { PaintinglistComponent } from './paintinglist/paintinglist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { UserModule } from '../user/user.module';
import { PaymentModule } from '../payment/payment.module';
import { PaintingModule } from '../painting/painting.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';



@NgModule({
  declarations: [DashboardComponent,
    PaintinglistComponent,
    UserlistComponent,
    PaymentlistComponent,
    UserProfileComponent,
    ChangePasswordComponent],
  imports: [
    CommonModule,
    AdminRouterModule,
    UserModule,
    PaymentModule,
    PaintingModule,
    FormsModule,
  ]
})
export class AdminModule { }
