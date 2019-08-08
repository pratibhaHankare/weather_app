import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualWeatherInfoComponent } from './actual-weather-info.component';

describe('ActualWeatherInfoComponent', () => {
  let component: ActualWeatherInfoComponent;
  let fixture: ComponentFixture<ActualWeatherInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualWeatherInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualWeatherInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
