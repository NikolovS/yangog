import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaintinglistComponent } from './paintinglist/paintinglist.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
    {
        path: 'admin',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/dashboard',
                data: {
                    title: 'Admin'
                }
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'userlist',
                component: UserlistComponent
            },
            {
                path: 'paintinglist',
                component: PaintinglistComponent
            },
            {
                path: 'paymentlist',
                component: PaymentlistComponent
            }


        ]

    }


];


export const AdminRouterModule = RouterModule.forChild(routes);
