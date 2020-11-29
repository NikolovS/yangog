import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { PaintingListItemComponent } from './painting-list-item/painting-list-item.component';
import { PaintingComponent } from './painting/painting.component';

const routes: Routes = [
    {
        path: 'painting',
        pathMatch: 'full',
        component: PaintingComponent,
        data: {
            title: 'PAINTING'
        }
    },

    {
        path: 'painting/detail/:id',
        component: DetailComponent,
        data: {
            title: 'PAINTING DETAIL'
        }
    },
    {
        path: 'painting/new',
        component: NewComponent,
        data: {
            title: 'NEW PAINTING'
        }
    },
    {
        path: 'painting/list',
        component: ListComponent,
        data: {
            title: 'ALL PAINTINGS'
        }
    },
    {
        path: 'painting/list/:id',
        component: PaintingListItemComponent,
        data: {
            title: 'CURRENT PAINTING'
        }
    }
];


export const PaintingRouterModule = RouterModule.forChild(routes);
