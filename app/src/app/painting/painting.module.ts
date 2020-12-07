import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingComponent } from './painting/painting.component';
import { DetailComponent } from './detail/detail.component';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { PaintingRouterModule } from './painting-router.module';
import { FormsModule } from '@angular/forms';
import { PaintingService } from './painting.service';



@NgModule({
  declarations: [PaintingComponent, DetailComponent, NewComponent, ListComponent],
  imports: [
    CommonModule,
    PaintingRouterModule,
    FormsModule
  ],
  providers: [PaintingService]
})
export class PaintingModule { }
