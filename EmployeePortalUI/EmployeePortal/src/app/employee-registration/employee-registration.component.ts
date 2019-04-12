import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  firstName:String="";
  lastName:String="";
  department:String="";
  gender:String="";
  dateOfBirth:String="";
  registerEmp:any={message:"",firstName:"",lastName:""};
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  registerEmployee(){
    let error=false;
    this.registerEmp.message="";
    if(this.firstName==""){
      this.registerEmp.message= this.registerEmp.message.concat("First Name can's be empty. ");
         error=true;
    }
    if(this.lastName==""){
      this.registerEmp.message=this.registerEmp.message.concat("Last Name can's be empty. ");
      error=true;
    }
    if(this.dateOfBirth==""){
      this.registerEmp.message= this.registerEmp.message.concat("Date of Birth can's be empty. ");
      error=true;
    }
    if(this.department==""){
      this.registerEmp.message= this.registerEmp.message.concat("Department can's be empty. ");
      error=true;
    }
    if(this.gender==""){
      this.registerEmp.message=  this.registerEmp.message.concat("gender can's be empty. ");
      error=true;
    }
    if(error){
      return
    }
    let registrationRequest={
      "firstName":this.firstName,
      "lastName":this.lastName,
      "department":this.department,
      "gender":this.gender,
      "dateOfBirth":this.dateOfBirth
    }
//console.log(registrationRequest);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   
  this.http.post('http://localhost:8080/employee/portal/registration',registrationRequest,{headers:headers}).toPromise()
  .then(this.extractData.bind(this))
  .catch(this.handleErrorPromise);
  }

  private extractData(res: Response) {
  
  this.firstName="";
  this.lastName="";
  this.department="";
  this.gender="";
  this.dateOfBirth="";
  
    let body = res;
    this.registerEmp=body;
    this.registerEmp.message="Registered Succesfully";
    console.log(body);
          return body || {};
      }
  
    private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
      }	
}
