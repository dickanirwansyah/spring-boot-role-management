package com.app.springangularrole.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Size;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
@Getter
@Setter
@Table(name = "m_user_management")
@NamedQuery(name = "MUserManagement.findAll", query = "SELECT m FROM MUserManagement m")
public class MUserManagement implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name = "login_id")
	private String loginId;
	
	@Column(name = "created_by")
	private String createdBy;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "created_date")
	private Date createdDate;
	
	@Column(name = "modify_by")
	private String modifyBy;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "modify_date")
	private Date modifyDate;
	
	@Column(name = "name_user")
	private String nameUser;
	
	@Column(name = "nip")
	private String nip;
	
	@Column(name = "position_id")
	private int positionId;
	
	@Column(name = "status")
	private int status;
	
	@Size(max = 12)
	@Column(name = "telephone")
	private String telephone;
	
	@Column(name = "password")
	private String password;
	
	
}
