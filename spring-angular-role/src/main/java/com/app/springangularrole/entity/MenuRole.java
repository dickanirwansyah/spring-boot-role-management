package com.app.springangularrole.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
@Getter
@Setter
@Table(name = "menu_role")
@NamedQuery(name = "MenuRole.findAll", query = "SELECT m FROM MenuRole m")
public class MenuRole implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "access_id")
	private String accessId;
	
	@Column(name = "menu_id")
	private String menuId;
	
	@Column(name = "parent_id")
	private String parentId;
	
	
}
