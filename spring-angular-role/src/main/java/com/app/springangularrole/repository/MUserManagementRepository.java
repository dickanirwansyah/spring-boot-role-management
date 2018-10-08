package com.app.springangularrole.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.springangularrole.entity.MUserManagement;

public interface MUserManagementRepository extends JpaRepository<MUserManagement, String>{
	
	List<MUserManagement> findAll();
	
	List<MUserManagement> findByLoginId(String loginId);
	
	void deleteByLoginId(String loginId);
	
	MUserManagement findByNameUserAndPassword(String nameUser, String password);
	
	List<MUserManagement> findByStatus(Integer status);

}
