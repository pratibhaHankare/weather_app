import { AppService } from './../app.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-actual-weather-info',
  templateUrl: './actual-weather-info.component.html',
  styleUrls: ['./actual-weather-info.component.css']
})
export class ActualWeatherInfoComponent implements OnInit, OnChanges {
  // @Input() item;
  public realweatherInfo: any;
  public weatherId: any;
  public errorMsg: any;
  public weatherInfo: any;
  public weatherInfoActual: any;
  public cityName: any;


  constructor(private route: ActivatedRoute, private router: Router,private _citylistService:AppService) { }

  ngOnInit() {

    // collecting the parameters via passed in url
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.weatherId = id;
    });

    //  call to the API for fetching individual weather info based on id
    this.getWeather();
  }

  //  call to the API for fetching individual weather info based on id
  getWeather() {
    this._citylistService.getWeatherInfoPerId(this.weatherId)
        .subscribe(
          data => {
            console.log(data);
            this.weatherInfo = data;
            this.cityName = this.weatherInfo.list[0].name;
            console.log(this.weatherInfo.list[0].name);
            this.realweatherInfo = this.weatherInfo.list[0].main;
          },
          err => {
            if (err.status === 404) {
             this.errorMsg = err.statusText;
            }
          }
        );
  }

  ngOnChanges() {
    // to catch the changes in varible
    // this.realweatherInfo = this.item;
  }

  // back button navigation
  goBack() {
    this.router.navigate(['']);
  }

}
