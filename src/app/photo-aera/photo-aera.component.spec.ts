import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAeraComponent } from './photo-aera.component';

describe('PhotoAeraComponent', () => {
  let component: PhotoAeraComponent;
  let fixture: ComponentFixture<PhotoAeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoAeraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoAeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
