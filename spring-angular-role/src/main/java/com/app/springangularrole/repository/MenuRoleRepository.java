package com.app.springangularrole.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.springangularrole.entity.MenuRole;

public interface MenuRoleRepository extends JpaRepository<MenuRole, Integer>{
	
	List<MenuRole> findAll();
	
	//delete access id
	void deleteByAccessId(String accessId);

	List<MenuRole> findByAccessId(String accessId);
	
	List<MenuRole> findByAccessIdAndParentIdContaining(String accessId, String parentId);
	
}
