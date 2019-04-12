package com.employee.portal.employee.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.employee.portal.entity.Employee;

@Repository
public interface EmployeeRepository extends  CrudRepository<Employee,Integer>{

    public Employee save(Employee entity) ;		
	
	public List<Employee> findAll();
	
}
 