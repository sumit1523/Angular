import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/data.service";

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  public Data = [];
  constructor(private _dataService : DataService) { }

  ngOnInit() {
    this._dataService.getData().subscribe(eachdata=>this.Data=eachdata);
  }

}
