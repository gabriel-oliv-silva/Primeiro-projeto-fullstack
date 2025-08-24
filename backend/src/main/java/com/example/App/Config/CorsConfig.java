package com.example.App.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer configurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://127.0.0.1:5500") // onde está seu front
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH") // adiciona DELETE
                        .allowedHeaders("*"); // permite qualquer header
            }
        };
    }
}
