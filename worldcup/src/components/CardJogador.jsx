'use client'
import { useEffect } from "react";
import getTodosJogadores from "../app/api/jogadoresapi";


export async function CardJogador() {
    useEffect(() => {
        
        
    }, [])
    const jogadores = await getTodosJogadores()
    return (
        <div className="mt-28 mb-28 grid grid-cols-4 gap-20">
            {jogadores.map((jogador) => (
                <div key={jogador.id} className="bg-[#708eac] w-[360px] min-h-[420px] rounded-2xl items-center flex flex-col p-6">
                    <h3 className="text-lg font-semibold">Nome: {jogador.nome}</h3>
                    <h3 className="text-sm font-light">Posição: {jogador.posicao}</h3>
                    <h3 className="text-sm font-light">Camisa: {jogador.numero}</h3>
                </div>
            ))}
        </div>
    )
}