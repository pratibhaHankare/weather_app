import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofcitiesComponent } from './listofcities.component';

describe('ListofcitiesComponent', () => {
  let component: ListofcitiesComponent;
  let fixture: ComponentFixture<ListofcitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofcitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofcitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
