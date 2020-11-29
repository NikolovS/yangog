import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingListItemComponent } from './painting-list-item.component';

describe('PaintingListItemComponent', () => {
  let component: PaintingListItemComponent;
  let fixture: ComponentFixture<PaintingListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintingListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
