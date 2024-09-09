async function getTodosJogadores() {
    const URL_MOSTRAR_TODOS_JOGADORES = "http://localhost:8080/jogador/mostrarJogadores"
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var cabecalho = {
        method: 'GET',
        headers: myHeaders,
    }
    const res = await fetch(URL_MOSTRAR_TODOS_JOGADORES, cabecalho);
    if (!res.ok) {
        throw new Error('Falha na conexão')
    }
    return res.json();
}
export default getTodosJogadores;