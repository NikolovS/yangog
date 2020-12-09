import { Component, OnInit } from '@angular/core';
import { CartService } from '../core/cart.service';
import { IPainting } from '../shared/interfaces';
import { environment } from '../../environments/environment';
import { PaymentService } from '../payment/payment.service';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart: IPainting[] = [];
  public total = 0;
  public environment = environment;
  constructor(
    private cartService: CartService,
    private paymentService: PaymentService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.setTotal();
    console.log(this.cart);

  }
  removeFromCart(e: any): void {
    this.cart = this.cartService.removeById(e.target.dataset.id);
    this.setTotal();
  }
  setTotal(): void {
    this.total = 0;
    this.cart.forEach(painting => {
      this.total += painting.price;
    });
  }

  makePayment(): void {
    if (this.userService.currentUser) {
      const paintings: string[] = [];
      this.cart.forEach(painting => paintings.push(painting._id));
      this.paymentService.createPayment({ paintings, total: this.total }).subscribe(
        payment => {
          this.cartService.emptyCart();
          this.router.navigate(['/payment/list']);
        },
        () => {
          console.log('err');
        });
    }
    else {
      this.router.navigate(['/user/login']);
    }
  }

}
