import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../core/guards/auth.guard';
import { ChangePasswordComponent } from './change-password/change-password.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PaintinglistComponent } from './paintinglist/paintinglist.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
    {
        path: 'admin',
        canActivateChild: [AuthGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/dashboard'
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
                data: {
                    isAdmin: true,
                    title: 'Admin'
                }
            },
            {
                path: 'userlist',
                component: UserlistComponent,
                data: {
                    isAdmin: true,
                    title: 'Admin'
                }
            },
            {
                path: 'paintinglist',
                component: PaintinglistComponent,
                data: {
                    isAdmin: true,
                    title: 'Admin'
                }
            },
            {
                path: 'paymentlist',
                component: PaymentlistComponent,
                data: {
                    isAdmin: true,
                    title: 'Admin'
                }
            },
            {
                path: 'user/profile/:id',
                component: UserProfileComponent,
                data: {
                    isAdmin: true,
                    title: 'Admin'
                }
            },
            {
                path: 'user/change-password/:id',
                component: ChangePasswordComponent,
                data: {
                    isAdmin: true,
                    title: 'Admin'
                }
            }


        ]

    }


];


export const AdminRouterModule = RouterModule.forChild(routes);
