import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { PaintingService } from '../painting/painting.service';
import { IPainting } from '../shared/interfaces/painting';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public environment: any = {};

  paintingList: IPainting[] = [];
  constructor(private paintingService: PaintingService) {
    this.environment = environment;
  }

  ngOnInit(): void {
    this.paintingService.listPaintings().subscribe(paintingList => {
      this.paintingList = paintingList;
    });
  }
}
