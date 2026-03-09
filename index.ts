class Pessoa {
    nome: string;
    idade: Number;

    constructor(nome: string, idade: Number) {
        this.nome = nome;
        this.idade = idade;
    }
    
    apresentar(): string {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

//Criando uma instância da classe Pessoa
const pessoa1 = new Pessoa("João", 30);
console.log(pessoa1.apresentar());