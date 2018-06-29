import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/data.service";

@Component({
  selector: 'app-data-details',
  templateUrl: './data-details.component.html',
  styleUrls: ['./data-details.component.css']
})
export class DataDetailsComponent implements OnInit {

  public Data = [];
  constructor(private _Data : DataService) { }

  ngOnInit() {
    this._Data.getData().subscribe(eachData=>this.Data=eachData);
  }

}
