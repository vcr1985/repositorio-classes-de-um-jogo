class Jogo {
  constructor(nome, idade, tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  atacar() {
    let ataque = " " ;
    if (this.tipo === "mago") {
      ataque = " magia";
    }else if (this.tipo === "guerreiro"){
      ataque = " espada";
    }else if (this.tipo === "monge") {
      ataque = " artes marciais";
    }else if(this,tipo === "ninja") {
      ataque = " shuriken";
    }else {
      ataque = "invisibilidade";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}
const heroi = new Jogo("shen", 80, "mago")
heroi.atacar();
