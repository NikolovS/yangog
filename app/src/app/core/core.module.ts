import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { AuthGuard } from './guards/auth.guard';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HeaderComponent, FooterComponent
  ],
  providers: [AuthGuard]
})
export class CoreModule { }
