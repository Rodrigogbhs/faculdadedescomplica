class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando.`;
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

function criarFuncionario() {
    try {
        const nome = document.getElementById("nome").value;
        const idade = document.getElementById("idade").value;
        const cargo = document.getElementById("cargo").value;
        const departamento = document.getElementById("departamento").value;
        const linguagem = document.getElementById("linguagem").value;

        if (!nome || !idade || !cargo) {
            throw new Error(
                "Por favor, preencha todos os campos obrigatórios."
            );
        }

        let funcionario;
        if (cargo.toLowerCase() === "gerente") {
            if (!departamento) {
                throw new Error(
                    "Por favor, preencha o campo departamento para o gerente."
                );
            }
            funcionario = new Gerente(nome, idade, cargo, departamento);
        } else if (cargo.toLowerCase() === "desenvolvedor") {
            if (!linguagem) {
                throw new Error(
                    "Por favor, preencha o campo linguagem para o desenvolvedor."
                );
            }
            funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
        } else {
            funcionario = new Funcionario(nome, idade, cargo);
        }

        document.getElementById("resultado").innerText = `
            ${funcionario.seApresentar()}
            ${funcionario.trabalhar()}
            ${funcionario instanceof Gerente ? funcionario.gerenciar() : ""}
            ${
                funcionario instanceof Desenvolvedor
                    ? funcionario.programar()
                    : ""
            }
        `;
        document.getElementById("erro").innerText = "";
    } catch (error) {
        exibirErro(error.message);
    }
}

function exibirErro(mensagem) {
    document.getElementById("erro").innerText = mensagem;
}
