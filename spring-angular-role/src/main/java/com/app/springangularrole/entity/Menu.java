package com.app.springangularrole.entity;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@XmlRootElement
@NamedQueries({
	@NamedQuery(name = "Menu.findAll", query = "select m from Menu m"),
	@NamedQuery(name = "Menu.findById", query = "select m from Menu m where m.id = :id"),
	@NamedQuery(name = "Menu.findByActive", query = "select m from Menu m where m.active = :active"),
	@NamedQuery(name = "Menu.findByLevelMenu", query = "select m from Menu m where m.levelMenu = :levelMenu"),
	@NamedQuery(name = "Menu.findByMenuName", query = "select m from Menu m where m.menuName = :menuName"),
	@NamedQuery(name = "Menu.findByParentId", query = "select m from Menu m where m.parentId = :parentId"),
	@NamedQuery(name = "Menu.findByPathName", query = "select m from Menu m where m.pathName = :pathName"),
	@NamedQuery(name = "Menu.findByClassStyle", query = "select m from Menu m where m.classStyle = :classStyle"),
	@NamedQuery(name = "Menu.findByMenuType", query = "select m from Menu m where m.menuType = :menuType")
})
@Entity
@Table(name = "menu")
public class Menu implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@NotNull
	@Basic(optional = false)
	@Size(min = 1, max = 50)
	@Column(name = "id")
	private String id;
	
	@Column(name = "active")
	private Short active;
	
	@Column(name = "level_menu")
	private Integer levelMenu;
	
	@Size(max = 100)
	@Column(name = "menu_name")
	private String menuName;
	
	@Size(max = 50)
	@Column(name = "parent_id")
	private String parentId;
	
	@Size(max = 200)
	@Column(name = "path_name")
	private String pathName;
	
	@Size(max = 100)
	@Column(name = "class_style")
	private String classStyle;
	
	@Column(name = "menu_type")
	private Integer menuType;
	

	
}
