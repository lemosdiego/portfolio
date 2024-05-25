import Styles from "./index.module.css"
import Header from "../components/Header/Header";
import Sobre from "../components/Sobre/Sobre";
import Inicio from "../components/Inicio/Inicio";
import Projetos from "../components/Projetos/Projetos";
import Contatos from "../components/Contatos/Contatos";
import Ferramentas from "../components/Ferramentas/Ferramentas";
import MenuMobile from "../components/MenuMobile/MenuMobile";


export default function Index() {
    return (
        <div className={Styles.container}>
            <MenuMobile />
            <Header />
            <Inicio />
            <Sobre />
            <Projetos />
            <Ferramentas />
            <Contatos />

        </div>
    )
}