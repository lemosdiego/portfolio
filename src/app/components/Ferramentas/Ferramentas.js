import React from "react"
import Styles from "./ferramntas.module.css"

export default function Ferramentas() {

    return (
        <section className={Styles.container} id="ferramentas">
            <div className={Styles.container1}>
                <div className={Styles.title_mobile}>
                    <h2>Habilidades</h2>
                </div>
                <div className={Styles.box}>
                    <div className={Styles.hard_skills}>
                        <div className={Styles.container_icons}>
                            <div className={Styles.icones}>
                                <img src="/img/html.svg" />
                            </div>
                            <div className={Styles.subtitle}>
                                <div id={Styles.html}>

                                </div>
                            </div>
                        </div>
                        <div className={Styles.container_icons}>
                            <div className={Styles.icones}>
                                <img src="/img/css.svg" />
                            </div>
                            <div className={Styles.subtitle}>
                                <div id={Styles.css}>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.container_icons}>
                            <div className={Styles.icones}>
                                <img src="/img/js.svg" />
                            </div>
                            <div className={Styles.subtitle}>
                                <div id={Styles.js}>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.container_icons}>
                            <div className={Styles.icones}>
                                <img src="/img/git.svg" />
                            </div>
                            <div className={Styles.subtitle}>
                                <div id={Styles.git}>

                                </div>
                            </div>
                        </div>
                        <div className={Styles.container_icons}>
                            <div className={Styles.icones}>
                                <img src="/img/github.svg" />
                            </div>
                            <div className={Styles.subtitle}>
                                <div id={Styles.github}>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.hard_skills}>
                        <div className={Styles.container_icons}>
                            <div className={Styles.icones}>
                                <img src="/img/react.svg" />
                            </div>
                            <div className={Styles.subtitle}>
                                <div id={Styles.react}>

                                </div>
                            </div>
                        </div>
                        <div className={Styles.container_icons}>
                            <div className={Styles.icones}>
                                <img src="/img/next.svg" />
                            </div>
                            <div className={Styles.subtitle}>
                                <div id={Styles.next}>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.container_icons}>
                            <div className={Styles.icones}>
                                <img src="/img/angular.svg" />
                            </div>
                            <div className={Styles.subtitle}>
                                <div id={Styles.angular}>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.container_icons}>
                            <div className={Styles.icones}>
                                <img src="/img/node.svg" />
                            </div>
                            <div className={Styles.subtitle}>
                                <div id={Styles.node}>

                                </div>
                            </div>
                        </div>
                        <div className={Styles.container_icons}>
                            <div className={Styles.icones}>
                                <img src="/img/bot.svg" />
                            </div>
                            <div className={Styles.subtitle}>
                                <div id={Styles.bot}>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.hard_skills}>
                        <div className={Styles.container_icons}>
                            <div className={Styles.icones}>
                                <img src="/img/mui.svg" />
                            </div>
                            <div className={Styles.subtitle}>
                                <div id={Styles.mu}>

                                </div>
                            </div>
                        </div>
                        <div className={Styles.container_icons}>
                            <div className={Styles.icones}>
                                <img src="/img/type.svg" />
                            </div>
                            <div className={Styles.subtitle}>
                                <div id={Styles.ts}>

                                </div>
                            </div>
                        </div>
                        <div className={Styles.container_icons}>
                            <div className={Styles.icones}>
                                <img src="/img/python.svg" />
                            </div>
                            <div className={Styles.subtitle}>
                                <div id={Styles.python}>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.container_icons}>
                            <div className={Styles.icones}>
                                <img src="/img/php.svg" />
                            </div>
                            <div className={Styles.subtitle}>
                                <div id={Styles.php}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Styles.box1}>
                    <div className={Styles.titulo}>
                        <h2>Habilidades</h2>
                    </div>
                    <div className={Styles.skills}>
                        <div className={Styles.container_skills}>
                            <div className={Styles.soft}>
                                <h3>Soft skills</h3>
                            </div>
                            <div className={Styles.arrow}>
                            </div>
                            <div className={Styles.arrow_mobile}>

                            </div>
                            <div className={Styles.hard_mobile}>
                                <h3>Hard skills</h3>
                            </div>
                        </div>
                        <div className={Styles.container_skills1}>
                            <div className={Styles.arrow}>

                            </div>
                            <div className={Styles.hard}>
                                <h3>Hard Skills</h3>
                            </div>
                            <div className={Styles.soft_mobile}>
                                <h3>Soft skills</h3>
                            </div>
                            <div className={Styles.arrow_mobile}>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={Styles.box2}>
                    <div className={Styles.soft_skills}>
                        <p>Trabalho em equipe</p>
                    </div>
                    <div className={Styles.soft_skills}>
                        <p>Confiança</p>
                    </div>
                    <div className={Styles.soft_skills}>
                        <p>Motivação</p>
                    </div>
                    <div className={Styles.soft_skills}>
                        <p>Segurança</p>
                    </div>
                    <div className={Styles.soft_skills}>
                        <p>Determinação</p>
                    </div>
                    <div className={Styles.soft_skills}>
                        <p>Organização</p>
                    </div>
                </div>
            </div>
        </section>
    )

}