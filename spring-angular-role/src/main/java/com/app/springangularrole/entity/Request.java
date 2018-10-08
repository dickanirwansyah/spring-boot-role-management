package com.app.springangularrole.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "request")
@Data
@Getter
@Setter
@XmlRootElement
@NamedQueries({
	@NamedQuery(name = "Request.findAll", query = "SELECT r FROM Request r"),
	@NamedQuery(name = "Request.findById", query = "SELECT r FROM Request r WHERE r.id = :id"),
	@NamedQuery(name = "Request.findByKtp", query = "SELECT r FROM Request r WHERE r.ktp = :ktp"),
	@NamedQuery(name = "Request.findByNama", query = "SELECT r FROM Request r WHERE r.nama = :nama"),
	@NamedQuery(name = "Request.findByTtl", query = "SELECT r FROM Request r WHERE r.ttl = :ttl"),
	@NamedQuery(name = "Request.findByJk", query = "SELECT r FROM Request r WHERE r.jk = :jk"),
	@NamedQuery(name = "Request.findByBlood", query = "SELECT r FROM Request r WHERE r.blood = :blood"),
	@NamedQuery(name = "Request.findByAlamat", query = "SELECT r FROM Request r WHERE r.alamat = :alamat"),
	@NamedQuery(name = "Request.findByCountry", query = "SELECT r FROM Request r WHERE r.country = :country"),
	@NamedQuery(name = "Request.findByJob", query = "SELECT r FROM Request r WHERE r.job = :job"),
	@NamedQuery(name = "Request.findByReligion", query = "SELECT r FROM Request r WHERE r.religion = :religion"),
	@NamedQuery(name = "Request.findByStatus", query = "SELECT r FROM Request r WHERE r.status = :status"),
	@NamedQuery(name = "Request.findByCitizen", query = "SELECT r FROM Request r WHERE r.citizen = :citizen")
})
public class Request implements Serializable{

	private static final long SerialVersionUID = 1L;
	
	@Id
	@Basic(optional = false)
	@NotNull
	@Size(min = 1, max = 200)
	@Column(name = "id")
	private String id;
	
	@Size(max = 300)
	@Column(name = "ktp")
	private String ktp;
	
	@Size(min = 5, max = 100)
	@Column(name = "nama")
	private String nama;
	
	@Size(max = 300)
	@Column(name = "ttl")
	private String ttl;
	
	@Size(max = 10)
	@Column(name = "jk")
	private String jk;
	
	@Size(max = 10)
	@Column(name = "blood")
	private String blood;
	
	@Size(max = 500)
	@Column(name = "alamat")
	private String alamat;
	
	@Size(max = 250)
	@Column(name = "country")
	private String country;
	
	@Size(max = 100)
	@Column(name = "job")
	private String job;
	
	@Size(max = 30)
	@Column(name = "religion")
	private String religion;
	
	@Size(max = 250)
	@Column(name = "status")
	private String status;
	
	@Size(max = 250)
	@Column(name = "citizen")
	private String citizen;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "tgl")
	private Date tgl;
	
	@Column(name = "signature")
	private Boolean signature;
	
	
}
