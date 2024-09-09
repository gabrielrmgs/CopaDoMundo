import { MenuPrincipal } from "../../components/MenuPrincipal";
import { Rodape } from "../../components/Rodape";
import { CardTime } from "../../components/CardTime";


export default function Home() {

    return (
        <body>
            <MenuPrincipal />
            <main className="min-h-screen min-w-screen items-center justify-center flex">
                <CardTime />
            </main>
            <Rodape />
        </body>

    );
}
