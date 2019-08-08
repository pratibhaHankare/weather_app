import { Component, OnInit,OnChanges } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

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
          console.log(this.listOfCities.list[0].main);
        },
        err => {
          // debugger;
          if (err.status === 404) {
            this.errorMsg = err.statusText;
          }
        }
      );
  }



  getweather(weatherInfo) {
    debugger;
    
    if (this.loadComponent === true) {
      this.loadComponent = false;
      location.reload();
    }
    console.log(weatherInfo);
    this.weather = weatherInfo;
    this.loadComponent = true;
  }

  getPicture(id) {
    debugger;
    console.log(id);
    this.router.navigate(['/pictures', id]);
  }

}
