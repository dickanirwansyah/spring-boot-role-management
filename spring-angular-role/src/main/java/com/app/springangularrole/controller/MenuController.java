package com.app.springangularrole.controller;

import com.app.springangularrole.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.naming.NamingException;
import java.util.List;

@RestController
@CrossOrigin(origins = {"*"})
@RequestMapping(value = "/menu")
public class MenuController {

    @Autowired
    MenuService menuService;

    @SuppressWarnings({"rawtypes"})
    @GetMapping(value = "/menu-active")
    public List menuSub(@RequestParam("user") String user,
                              @RequestParam("role") String role) throws NamingException {
        //check
        if (role.equals("1")){
            return menuService.listMenuActive();
        }else {
            return menuService.listMenu(user);
        }
    }
}
