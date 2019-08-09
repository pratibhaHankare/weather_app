import { Component, OnInit, OnChanges } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-listofcities',
  templateUrl: './listofcities.component.html',
  styleUrls: ['./listofcities.component.css']
})
export class ListofcitiesComponent implements OnInit {
  // decalration of varibles
  public listOfCities: any = [];
  public errorMsg;
  public listnames: any;
  public weather: any;
  public loadComponent: any = false;


  constructor(private _citylistService: AppService, private router: Router) { }

  ngOnInit() {

    // interceptor call
    this._citylistService.getListOfCity()
      .subscribe(
        data => {
          this.listOfCities = data;

          console.log(this.listOfCities);
          console.log(this.listOfCities.cnt);
          this.listnames = this.listOfCities.list;
        },
        err => {
          if (err.status === 404) {
            this.errorMsg = err.statusText;
          }
        }
      );
  }


  getweather(weatherInfo) {
    this.weather = weatherInfo;
  }

  getPicture(to, from) {
    // debugger;
    // this.router.navigate(['/pictures', {""id]);

    this.router.navigate(['/pictures'], { queryParams: { data: JSON.stringify({ first: to, last: from }) } });
  }

}
