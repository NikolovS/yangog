import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { PaintingListItemComponent } from './painting-list-item/painting-list-item.component';


const routes: Routes = [
    {
        path: 'painting',
        canActivateChild: [AuthGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
                data: {
                    title: 'PAINTING'
                }
            }, {
                path: 'detail/:id',
                component: DetailComponent,
                data: {
                    isLogged: false,
                    title: 'PAINTING DETAIL'
                }
            },
            {
                path: 'new',
                component: NewComponent,
                data: {
                    isAdmin: true,
                    title: 'NEW PAINTING'
                }
            },
            {
                path: 'list',
                component: ListComponent,
                data: {
                    isLogged: false,
                    title: 'ALL PAINTINGS'
                }
            },
            {
                path: 'list/:id',
                component: PaintingListItemComponent,
                data: {
                    isAdmin: true,
                    title: 'CURRENT PAINTING'
                }
            }
        ],

    }


];


export const PaintingRouterModule = RouterModule.forChild(routes);
