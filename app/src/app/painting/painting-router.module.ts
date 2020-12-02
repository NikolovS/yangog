import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { PaintingListItemComponent } from './painting-list-item/painting-list-item.component';


const routes: Routes = [
    {
        path: 'painting',
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
                    title: 'PAINTING DETAIL'
                }
            },
            {
                path: 'new',
                component: NewComponent,
                data: {
                    title: 'NEW PAINTING'
                }
            },
            {
                path: 'list',
                component: ListComponent,
                data: {
                    title: 'ALL PAINTINGS'
                }
            },
            {
                path: 'list/:id',
                component: PaintingListItemComponent,
                data: {
                    title: 'CURRENT PAINTING'
                }
            }
        ],

    }


];


export const PaintingRouterModule = RouterModule.forChild(routes);
