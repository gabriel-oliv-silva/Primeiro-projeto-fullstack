package com.example.App.Entity;

import jakarta.persistence.*;

@Entity
@Table (name = "usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    @Column (nullable = false)
    private String nome;
    @Column (nullable = false)
    private int idade;

    public long getId() {
        return Id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    @Override
    public String toString() {
        return "Usuario: \n" +
                "\nId: " + Id +
                "\nNome='" + nome + '\'' +
                "\nIdade=" + idade;
    }
}
