package com.employee.portal.employee.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.portal.employee.repository.EmployeeRepository;
import com.employee.portal.employee.service.EmployeeService;
import com.employee.portal.entity.Employee;

@Service
public class EmployeeServiceImpl implements EmployeeService {

@Autowired
private EmployeeRepository employeeRepository;


public Employee registerEmployee(Employee emp) {
	Employee regiteredEmp=employeeRepository.save(emp);
	return regiteredEmp;
	
}

public  List<Employee>  getAllEmployee(){
   return	employeeRepository.findAll();
}

}
