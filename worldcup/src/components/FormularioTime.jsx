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


export function FormularioTime() {
    async function onSubmit(event) {
        event.preventDefault()
        
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        /* var formData = new FormData(event.target)
        console.log(formData) */
        

        var nomeFormatado = nome;
        var cidadeFormatado = cidade
        
        const jogador = JSON.stringify({
            nome: nomeFormatado,
            cidade: cidadeFormatado,
        })
        
        console.log(jogador)
        var requisicao = {
            method: 'POST',
            headers: myHeaders,
            body: jogador,
            redirect: "follow",
        }
        
        const repos = await fetch("http://localhost:8080/time/salvar_time", requisicao)
        //Funciona apenas para campos não controlados (sem o useState): document.getElementById("dadosjogador").reset()  ou  event.target.reset()
        //Nesse caso precisarei setar os campos como vazio após o envio do formulário para a API:::
        setNome("");
        setCidade("");
        return repos;
        
    }
    
    const [nome, setNome] = useState("");
    const [cidade, setCidade] = useState("");
    
    return (
        <form id="dadosjogador" onSubmit={onSubmit} >
            <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative self-center h-9 w-72 items-center justify-center flex">
                    <Typography variant="h5" color="blue-gray">Cadastrar Time</Typography>
                </CardHeader>
                <CardBody className="flex flex-col items-center justify-center gap-6 mt-12">

                    <Input value={nome} onChange={(e) => setNome(e.target.value)} name="nome" id="nome" variant="standard" label="Nome" placeholder="Nome do time" form="dadosjogador" />
                    <Input value={cidade} onChange={(e) => setCidade(e.target.value)} name="cidade" id="cidade" variant="standard" label="Cidade" placeholder="Cidade do time" form="dadosjogador" />
                </CardBody>
                <CardFooter className="pt-0">
                    <Button type="submit" form="dadosjogador" disabled={!(nome, cidade)} >Salvar</Button>
                </CardFooter>
            </Card>
        </form>
    )
}