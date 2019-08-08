import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-view-pic',
  templateUrl: './view-pic.component.html',
  styleUrls: ['./view-pic.component.css']
})
export class ViewPicComponent implements OnInit {
public listOfPic: any;
public errorMsg: any;

  constructor(private _citylistService: AppService) { }

  ngOnInit() {
    // getting picture
    this._citylistService.getListOfPic()
    .subscribe(
      data => {
        debugger;
        this.listOfPic = data;
        console.log(this.listOfPic);
      },
      err => {
        debugger;
        if (err.status === 404) {
          this.errorMsg = err.statusText;
        }
      }
    );

  }

}
