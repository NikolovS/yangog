import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';


import { PaymentListItemComponent } from './payment-list-item/payment-list-item.component';



const routes: Routes = [
    {
        path: 'payment',
        canActivateChild: [AuthGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/payment/list',
                data: {
                    title: 'PAYMENT'
                }
            },
            {
                path: 'detail/:id',
                component: DetailComponent,
                data: {
                    isLogged: true,
                    title: 'PAYMENT DETAIL'
                }
            },

            {
                path: 'list',
                component: ListComponent,
                data: {
                    isLogged: true,
                    title: 'ALL PAYMENTS'
                }
            },
            {
                path: 'list/:id',
                component: PaymentListItemComponent,
                data: {
                    isAdmin: true,
                    title: 'CURRENT PAYMENT'
                }
            }
        ]
    },
];


export const PaymentRouterModule = RouterModule.forChild(routes);
