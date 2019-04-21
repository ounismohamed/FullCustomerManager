package com.tp.customermanager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@SpringBootApplication
public class CustomermanagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(CustomermanagerApplication.class, args);
	}


	@RequestMapping({"/","/login","/main","/form/**","/users"})
	public String getHome(){
		return "forward:/index.html";
	}

}
