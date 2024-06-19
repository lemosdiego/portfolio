import Styles from "./contatos.module.css"
import Image from "next/image"

export default function Contatos() {
    return (
        <section className={Styles.contatos} id="contatos">
            <div className={Styles.container}>
                <div className={Styles.redes}>
                    <div className={Styles.title}>
                        <h2>Vamos Conversar?</h2>
                    </div>
                    <div className={Styles.descricao}>
                        <div className={Styles.title_redes}>
                            <h3>Redes Sociais:</h3>
                        </div>
                        <ul>
                            <a href="https://www.linkedin.com/in/washington-lemos-033177186/" target="blank"><li>Linkedin</li></a>
                            <a href="https://www.instagram.com/washington.lemos_/?hl=pt-br" target="blank"><li>Instagram</li></a>
                            <a href="https://www.facebook.com/washington.lemos.961/?locale=pt_BR" target="blank"><li>Facebook</li></a>
                            <a href="https://WA.me/5581982383803" target="blank"><li>Whatsapp</li></a>
                        </ul>
                    </div>
                </div>
                <div className={Styles.formulario}>
                    <div className={Styles.form}>
                        <form action="https://api.staticforms.xyz/submit" method="post">
                            <input type="hidden" name="accessKey" value="71bf7d3e-399a-41d9-a329-ea4cb2e65419" />
                            <input type="hidden" name="redirectTo" value="https://portfolioatalizado.vercel.app/" />
                            <input type="text" name="name" placeholder="Seu Nome" required maxLength={25} minLength={2} />
                            <input type="text" name="email" placeholder="Seu Email" required maxLength={50} />
                            <textarea name="message" required maxLength={150} placeholder="Deixe sua mensagem"></textarea>
                            <button>Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
