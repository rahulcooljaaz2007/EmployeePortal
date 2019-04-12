package com.employee.portal.employee.service;

import java.util.List;

import com.employee.portal.entity.Employee;

public interface EmployeeService {

	public Employee registerEmployee(Employee emp);
	
	public  List<Employee>  getAllEmployee();
}
