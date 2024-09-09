'use client'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { useState } from 'react';
import { Select, Option } from "@material-tailwind/react";


export function FormularioJogador() {
    async function onSubmit(event) {
        event.preventDefault()
        
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        /* var formData = new FormData(event.target)
        console.log(formData) */
        
        console.log(posicao)

        var nomeFormatado = nome;
        var posicaoFormatado = posicao;
        var numeroFormatado = numero
        
        const jogador = JSON.stringify({
            nome: nomeFormatado,
            posicao: posicaoFormatado,
            numero: numeroFormatado,
        })
        
        console.log(jogador)
        var requisicao = {
            method: 'POST',
            headers: myHeaders,
            body: jogador,
            redirect: "follow",
        }
        
        const repos = await fetch("http://localhost:8080/jogador/salvar_jogador", requisicao)
        //Funciona apenas para campos não controlados (sem o useState): document.getElementById("dadosjogador").reset()  ou  event.target.reset()
        //Nesse caso precisarei setar os campos como vazio após o envio do formulário para a API:::
        setNome("");
        setNumero("");
        console.log(posicao);
        setPosicao("");
        return repos;
        
    }
    
    const [nome, setNome] = useState("");
    const [posicao, setPosicao] = useState("");
    const [numero, setNumero] = useState("");
    
    return (
        <form id="dadosjogador" onSubmit={onSubmit} >
            <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative self-center h-9 w-72 items-center justify-center flex">
                    <Typography variant="h5" color="blue-gray">Cadastrar Jogador</Typography>
                </CardHeader>
                <CardBody className="flex flex-col items-center justify-center gap-6 mt-12">

                    <Input value={nome} onChange={(e) => setNome(e.target.value)} name="nome" id="nome" variant="standard" label="Nome" placeholder="Nome do jogador" form="dadosjogador" />
                    <Input value={numero} onChange={(e) => setNumero(e.target.value)} maxLength="2" name="numero" id="numero" variant="standard" label="Número" placeholder="Número do jogador" form="dadosjogador" />
                    <Select value={posicao} onChange={(val) => setPosicao(val)} name="posicao" id="posicao" label="Posição" variant="standard">
                        <Option value="Vazio">Vazio</Option>
                        <Option value="Goleiro">Goleiro</Option>
                        <Option value="Zagueiro">Zagueiro</Option>
                        <Option value="Lateral">Lateral</Option>
                        <Option value="Volante">Volante</Option>
                        <Option value="Meia de contenção">Meia de contenção</Option>
                        <Option value="Meia de armação">Meia de armação</Option>
                        <Option value="Meia aberto">Meia aberto</Option>
                        <Option value="Meia atacante">Meia atacante</Option>
                        <Option value="Ponta">Ponta</Option>
                        <Option value="Segundo atacante">Segundo atacante</Option>
                        <Option value="Centroavante">Centroavante</Option>
                    </Select>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button type="submit" form="dadosjogador" disabled={!(nome, posicao, numero)} >Salvar</Button>
                </CardFooter>
            </Card>
        </form>
    )
}