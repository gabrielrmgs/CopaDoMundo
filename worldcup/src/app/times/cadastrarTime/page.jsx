import { MenuPrincipal } from "../../../components/MenuPrincipal";
import { Rodape } from "../../../components/Rodape";
import { FormularioTime } from "../../../components/FormularioTime";

export default function Page() {

    return (
        <body>
            <MenuPrincipal />
            <main className="min-h-screen min-w-screen flex justify-center items-center">
                <FormularioTime />
            </main>
            <Rodape />
        </body>

    );
}
