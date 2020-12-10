import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IPainting } from 'src/app/shared/interfaces';
import { PaintingService } from '../painting.service';

import { environment } from '../../../environments/environment';
import { fromEvent, Observable } from 'rxjs';
import { map, debounceTime, startWith, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  public environment: any = {};

  paintingList: IPainting[] = [];

  constructor(
    private paintingService: PaintingService,
    private http: HttpClient) {
    this.environment = environment;
  }

  ngOnInit(): void {
    this.paintingService.listPaintings().subscribe(paintingList => {

      this.paintingList = paintingList;
    });
  }
  paintingSearch(e: any): void {
    const value = e.target.value;
    this.paintingService.search(value).subscribe(
      paintings => {
        this.paintingList = paintings;
      }, (err) => {
        alert(err);
      });

  }

}
