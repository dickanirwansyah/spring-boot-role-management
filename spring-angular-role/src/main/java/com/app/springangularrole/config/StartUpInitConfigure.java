package com.app.springangularrole.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class StartUpInitConfigure {

    private static final Logger LOGGER = LoggerFactory.getLogger(StartUpInitConfigure.class);

    @PostConstruct
    public void init(){

    }
}
