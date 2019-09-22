import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkNotesComponent } from './link-notes.component';

describe('LinkNotesComponent', () => {
  let component: LinkNotesComponent;
  let fixture: ComponentFixture<LinkNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
