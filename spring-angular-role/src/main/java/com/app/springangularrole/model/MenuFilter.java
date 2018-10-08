package com.app.springangularrole.model;

import java.util.List;


public class MenuFilter {

	//from entity table menu
	private String id;
	private int active;
	private int levelMenu;
	private String menuName;
	private String parentId;
	private String pathName;
	private String classStyle;
	private int menuType;
	
	private int idRole;
	private String accessId;
	private String menuId;
	private String pathNameRole;
	
	private int idAccess;
	private String description;
	private String department;
	private String physicalDeliveryOfficeName;
	
	private List<MenuFilter> sub;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getActive() {
		return active;
	}

	public void setActive(int active) {
		this.active = active;
	}

	public int getLevelMenu() {
		return levelMenu;
	}

	public void setLevelMenu(int levelMenu) {
		this.levelMenu = levelMenu;
	}

	public String getMenuName() {
		return menuName;
	}

	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}

	public String getParentId() {
		return parentId;
	}

	public void setParentId(String parentId) {
		this.parentId = parentId;
	}

	public String getPathName() {
		return pathName;
	}

	public void setPathName(String pathName) {
		this.pathName = pathName;
	}

	public String getClassStyle() {
		return classStyle;
	}

	public void setClassStyle(String classStyle) {
		this.classStyle = classStyle;
	}

	public int getMenuType() {
		return menuType;
	}

	public void setMenuType(int menuType) {
		this.menuType = menuType;
	}

	public int getIdRole() {
		return idRole;
	}

	public void setIdRole(int idRole) {
		this.idRole = idRole;
	}

	public String getAccessId() {
		return accessId;
	}

	public void setAccessId(String accessId) {
		this.accessId = accessId;
	}

	public String getMenuId() {
		return menuId;
	}

	public void setMenuId(String menuId) {
		this.menuId = menuId;
	}

	public String getPathNameRole() {
		return pathNameRole;
	}

	public void setPathNameRole(String pathNameRole) {
		this.pathNameRole = pathNameRole;
	}

	public int getIdAccess() {
		return idAccess;
	}

	public void setIdAccess(int idAccess) {
		this.idAccess = idAccess;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getPhysicalDeliveryOfficeName() {
		return physicalDeliveryOfficeName;
	}

	public void setPhysicalDeliveryOfficeName(String physicalDeliveryOfficeName) {
		this.physicalDeliveryOfficeName = physicalDeliveryOfficeName;
	}

	public List<MenuFilter> getSub() {
		return sub;
	}

	public void setSub(List<MenuFilter> sub) {
		this.sub = sub;
	}
	
	
}
