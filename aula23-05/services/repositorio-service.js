export class reposepositorioService {
    constructor(){
        this.urlBase = "https://api.github.com";
    }
    async obterRepositorios(idUsuario){
        const resposta = await fetch(`${this.urlBase}/users/${idUsuario}/repos`);
        if(!resposta.ok)
            throw new Error("Não foi possível buscar os repositórios deste usuário");
        return resposta.json();
    }
}