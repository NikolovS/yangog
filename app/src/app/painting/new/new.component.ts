import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaintingService } from '../painting.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private paintingService: PaintingService, private router: Router) { }

  ngOnInit(): void {
  }
  submitHandler(data: any): void {
    console.log('it is working');

  }

}
