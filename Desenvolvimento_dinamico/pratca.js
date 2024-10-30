const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(
    "Selecione uma bebida:\n1 - Café\n2 - Leite\n3 - Chá\n",
    (escolha) => {
        let valor = 0.0;
        let bebida = "";

        switch (escolha) {
            case "1":
                valor = 2.5;
                bebida = "café";
                break;
            case "2":
                valor = 1.8;
                bebida = "leite";
                break;
            case "3":
                valor = 1.2;
                bebida = "chá";
                break;
            default:
                console.log(
                    "Opção inválida. Por favor, escolha entre café, leite ou chá."
                );
                return;
        }

        console.log(
            `Você escolheu ${bebida} e o valor a ser pago é R$ ${valor.toFixed(
                2
            )}.`
        );
        rl.close();
    }
);
