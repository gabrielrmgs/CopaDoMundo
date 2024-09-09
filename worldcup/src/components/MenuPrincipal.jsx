'use client'
import logormg from "../../public/logormg.png"
import Image from "next/image";
import Link from "next/link";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "../components/ChevronDownIcon";

export function MenuPrincipal() {
    return (
        <nav className="w-full h-20 bg-[#2d3844] fixed z-50">
            <Image src={logormg} width='111' height='111' className="float-left flex relative top-[-15px] left-[66px]"></Image>
            <div className="flex float-right relative top-[18px] right-[66px]">
                <input className="rounded-md p-2 items-center justify-center w-[180px] ml-3 bg-[#364250]" placeholder="Pesquisar..."></input>
                <i className='bx bx-search-alt relative flex right-[42px] top-[12px] text-lg text-[#929a9e]'></i>
            </div>
            <ul className="h-full flex flex-row justify-center items-center">

                <li>
                    <Link className="font-semibold hover:bg-[#415263] duration-150 hover:text-[#afd2e4] h-full p-6 justify-center items-center text-center flex text-lg text-[#929a9e]" href='/home'>Início</Link>
                </li>
                <li>
                    <Menu allowHover>
                        <MenuHandler>
                            <h1 className="font-semibold hover:bg-[#415263] duration-150 hover:text-[#afd2e4] h-full p-6 justify-center items-center text-center flex text-lg text-[#929a9e]">Jogadores
                            </h1>
                        </MenuHandler>
                        <MenuList className="bg-[#2d3844] border-none">
                            <Typography as="a" color="white" href='/jogadores/cadastrarJogador'><MenuItem className="decoration-dotted">Cadastrar Jogador</MenuItem></Typography>
                            <Typography as="a" color="white" href="/home" ><MenuItem>Excluir jogador</MenuItem></Typography>
                            <Typography as="a" color="white" href="/jogadores" ><MenuItem>Visualizar jogadores</MenuItem></Typography>
                        </MenuList>
                    </Menu>
                </li>
                <li>
                    <Link className="font-semibold hover:bg-[#415263] duration-150 hover:text-[#afd2e4] h-full p-6 justify-center items-center text-center flex text-lg text-[#929a9e]" href='/home'>Partidas</Link>
                </li>
                <li>
                    <Link className="font-semibold hover:bg-[#415263] duration-150 hover:text-[#afd2e4] h-full p-6 justify-center items-center text-center flex text-lg text-[#929a9e]" href='/home'>Resultados</Link>
                </li>
                <li>
                    <Menu allowHover>
                        <MenuHandler>
                            <h1 className="font-semibold hover:bg-[#415263] duration-150 hover:text-[#afd2e4] h-full p-6 justify-center items-center text-center flex text-lg text-[#929a9e]">Times</h1>

                        </MenuHandler>
                        <MenuList className="bg-[#2d3844] border-none">
                            <Typography as="a" color="white" href='/times/cadastrarTime'><MenuItem>Cadastrar time</MenuItem></Typography>
                            <Typography as="a" color="white" href='/times/cadastrarTime'><MenuItem>Excluir time</MenuItem></Typography>
                            <Typography as="a" color="white" href='/times'><MenuItem>Visualizar times</MenuItem></Typography>
                        </MenuList>
                    </Menu>
                </li>
                <li>
                    <Link className="font-semibold hover:bg-[#415263] duration-150 hover:text-[#afd2e4] h-full p-6 justify-center items-center text-center flex text-lg text-[#929a9e]" href='/home'>Estatísticas</Link>
                </li>
            </ul>
        </nav>
    )
}