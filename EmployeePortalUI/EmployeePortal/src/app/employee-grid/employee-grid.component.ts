import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'employee-grid',
  templateUrl: './employee-grid.component.html',
  styleUrls: ['./employee-grid.component.css']
})
export class EmployeeGridComponent implements OnInit {
  title = 'app';

  columnDefs = [
    {
      headerName: 'Employe Id',
      field: 'id',
      sortable: true,
      filter: true,
      width: 145
   } ,
   {
        headerName: 'First Name',
        field: 'firstName', 
        sortable: true,
       filter: true,
       width: 300
      },
      {
        headerName: 'Last Name',
        field: 'lastName', 
        sortable: true,
        filter: true,
        width: 300
      },
      {
         headerName: 'Gender',
         field: 'gender',
         sortable: true,
         filter: true
      },
      {
         headerName: 'Date of birth',
         field: 'dateOfBirth',
         sortable: true,
         filter: true
      },
      {
         headerName: 'Department',
         field: 'department',
         sortable: true,
         filter: true
      }
  ];

  rowData: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
      this.rowData = this.http.get('http://localhost:8080/employee/portal/getAllEmployee');
  }

}
