import { Component, Input, OnInit } from '@angular/core';
import { IPainting } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-painting-list-item',
  templateUrl: './painting-list-item.component.html',
  styleUrls: ['./painting-list-item.component.css']
})
export class PaintingListItemComponent implements OnInit {

  @Input() painting: IPainting | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
