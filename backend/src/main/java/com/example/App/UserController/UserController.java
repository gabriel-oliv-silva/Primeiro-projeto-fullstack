package com.example.App.UserController;

import com.example.App.Entity.Usuario;
import com.example.App.UserRepository.iUserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/User")

public class UserController {

    private final iUserRepository repo;

    public UserController(iUserRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Usuario> listar() {
        return repo.findAll();
    }

    @PostMapping
    public Usuario criar(@RequestBody Usuario usuario) {
        return repo.save(usuario);
    }

    @GetMapping("/{id}")
    public Usuario buscar(@PathVariable Long id) {
        if(repo.existsById(id))
        return repo.findById(id).orElseThrow();
        return ResponseEntity.notFound().build();

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (!repo.existsById(id)) {
            return ResponseEntity.notFound().build(); // 404 se não existir
        }
        repo.deleteById(id);
        return ResponseEntity.noContent().build(); // 204 se deletou
    }

    @PutMapping("/{id}")
    public Usuario atualizar(@PathVariable Long id, @RequestBody Usuario usuarioAtualizado) {
        Usuario usuarioExistente = repo.findById(id).orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        usuarioExistente.setNome(usuarioAtualizado.getNome());
        usuarioExistente.setIdade(usuarioAtualizado.getIdade());

        return repo.save(usuarioExistente);
    }


}
