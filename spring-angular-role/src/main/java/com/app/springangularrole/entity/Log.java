package com.app.springangularrole.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "log")
@Data
@Getter
@Setter
@NamedQuery(name = "Log.findAll", query = "SELECT l FROM Log l")
public class Log implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name = "id_log")
	private String idLog;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "dtm_create")
	private Date dtmCreate;
	
	@Column(name = "ip")
	private String ip;
	
	@Column(name = "mac")
	private String mac;
	
	@Column(name = "message")
	private String message;
	
	@Column(name = "status")
	private int status;
	
	@Column(name = "user_id")
	private String userId;
	
	public Log() {
		
	}
	
	
}
