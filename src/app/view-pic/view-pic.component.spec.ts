import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPicComponent } from './view-pic.component';

describe('ViewPicComponent', () => {
  let component: ViewPicComponent;
  let fixture: ComponentFixture<ViewPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
