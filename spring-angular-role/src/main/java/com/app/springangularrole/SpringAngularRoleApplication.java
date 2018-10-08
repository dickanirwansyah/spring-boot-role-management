package com.app.springangularrole;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class SpringAngularRoleApplication extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder applicationBuilder){
		return applicationBuilder.sources(SpringAngularRoleApplication.class);
	}

	@SuppressWarnings("unused")
	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(SpringAngularRoleApplication.class, args);
	}
}
