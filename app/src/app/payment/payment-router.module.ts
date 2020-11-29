import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';

import { PaymentListItemComponent } from './payment-list-item/payment-list-item.component';

import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
    {
        path: 'payment',
        pathMatch: 'full',
        component: PaymentComponent,
        data: {
            title: 'PAYMENT'
        }
    },

    {
        path: 'payment/detail/:id',
        component: DetailComponent,
        data: {
            title: 'PAYMENT DETAIL'
        }
    },
    {
        path: 'payment/new',
        component: NewComponent,
        data: {
            title: 'NEW PAYMENT'
        }
    },
    {
        path: 'payment/list',
        component: ListComponent,
        data: {
            title: 'ALL PAYMENTS'
        }
    },
    {
        path: 'payment/list/:id',
        component: PaymentListItemComponent,
        data: {
            title: 'CURRENT PAYMENT'
        }
    }
];


export const PaymentRouterModule = RouterModule.forChild(routes);
