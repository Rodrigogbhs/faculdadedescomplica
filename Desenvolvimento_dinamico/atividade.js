// Classe Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log(`Olá, meu nome é ${this.nome} e sou ${this.cargo}.`);
    }

    trabalhar() {
        console.log(`${this.nome} está trabalhando.`);
    }
}

// Classe Gerente que herda da classe Funcionario
class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        console.log(
            `${this.nome} está gerenciando o departamento de ${this.departamento}.`
        );
    }
}

// Classe Desenvolvedor que herda da classe Funcionario
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        console.log(`${this.nome} está programando em ${this.linguagem}.`);
    }
}

// Crie instâncias de um gerente e de um desenvolvedor
const gerente = new Gerente("João", 35, "Gerente", "Marketing");
const desenvolvedor = new Desenvolvedor(
    "Maria",
    28,
    "Desenvolvedor",
    "JavaScript"
);

// Chame os métodos apropriados para cada um dos funcionários
gerente.seApresentar();
gerente.trabalhar();
gerente.gerenciar();

desenvolvedor.seApresentar();
desenvolvedor.trabalhar();
desenvolvedor.programar();
