import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPainting } from 'src/app/shared/interfaces';
import { PaintingService } from '../painting.service';

import { environment } from '../../../environments/environment';
import { CartService } from 'src/app/core/cart.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private id: string;
  public painting: IPainting | null;
  public environment: any;
  constructor(
    private paintingService: PaintingService,
    private activatedRoute: ActivatedRoute,
    private cart: CartService) {
    this.id = this.activatedRoute.snapshot.params.id;
    this.painting = null;
    this.environment = environment;
  }

  ngOnInit(): void {
    this.paintingService.getPainting(this.id).subscribe((painting: IPainting) => {
      this.painting = painting;
    });

  }
  addToCartHandler(): void {
    if (this.painting) {
      this.cart.addToCart(this.painting);
    }
  }

}
