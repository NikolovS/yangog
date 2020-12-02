import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { PaintingModule } from './painting/painting.module';
import { PaymentModule } from './payment/payment.module';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { AdminModule } from './admin/admin.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    PaintingModule,
    PaymentModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    HeaderComponent, FooterComponent]
})
export class AppModule { }
