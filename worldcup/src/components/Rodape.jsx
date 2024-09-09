import Link from "next/link";

export function Rodape() {
    return (
        <div className="w-full h-20 bg-[#2d3844] sticky items-center justify-center flex flex-col">
            <h3 className="font-normal text-[#929a9e]">Desenvolvido por Gabriel Remigio <strong>"RMG"</strong> de Sá</h3>
            <div className="flex flex-row gap-4 mt-2">
                <Link href='https://www.instagram.com/gabrielrmgs/' target="_blank"><i className='bx bxl-instagram text-[#929a9e] scale-150 hover:scale-125 duration-150'></i></Link>
                <Link href='https://github.com/gabrielrmgs' target="_blank"><i className='bx bxl-github text-[#929a9e] scale-150 hover:scale-125 duration-150'></i></Link>
                <Link href='https://www.linkedin.com/in/gabrielrmgs/' target="_blank"><i className='bx bxl-linkedin text-[#929a9e] scale-150 hover:scale-125 duration-150'></i></Link>
            </div>
        </div>
    )
}