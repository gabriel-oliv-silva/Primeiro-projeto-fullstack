package com.example.App.UserRepository;

import com.example.App.Entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface iUserRepository extends JpaRepository<Usuario, Long> {


}
