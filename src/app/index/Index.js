import styles from './index.module.css'
import Header from '../components/Header/Header'
import Sobre from '../components/Sobre/Sobre'
import Projetos from '../components/Projetos/Projetos'
import Ferramentas from '../components/Ferramentas/Ferramentas'
import Contatos from '../components/Contatos/Contatos'



export default function Index() {
    return (
        <div className={styles.container}>
            <Header />
            <Sobre />
            <Projetos />
            <Ferramentas />
            <Contatos />
        </div>
    )
}