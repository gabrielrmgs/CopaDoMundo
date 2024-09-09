async function getTimesTabela() {
    var keysAPI = new Headers();
    keysAPI.append('Authorization', 'Bearer live_84b302875c0b246c5c99016eb8aea1');

    var cabecalho = {
        method: 'GET',
        headers: keysAPI,
    }

    const res = await fetch('https://api.api-futebol.com.br/v1/campeonatos/10/tabela', cabecalho);
    if(!res.ok) {
        throw new Error('Falha na conexão')
    }
    return res.json();
}

export default getTimesTabela;