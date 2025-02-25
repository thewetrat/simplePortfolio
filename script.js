document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("input");
    const outputDiv = document.getElementById("output");

    async function typeEffect(text, speed = 10) {
        return new Promise((resolve) => {
            let i = 0;
            const output = document.createElement("p");
            outputDiv.appendChild(output);
    
            const tempDiv = document.createElement("div"); 
    
            function type() {
                if (i < text.length) {
                    tempDiv.innerHTML = text.substring(0, i + 1); 
                    output.innerHTML = tempDiv.innerHTML;
                    i++;
                    setTimeout(type, speed);
                } else {
                    resolve();
                }
            }
            type();
        });
    }

    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const command = inputField.value.trim();
            processCommand(command);
            inputField.value = "";
        }
    });

    function processCommand(command) {
        const output = document.createElement("p");
        output.innerHTML = `<span class="prompt">></span> ${command}`;
        outputDiv.appendChild(output);

        switch (command.toLowerCase()) {
            case "init":
                outputDiv.innerHTML = "";
                printOutput("Acesso concedido.\n");
                printOutput("<p>Bem-vindo ao portfólio de <span class='highlight'>Pedro Moreno</span></p>")
                printOutput("\nDigite 'help' para ver os comandos disponíveis.\n");
                break;
            case "help":
                printOutput("Comandos disponíveis:\n- help: Lista os comandos\n- projects: Meus projetos\n- contact: Como me contatar\n- clear: Limpa a tela\n- bye: Eu digo tchau");
                break;
            case "projects":
                outputDiv.innerHTML = "";
                typeEffect("Ooooops!!!\nDigite 'init' para retornar...\n",50)
                break;
            case "contact":
                outputDiv.innerHTML = "";
                printOutput("Acesso concedido.\n");
                typeEffect("Contato:\n📧 Email: pedronog195@gmail.com\n🐙 GitHub: <a class='command' href='https://github.com/thewetrat' target='_blank'>https://github.com/thewetrat</a>\n💼 LinkedIn: <a class='command' href='https://www.linkedin.com/in/pedro-moreno-58ba75173/' target='_blank'>https://www.linkedin.com/in/pedro-moreno</a>");
                break;
            case "bye":
                outputDiv.innerHTML = "";
                typeEffect("Obrigado por visitar, espero que tenha se divertido! Tchau!",50)
                break;
            case "wetrat":
                outputDiv.innerHTML = "";
                typeEffect("⚠️ Sistema comprometido...\n🔓 Acesso ao núcleo concedido...\n👁️ Você desbloqueou...", 80);
                typeEffect("<a class='command' href='https://thewetrat.com' target='_blank'>>wetRat<</a>",100)
                break;
            case "clear":
                outputDiv.innerHTML = "";
                break;
            default:
                printOutput(`Comando não encontrado: ${command}. Digite 'help' para ver os comandos disponíveis.`);
        }

        outputDiv.scrollTop = outputDiv.scrollHeight;
    }

    function printOutput(text) {
        const output = document.createElement("p");
        output.innerHTML = text.replace(/\n/g, "<br>");
        outputDiv.appendChild(output);
    }

});



