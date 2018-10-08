package com.app.springangularrole.service;

import com.app.springangularrole.entity.Menu;
import com.app.springangularrole.entity.MenuRole;
import com.app.springangularrole.model.MenuActive;
import com.app.springangularrole.repository.MenuRepository;
import com.app.springangularrole.repository.MenuRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MenuService {

    @Autowired
    MenuRepository menuRepository;

    @Autowired
    MenuRoleRepository menuRoleRepository;

    public List<MenuActive> listMenuActive(){
        List<Menu> all = menuRepository.findMenuByLevelMenu(1);
        List<MenuActive> allDetails = new ArrayList<>();

        for (Menu menu : all){
            MenuActive menuActive = new MenuActive(menu);
            menuActive.setSub(menuRepository.findMenuByParentId(menu.getId()));
            allDetails.add(menuActive);
        }
        return allDetails;
    }

    public List<MenuActive> listMenu(String role){
        List<Menu> all = menuRepository.menuJoin(role);
        List<MenuActive> allDetails = new ArrayList<>();

        for (Menu menu : all){
            if (menu.getLevelMenu() == 1){
                List<MenuRole> lsMenuRole = menuRoleRepository
                        .findByAccessIdAndParentIdContaining(role, menu.getId());
                MenuActive menuActive = new MenuActive(menu);

                if (lsMenuRole.size() > 0){
                    List<Menu> lsMenuSub = new ArrayList<>();
                    List<Menu> lsSubMenu = menuRepository.findMenuByParentId(menu.getParentId());

                    for (Menu subMenu : lsSubMenu){
                        for (MenuRole subTree : lsMenuRole){
                            if (subMenu.getId().equalsIgnoreCase(subTree.getMenuId())){
                                lsMenuSub.add(subMenu);
                                menuActive.setSub(lsMenuSub);
                            }
                        }
                    }
                }
                allDetails.add(menuActive);
            }
        }
        return allDetails;
    }
}
