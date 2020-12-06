
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './core/guards/auth.guard';


import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: '/home'
    },
    {
      path: 'home',
      component: HomeComponent,
      data: {
        title: 'HOME'
      }
    },
    {
      path: 'cart',

      component: CartComponent,
      data: {
        title: 'Cart'
      }
    },
    {
      path: '**',
      component: NotFoundComponent,
      data: {
        title: '404'
      }
    }]
  }
];


export const AppRoutingModule = RouterModule.forRoot(routes);
