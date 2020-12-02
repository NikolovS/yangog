import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintinglistComponent } from './paintinglist.component';

describe('PaintinglistComponent', () => {
  let component: PaintinglistComponent;
  let fixture: ComponentFixture<PaintinglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintinglistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
