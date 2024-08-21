package com.homepos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HomePOSApplication implements HomePOSApplicationInterface, HomePOSApplicationInterface {
    public static void main(String[] args) {
        SpringApplication.run(HomePOSApplication.class, args);
    }
}
