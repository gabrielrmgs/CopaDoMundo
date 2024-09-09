import { MenuPrincipal } from "../../components/MenuPrincipal";
import { Rodape } from "../../components/Rodape";
import { CardJogador } from "../../components/CardJogador";


export default function Home() {

    return (
        <body>
            <MenuPrincipal />
            <main className="min-h-screen min-w-screen items-center justify-center flex">
                <CardJogador />
            </main>
            <Rodape />
        </body>

    );
}
