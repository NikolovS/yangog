import { Component, OnInit } from '@angular/core';
import { PaintingService } from 'src/app/painting/painting.service';
import { IPainting } from 'src/app/shared/interfaces';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-paintinglist',
  templateUrl: './paintinglist.component.html',
  styleUrls: ['./paintinglist.component.css']
})
export class PaintinglistComponent implements OnInit {
  public environment = environment;
  paintingList: IPainting[] = [];
  constructor(private paintingService: PaintingService) { }

  ngOnInit(): void {
    this.paintingService.listPaintings().subscribe((paintingList) => {
      this.paintingList = paintingList;
    });
  }

}
