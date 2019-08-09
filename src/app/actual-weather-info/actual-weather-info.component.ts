import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-actual-weather-info',
  templateUrl: './actual-weather-info.component.html',
  styleUrls: ['./actual-weather-info.component.css']
})
export class ActualWeatherInfoComponent implements OnInit, OnChanges {
  @Input() item;
  public realweatherInfo: any;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    console.log('ngOnChanges', this.item);
    this.realweatherInfo = this.item;
  }

}
