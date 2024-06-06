import Styles from "./sobre.module.css"

export default function Sobre() {
    return (
        <section className={Styles.container} id="sobre">
            <div className={Styles.sobre_mim}>
                <div className={Styles.titulo}>
                    <h2>Sobre mim</h2>
                </div>
                <div className={Styles.descricao}>
                    <p>Sou formado em Análise e Desenvolvimento de Sistemas. Atualmente, estou aprofundando meus conhecimentos estudando Engenharia de Software e Desenvolvimento Full Stack. Estou sempre em busca de novos desafios e oportunidades para expandir minhas habilidades na área de tecnologia.</p>
                    <p>Nos meus momentos livres, adoro viajar e conhecer novas culturas. Viajar me proporciona uma visão mais ampla do mundo e me enriquece com novas experiências. Também sou um grande fã de futebol. Além disso, gosto muito de fazer trilhas e estar em contato com a natureza, o que me ajuda a relaxar e recarregar as energias. Outro hobby que curto bastante é jogar games, especialmente aqueles com a temática de battlegrounds, onde posso me divertir e testar minhas habilidades estratégicas.</p>
                    <p>Meu objetivo principal é conseguir uma oportunidade na área de programação, seja como estagiário ou em uma posição júnior. Estou determinado a aplicar todo o conhecimento que adquiri até agora e ansioso para começar minha carreira na área de tecnologia. Realizar esse objetivo é essencial para que eu possa alcançar meus sonhos e construir uma carreira de sucesso.</p>
                </div>
                <div className={Styles.redes_sociais}>
                    <div className={Styles.curriculo}>
                        <button><a href="/assets/img/curriculo.pdf" download>curriculo</a></button>
                        <button><a href="https://drive.google.com/drive/folders/1zDTjqRBDQOFBmYn4MCzDyF1tl_CG-VV8?usp=sharing" target="blank">Certificados</a></button>
                    </div>
                    <div className={Styles.contatos}>
                        <div className={Styles.icons}>
                            <a href="https://WA.me/5581982383803" target="_blank">
                                <img src="img/whats.svg" alt="Whatsapp" />
                            </a>
                        </div>
                        <div className={Styles.icons}>
                            <a href="https://ig.me/m/washington.lemos_" target="_blank">
                                <img src="img/messenger.svg" alt="Mensenger" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}