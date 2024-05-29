import Styles from "./ferramentas.module.css"

export default function Ferramentas() {
    return (
        <section className={Styles.Container_ferramentas} id="ferramentas">
            <div className={Styles.ferramentas}>
                <div className={Styles.title_hard}>
                    <h3>Hard Skills</h3>
                </div>
                <div className={Styles.hard_skills}>
                    <div className={Styles.container_icons}>
                        <div className={Styles.icones}>
                            <img src="img/html.svg" />
                        </div>
                        <div className={Styles.texto}>
                            <p>HTML5</p>
                        </div>
                    </div>
                    <div className={Styles.container_icons}>
                        <div className={Styles.icones}>
                            <img src="img/css.svg" />
                        </div>
                        <div className={Styles.texto}>
                            <p>CSS3</p>
                        </div>
                    </div>
                    <div className={Styles.container_icons}>
                        <div className={Styles.icones}>
                            <img src="img/js.svg" />
                        </div>
                        <div className={Styles.texto}>
                            <p>Java Script</p>
                        </div>
                    </div>
                    <div className={Styles.container_icons}>
                        <div className={Styles.icones}>
                            <img src="img/git.svg" />
                        </div>
                        <div className={Styles.texto}>
                            <p>GIT</p>
                        </div>
                    </div>
                    <div className={Styles.container_icons}>
                        <div className={Styles.icones}>
                            <img src="img/github.svg" />
                        </div>
                        <div className={Styles.texto}>
                            <p>Github</p>
                        </div>
                    </div>
                    <div className={Styles.container_icons}>
                        <div className={Styles.icones}>
                            <img src="img/node.svg" />
                        </div>
                        <div className={Styles.texto}>
                            <p>Node.js</p>
                        </div>
                    </div>
                    <div className={Styles.container_icons}>
                        <div className={Styles.icones}>
                            <img src="img/react.svg" />
                        </div>
                        <div className={Styles.texto}>
                            <p>React</p>
                        </div>
                    </div>
                    <div className={Styles.container_icons}>
                        <div className={Styles.icones}>
                            <img src="img/angular.svg" />
                        </div>
                        <div className={Styles.texto}>
                            <p>Angular</p>
                        </div>
                    </div>
                    <div className={Styles.container_icons}>
                        <div className={Styles.icones}>
                            <img src="img/type.svg" />
                        </div>
                        <div className={Styles.texto}>
                            <p>Typescript</p>
                        </div>
                    </div>
                    <div className={Styles.container_icons}>
                        <div className={Styles.icones}>
                            <img src="img/bot.svg" />
                        </div>
                        <div className={Styles.texto}>
                            <p>Bootstrap</p>
                        </div>
                    </div>
                    <div className={Styles.container_icons}>
                        <div className={Styles.icones}>
                            <img src="img/mui.svg" />
                        </div>
                        <div className={Styles.texto}>
                            <p>Material UI</p>
                        </div>
                    </div>
                    <div className={Styles.container_icons}>
                        <div className={Styles.icones}>
                            <img src="img/next.svg" />
                        </div>
                        <div className={Styles.texto}>
                            <p>Next.Js</p>
                        </div>
                    </div>
                    <div className={Styles.container_icons}>
                        <div className={Styles.icones}>
                            <img src="img/responsive.svg" />
                        </div>
                        <div className={Styles.texto}>
                            <p>Media queries</p>
                        </div>
                    </div>
                </div>
                <div className={Styles.title_soft}>
                    <h3>Soft Skills</h3>
                </div>
                <div className={Styles.soft_skills}>
                    <ul>
                        <li>Segurança</li>
                        <li>Motivação</li>
                        <li>Trabalho em equipe</li>
                        <li>Confiança</li>
                        <li>Determinação</li>
                        <li>Organização</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}