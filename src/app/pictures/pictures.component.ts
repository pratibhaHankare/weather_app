import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as _ from 'underscore';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {
  public listOfPic: any;
  public errorMsg: any;
  public picList: any;
  public picUrlsOnly: any = [];
  public to: any;
  public from: any;
  public actualPicture: any = [];
  public cond: any = false;
  public realurlss: any;
  public dataobj: any;
  constructor(
    private _citylistService: AppService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.dataobj = JSON.parse(this.route.snapshot.queryParams['data']);
    // loading the pictures via API
    this.loaddata();
    this.actualPicture = [];
  }

  // loading the pictures via API
  loaddata() {
    this.actualPicture = [];
    this._citylistService.getListOfPic()
      .subscribe(
        data => {
          this.listOfPic = data;
          this.picList = this.listOfPic.hits.map(( data: any) => {
            return data.largeImageURL;
          });
          console.log(this.picList);
          // the real loop that is too done
          for (let p = this.dataobj.first; p < this.dataobj.last; p++) {
            this.actualPicture.push(this.picList[p]);
          }
          console.log(this.actualPicture);
        },
        err => {
          if (err.status === 404) {
            this.errorMsg = err.statusText;
          }
        }
      );
  }

  

}
