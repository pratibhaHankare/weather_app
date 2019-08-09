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
    // call to fetch the city API in bulk
    this.getcity();
  }

  // call to fetch the city API in bulk
  getcity() {
    this._citylistService.getListOfCity()
      .subscribe(
        data => {
          this.listOfCities = data;
          this.listnames = this.listOfCities.list;
        },
        err => {
          if (err.status === 404) {
            this.errorMsg = err.statusText;
          }
        }
      );
  }

  // navigating to the weather component
  getweather(weatherInfoId) {
    this.router.navigate(['/weatherInfo', weatherInfoId]);
  }

  // Passing the parameter to the list of pictures
  getPicture(to, from) {
    this.router.navigate(['/pictures'], { queryParams: { data: JSON.stringify({ first: to, last: from }) } });
  }

}
