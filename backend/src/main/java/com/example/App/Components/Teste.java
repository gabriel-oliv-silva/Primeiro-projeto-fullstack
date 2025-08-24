package com.example.App.Components;

import org.springframework.stereotype.Component;

    @Component
    public class Teste {

        public Teste() {
            System.out.println("Oi, Gabriel!"); // roda quando Spring criar o bean
        }

        public String ola() {
            return "Oi, Gabriel";
        }
    }
