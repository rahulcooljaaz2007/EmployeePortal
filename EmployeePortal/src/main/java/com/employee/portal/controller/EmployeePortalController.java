package com.employee.portal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.employee.portal.employee.service.EmployeeService;
import com.employee.portal.entity.Employee;

@RestController
@RequestMapping(value="/employee/portal",produces= {MediaType.APPLICATION_JSON_VALUE})
public class EmployeePortalController {

	@Autowired
	EmployeeService employeeService;
	@CrossOrigin(origins = "*")
	@RequestMapping(value="/registration",method=RequestMethod.POST)
	public Employee registerEmployee(@RequestBody Employee employee) {
		return employeeService.registerEmployee(employee);
	}

	@CrossOrigin(origins = "*")
	@RequestMapping(value="/getAllEmployee",method=RequestMethod.GET)
	public List<Employee> getAllEmployee() {
		return employeeService.getAllEmployee();
	}
}