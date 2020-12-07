import { Component, OnInit } from '@angular/core';
import { PaintingService } from 'src/app/painting/painting.service';
import { IPainting } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-paintinglist',
  templateUrl: './paintinglist.component.html',
  styleUrls: ['./paintinglist.component.css']
})
export class PaintinglistComponent implements OnInit {

  paintingList: IPainting[] = [];
  constructor(private paintingService: PaintingService) { }

  ngOnInit(): void {
    this.paintingService.listPaintings().subscribe((paintingList) => {
      this.paintingList = paintingList;
    });
  }

}
