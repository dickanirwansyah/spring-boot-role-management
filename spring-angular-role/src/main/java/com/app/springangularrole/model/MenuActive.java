package com.app.springangularrole.model;

import java.util.List;

import com.app.springangularrole.entity.Menu;

@SuppressWarnings("serial")
public class MenuActive extends Menu{
	
	private List<Menu> sub;
	
	public MenuActive() {
		super();
	}
	
	public MenuActive(Menu menu) {
		super();
		this.setActive(menu.getActive());
		this.setId(menu.getId());
		this.setLevelMenu(menu.getLevelMenu());
		this.setMenuName(menu.getMenuName());
		this.setParentId(menu.getParentId());
		this.setClassStyle(menu.getClassStyle());
		this.setPathName(menu.getPathName());
		this.setMenuType(menu.getMenuType());
	}
	
	public List<Menu> getSub(){
		return sub;
	}
	
	public void setSub(List<Menu> sub) {
		this.sub = sub;
	}

}
