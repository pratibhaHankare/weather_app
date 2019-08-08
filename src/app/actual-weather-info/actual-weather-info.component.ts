import { Component, OnInit, Input,} from '@angular/core';

@Component({
  selector: 'app-actual-weather-info',
  templateUrl: './actual-weather-info.component.html',
  styleUrls: ['./actual-weather-info.component.css']
})
export class ActualWeatherInfoComponent implements OnInit {
  @Input()  item;
 public realweatherInfo:any;
  constructor() { }

 
  ngOnInit() {
    console.log(this.item);
    this.realweatherInfo = this.item;
  }

}
