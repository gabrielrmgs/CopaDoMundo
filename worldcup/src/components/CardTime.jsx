import Link from "next/link";
import Image from "next/image";
import getTimesTabela from "../app/api/timesapi";

export async function CardTime() {
    const tabela = await getTimesTabela();
    return (
        <div className="mt-28 mb-28 grid grid-cols-4 gap-20">
            {tabela.map((time) => (
                <div key={time.id} className="bg-[#708eac] w-[360px] min-h-[420px] rounded-2xl items-center flex flex-col p-6">
                    <Image src={time.time.escudo} width='141' height='120' className="flex"></Image>
                    <h1 className="text-lg font-semibold">{time.time.nome_popular}</h1>
                    <h3 className="text-sm font-light">Jogos: {time.jogos}</h3>
                    <h3 className="text-sm font-light">Vitórias: {time.vitorias}</h3>
                    <h3 className="text-sm font-light">Derrotas: {time.derrotas}</h3>
                    <Link href='/home' className="relative hover:cursor-pointer hover:text-[#afd2e4] flex top-[40px]">Contratar jogadores</Link>
                    <Link href='/home' className="relative hover:cursor-pointer hover:text-[#afd2e4] flex top-[45px]">Demitir jogadores</Link>
                    <Link href='/home' className="relative hover:cursor-pointer hover:text-[#afd2e4] flex top-[50px]">Ver elenco de jogadores</Link>
                </div>
            ))}
        </div>
    )
}