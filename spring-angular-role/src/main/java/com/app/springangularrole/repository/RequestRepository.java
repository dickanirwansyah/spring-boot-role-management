package com.app.springangularrole.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.springangularrole.entity.Request;

public interface RequestRepository extends JpaRepository<Request, String>{

}
