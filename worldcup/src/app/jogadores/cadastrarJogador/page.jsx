import { MenuPrincipal } from "../../../components/MenuPrincipal";
import { Rodape } from "../../../components/Rodape";
import { FormularioJogador } from "../../../components/formularioJogador";

export default function Page() {

    return (
        <body>
            <MenuPrincipal />
            <main className="min-h-screen min-w-screen flex justify-center items-center">
                <FormularioJogador />
            </main>
            <Rodape />
        </body>

    );
}
