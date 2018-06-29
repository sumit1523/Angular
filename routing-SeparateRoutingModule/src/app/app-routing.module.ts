import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from "src/app/department-list/department-list.component";
import { EmployeeListComponent } from "src/app/employee-list/employee-list.component";
import { PageNotFoundComponent } from "src/app/page-not-found/page-not-found.component";

const routes: Routes = [
  {path : '', redirectTo: 'departments', pathMatch: 'full'},
  {path : 'departments', component: DepartmentListComponent},
  {path: 'employee', component: EmployeeListComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
