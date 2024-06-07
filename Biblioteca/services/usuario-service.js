export class UsuarioService {

    constructor() {
      this.urlBase = "https://0e59fb4e-d166-40c1-aafb-27250da2dee0-00-22s2zabeytv6x.worf.replit.dev/usuario";
    }
  
    async getusuario() {
      const resposta = await fetch(this.urlBase);
      return resposta.json();
    }
  
    async getLivro(id) {
      const resposta = await fetch(`${this.urlBase}/${id}`);
      return resposta.json();
    }
  
    async criarLivro(livro) {
      const resposta = await fetch(this.urlBase, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(livro),
      });
      return resposta.json();
    }
  
    async atualizarLivro(id, livro) {
      const resposta = await fetch(`${this.urlBase}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(livro),
      });
      return resposta.json();
    }
  
    async excluirLivro(id) {
      const resposta = await fetch(`${this.urlBase}/${id}`, {
        method: "DELETE",
      });
      return resposta.json();
    }
  }