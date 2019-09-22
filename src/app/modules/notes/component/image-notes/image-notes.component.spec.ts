import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageNotesComponent } from './image-notes.component';

describe('ImageNotesComponent', () => {
  let component: ImageNotesComponent;
  let fixture: ComponentFixture<ImageNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
