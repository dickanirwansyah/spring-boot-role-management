package com.app.springangularrole.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/")
public class WebController {

    @GetMapping
    public Map<String, Object> getHalloRest(){
        Map<String, Object> model = new HashMap<>();
        model.put("message", "Example menu dengan rest api");
        return model;
    }
}
