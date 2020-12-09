import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { IPainting } from '../shared/interfaces';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data: IPainting[] = [];
  private cookieName = 'YangaCart';
  constructor(
    private cookieService: CookieService,
    private userService: UserService) {
    const id = this.userService.currentUser?._id;
    if (id) {
      this.cookieName += '-' + id;
    }
    if (this.cookieService.get(this.cookieName)) {
      this.data = JSON.parse(this.cookieService.get(this.cookieName));
    }
  }
  addToCart(painting: IPainting): IPainting[] {
    if (!this.data.find(item => item._id === painting._id)) {
      this.data.push(painting);
    }
    this.updateCookie();
    return this.data;
  }
  getCart(): IPainting[] {
    return this.data;
  }
  removeById(id: string): IPainting[] {
    const index = this.data.findIndex(item => item._id === id);
    if (index >= 0) {

      this.data.splice(index, 1);
    }
    this.updateCookie();

    return this.data;
  }
  updateCookie(): void {
    this.cookieService.set(this.cookieName, JSON.stringify(this.data));
  }

  emptyCart(): void {
    this.data = [];
    this.updateCookie();
  }
}
