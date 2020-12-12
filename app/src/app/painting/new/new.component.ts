import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaintingService } from '../painting.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  private formData: any;
  constructor(private paintingService: PaintingService, private router: Router) { }

  ngOnInit(): void {
    this.formData = new FormData();
  }
  submitHandler(data: any): void {
    for (const key in data) {
      if (data[key] && key !== 'image') {
        this.formData.set(key, data[key]);
      }
    }
    this.paintingService.createPainting(this.formData)
      .subscribe({
        next: () => {
          this.router.navigate(['/painting/list']);
        },
        error: (err) => {

        }
      });
  }

  upload(target: any): void {
    if (target?.files) {
      this.formData.set('image', target.files[0]);
    }
  }
}
