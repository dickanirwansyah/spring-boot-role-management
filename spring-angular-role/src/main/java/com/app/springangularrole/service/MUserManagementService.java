package com.app.springangularrole.service;

import com.app.springangularrole.entity.MUserManagement;
import com.app.springangularrole.repository.MUserManagementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MUserManagementService {

    @Autowired
    private MUserManagementRepository mUserManagementRepository;

    public List<MUserManagement> getAll(){
        return mUserManagementRepository.findAll();
    }

    public List<MUserManagement> getStatus(){
        return mUserManagementRepository.findByStatus(0);
    }

    public List<MUserManagement> getId(String loginId){
        return mUserManagementRepository.findByLoginId(loginId);
    }

    public MUserManagement checkLogin(String username, String password){
        return mUserManagementRepository.findByNameUserAndPassword(username, password);
    }

    public void saveMUserManagement(MUserManagement mUserManagement){
        mUserManagementRepository.save(mUserManagement);
    }

    public void deleteMUserManagement(String loginId){
        mUserManagementRepository.deleteByLoginId(loginId);
    }
}
