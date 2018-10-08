package com.app.springangularrole.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.springangularrole.entity.Menu;

public interface MenuRepository extends JpaRepository<Menu, String>{
	
	List<Menu> findMenuByParentId(String parentId);
	
	List<Menu> findMenuById(String id);
	
	List<Menu> findMenuByLevelMenu(Integer levelMenu);
	
	@Query(value = "select distinct m.id, m.active, m.level_menu, m.menu_name, m.parent_id, m.path_name, m.class_style, m.menu_type from menu m, menu_role mr where m.id = mr.menu_id and mr.access_id=:role", nativeQuery = true)
	List<Menu> menuJoin(@Param("role") String role);

}
