import Styles from "./ferramentas.module.css"

export default function Ferramentas() {
    return (
        <section className={Styles.Container_ferramentas} id="ferramentas">
            <div className={Styles.ferramentas}>
                <div className={Styles.title_hard}>
                    <h2>Hard skills</h2>
                </div>
                <div className={Styles.container_hard}>
                    <div className={Styles.hard}>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>Media queries</li>
                            <li>Git</li>
                            <li>Github</li>
                        </ul>
                    </div>
                    <div className={Styles.hard}>
                        <ul>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>Materia UI</li>
                            <li>Node.JS</li>
                            <li>Next.JS</li>
                            <li>Angular</li>
                        </ul>
                    </div>
                    <div className={Styles.hard}>
                        <ul>
                            <li>Vue.JS</li>
                            <li>TypesScript</li>
                            <li>Python</li>
                            <li>PhP</li>
                            <li>Vs code</li>
                        </ul>
                    </div>
                </div>
                <div className={Styles.title_soft}>
                    <h2>Soft skills</h2>
                </div>
                <div className={Styles.container_soft}>
                    <div className={Styles.soft}>
                        <ul>
                            <li>Trabalho em equipe</li>
                            <li>Segurança</li>
                            <li>Motivação</li>
                            <li>Confiança</li>
                            <li>Determinação</li>
                            <li>Organização</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}