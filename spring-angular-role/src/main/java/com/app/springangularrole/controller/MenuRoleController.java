package com.app.springangularrole.controller;

import com.app.springangularrole.entity.MenuRole;
import com.app.springangularrole.service.MenuRoleService;
import com.app.springangularrole.service.MenuService;
import com.app.springangularrole.util.ConstantaVariabel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.naming.NamingException;
import java.util.List;

@RestController
@CrossOrigin(origins = {"*"})
@RequestMapping(value = "/role")
public class MenuRoleController {

    @Autowired
    MenuRoleService menuRoleService;

    @Autowired
    MenuService menuService;

    @PostMapping(value = "/save")
    public String saved(@RequestBody List<MenuRole> lsMenuRole){
        try{

            if (lsMenuRole != null){
                String accessId = lsMenuRole.get(0).getAccessId();
                List<MenuRole> lsMenu = menuRoleService.getByAccessId(accessId);
                if (lsMenu.size() > 0){
                    menuRoleService.deleteAll(lsMenu);
                }
                menuRoleService.saveAll(lsMenuRole);
                return ConstantaVariabel.MSG.SUCCESS;
            }else{
                return ConstantaVariabel.MSG.ROLE_EMPTY;
            }
        }catch (Exception e){
            return ConstantaVariabel.MSG.FAILED;
        }
    }

    @SuppressWarnings("rawtypes")
    @GetMapping(value = "/menu-role-active")
    public List menuRole(@RequestParam("user") String user,
                         @RequestParam("role") String role) throws NamingException {

        if (role.equals("1")){
            return menuService.listMenuActive();
        }else {
            return menuRoleService.listMenuRole(user, role);
        }
    }
}
