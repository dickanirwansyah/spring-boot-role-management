package com.app.springangularrole.service;

import com.app.springangularrole.entity.Menu;
import com.app.springangularrole.entity.MenuRole;
import com.app.springangularrole.model.MenuActive;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.springangularrole.repository.MenuRepository;
import com.app.springangularrole.repository.MenuRoleRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class MenuRoleService {
	
	@Autowired
	MenuRoleRepository menuRoleRepository;
	
	@Autowired
	MenuRepository menuRepository;

	public List<MenuRole> getAll(){
		return menuRoleRepository.findAll();
	}

	public List<MenuRole> getByAccessId(String accessId){
		return menuRoleRepository.findByAccessId(accessId);
	}

	public void deleteAccessId(String accessId){
		menuRoleRepository.deleteByAccessId(accessId);
	}

	public void deleteAll(List<MenuRole> menuRoles){
		menuRoleRepository.delete(menuRoles);
	}

	public void saveAll(List<MenuRole> menuRoles){
		menuRoleRepository.save(menuRoles);
	}

	public void save(MenuRole menuRole){
		menuRoleRepository.save(menuRole);
	}

	public List<MenuRole> getAccessIdAndParentId(String accessId, String parentId){
		return menuRoleRepository.findByAccessIdAndParentIdContaining(accessId, parentId);
	}

	public List<MenuActive> listMenuRole(String accessId, String role){

		List<Menu> all = menuRepository.menuJoin(role);
		List<MenuActive> allDetails = new ArrayList<>();

		for (Menu menu : all){
			if (menu.getLevelMenu() == 1){
				List<MenuRole> lsMenuRole = getAccessIdAndParentId(accessId, menu.getId());
				//model menu active
				MenuActive menuActive = new MenuActive(menu);
				if (lsMenuRole.size() > 0){
					menuActive.setSub(menuRepository.findMenuByParentId(menu.getId()));
				}
				allDetails.add(menuActive);
			}
		}
		return allDetails;
	}
}
