import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPainting } from 'src/app/shared/interfaces';

import { environment } from '../../../environments/environment';
import { PaintingService } from '../painting.service';

@Component({
  selector: 'app-painting-list-item',
  templateUrl: './painting-list-item.component.html',
  styleUrls: ['./painting-list-item.component.css']
})
export class PaintingListItemComponent implements OnInit {
  private id: string;
  @Input() painting: IPainting | undefined;
  public environment: any;
  private formData: any;
  constructor(
    private paintingService: PaintingService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
    this.environment = environment;
  }

  ngOnInit(): void {
    this.paintingService.getPainting(this.id).subscribe((painting: IPainting) => {
      this.painting = painting;
      this.formData = new FormData();
    });
  }
  submitHandler(data: any): void {
    for (const key in data) {
      if (data[key] && key !== 'image') {
        this.formData.set(key, data[key]);
      }
    }
    this.paintingService.updatePainting(this.id, this.formData).subscribe({
      next: () => {
        this.router.navigate(['/admin/paintinglist']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  deleteHandler(): void {
    if (window.confirm('Are you sure?')) {
      this.paintingService.deletePainting(this.id).subscribe(() => {
        this.router.navigate(['/admin/paintinglist']);
        console.log('done');
      },
        () => {
          console.log('err');
        });
    }
  }
  upload(target: any): void {
    if (target?.files) {
      this.formData.set('image', target.files[0]);
    }
  }


}
