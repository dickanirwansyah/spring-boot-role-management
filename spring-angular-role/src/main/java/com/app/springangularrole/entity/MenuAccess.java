package com.app.springangularrole.entity;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
@Getter
@Setter
@Table(name="menu_access")
public class MenuAccess implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "id")
	private int id;

	@Column(name = "description")
	private String description;

	@Column(name = "department")
	private String department;

	@Column(name = "physical_delivery_office_name")
	private String physicalDeliveryOfficeName;
	
}
