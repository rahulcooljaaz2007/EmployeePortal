import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}        from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeGridComponent } from './employee-grid/employee-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import {TabModule} from 'angular-tabs-component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeGridComponent,
    EmployeeRegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    AppRoutingModule,
    TabModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
