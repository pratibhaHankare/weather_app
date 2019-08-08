import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {
  public listOfPic: any;
  public errorMsg: any;
  public picList: any;
  constructor(private _citylistService: AppService) { }

  ngOnInit() {

        // getting picture
        this._citylistService.getListOfPic()
        .subscribe(
          data => {
            debugger;
            this.listOfPic = data;
            this.picList = this.listOfPic.hits;
            console.log(this.listOfPic.hits);
          },
          err => {
            if (err.status === 404) {
              this.errorMsg = err.statusText;
            }
          }
        );
  }

}
