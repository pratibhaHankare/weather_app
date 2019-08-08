import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class AppService {
  // url call
  private _url = 'https://api.openweathermap.org/data/2.5/group';
  private _pic_url = 'https://pixabay.com/api/';



  constructor(private http: HttpClient) { }

  // get the list of cities
  getListOfCity() {
    return this.http.get(this._url, {
      params: {
        id: '524901,703448,2643743,1271231,1257986,519188,1283378,708546,1270260,529334',
        // id: '524901,703448,2643743,',
        units: 'metric',
        appid: '72095fba03127c9d3918d3bd0fe5120d'
      }
    });
  }

  // get the list of pictures
  getListOfPic() {
    return this.http.get(this._pic_url, {
      params: {
        key: '13205439-c6e7272745cee0e8f93a26df3',
        q: 'city',
        image_type: 'photo',
        pretty: 'true',
        per_page: '4'
      }
    });
  }

}
