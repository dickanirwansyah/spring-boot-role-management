package com.app.springangularrole.controller;

import com.app.springangularrole.entity.MUserManagement;
import com.app.springangularrole.service.MUserManagementService;
import com.app.springangularrole.util.ConstantaVariabel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping(value = "/user-management")
public class UserManagementRole {

    @Autowired
    MUserManagementService userManagementService;

    @GetMapping(value = "/get")
    public List<MUserManagement> getListByStatus() throws Exception{
        return userManagementService.getStatus();
    }

    @PostMapping(value = "/save")
    public String saved(@RequestBody MUserManagement userManagement){
        try{
            userManagementService.saveMUserManagement(userManagement);
            return ConstantaVariabel.MSG.SUCCESS;
        }catch (Exception e){
            return ConstantaVariabel.MSG.FAILED;
        }
    }

    @PostMapping(value = "/delete")
    public String delete(@RequestBody String id){
        try{
            userManagementService.deleteMUserManagement(id);
            return ConstantaVariabel.MSG.DELETE_SUCCESS;
        }catch (Exception e){
            return ConstantaVariabel.MSG.DELETE_FAILED;
        }
    }
}
