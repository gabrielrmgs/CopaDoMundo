
async function salvar_jogador() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    var objeto = JSON.stringify({
        nome: 'testando',
        posicao: 'ATACANTE',
        numero: 11,
    })

    var requisicao = {
        method: 'POST',
        headers: myHeaders,
        body: objeto,
        redirect: "follow",
    }

    await fetch("http://localhost:8080/jogador/salvar_jogador", requisicao)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}

export default salvar_jogador;