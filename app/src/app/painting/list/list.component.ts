import { Component, OnInit } from '@angular/core';
import { IPainting } from 'src/app/shared/interfaces';
import { PaintingService } from '../painting.service';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public environment: any = {};

  paintingList: IPainting[] = [];
  constructor(private paintingService: PaintingService) {
    this.environment = environment;
  }

  ngOnInit(): void {
    this.paintingService.listPaintings().subscribe(paintingList => {
      console.log(paintingList);

      this.paintingList = paintingList;
    });
  }

}
