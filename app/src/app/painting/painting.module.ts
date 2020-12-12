import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailComponent } from './detail/detail.component';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { PaintingRouterModule } from './painting-router.module';
import { FormsModule } from '@angular/forms';
import { PaintingService } from './painting.service';
import { PaintingListItemComponent } from './painting-list-item/painting-list-item.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DetailComponent, NewComponent, ListComponent, PaintingListItemComponent],
  imports: [
    CommonModule,
    PaintingRouterModule,
    FormsModule,
    SharedModule
  ],
  providers: [PaintingService]
})
export class PaintingModule { }
