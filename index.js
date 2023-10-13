class Jogo {
  constructor(nome, idade, tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  atacar() {
    let ataque = " " ;
    if (this.tipo === "mago") {
      ataque = "usou magia";
    }else if (this.tipo === "guerreiro"){
      ataque = "usou espada";
    }else if (this.tipo === "monge") {
      ataque = "usou artes marciais";
    }else if(this,tipo === "ninja") {
      ataque = "usou shuriken";
    }else {
      ataque = "usou invisibilidade";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}
const heroi = new Jogo("shen", 80, "mago")
heroi.atacar();
