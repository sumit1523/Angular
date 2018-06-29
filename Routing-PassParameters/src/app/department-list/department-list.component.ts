import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor(private router: Router) { }

  departments = [
    {id: 1, name: 'Physics'},
    {id: 2, name: 'Math'},
    {id: 3, name: 'Chemistry'},
    {id: 4, name: 'Biology'}
  ]


  showDetails(id){
    this.router.navigate(['/departments',id]);
  }

  ngOnInit() {
  }

}
