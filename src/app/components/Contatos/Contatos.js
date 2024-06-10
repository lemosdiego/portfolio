import Styles from "./contatos.module.css"
import Image from "next/image"

export default function Contatos() {
    return (
        <footer className={Styles.container} id="contatos">
            <div className={Styles.container_contatos}>
                <div className={Styles.title}>
                    <h2>Me envie uma mensagem</h2>
                </div>
                <div className={Styles.form}>
                    <form action="https://api.staticforms.xyz/submit" method="post">
                        <input type="hidden" name="accessKey" value="71bf7d3e-399a-41d9-a329-ea4cb2e65419" />
                        <input type="hidden" name="redirectTo" value="http://192.168.2.14:5500/" />
                        <label htmlFor="inputNome">Nome</label>
                        <input type="text" id="inputNome" name="name" required maxLength="25" minLength="2" placeholder="Washington" />
                        <label htmlFor="inputSobrenome">Sobrenome</label>
                        <input type="text" id="inputSobrenome" name="sobrenome" required maxLength="25" minLength="2" placeholder="Lemos" />
                        <label htmlFor="inputEmail">Email</label>
                        <input type="email" id="inputEmail" name="email" required maxLength="40" placeholder="email@email.com" />
                        <label htmlFor="textAreaMensagem">Mensagem</label>
                        <textarea name="message" id="textAreaMensagem" required maxLength="100" cols="50" rows="4"></textarea>
                        <button className={Styles.button_form}>Enviar</button>
                    </form>
                </div>
                <div className={Styles.rodape}>
                    <h2>Redes sociais:</h2>
                    <div className={Styles.icones}>
                        <a href="https://www.linkedin.com/in/washington-lemos-033177186/" target="_blank">
                            <Image src="/img/linkedin.svg" alt="Linkedin" width={100} height={100} layout="responsive" />
                        </a>
                    </div>
                    <div className={Styles.icones}>
                        <a href="https://github.com/lemosdiego" target="_blank">
                            <Image src="/img/github.svg" alt="Github" width={100} height={100} layout="responsive" />
                        </a>
                    </div>
                    <div className={Styles.icones}>
                        <a href="https://www.instagram.com/washington.lemos_/?hl=pt-br" target="_blank">
                            <Image src="/img/insta.svg" alt="Instagram" width={100} height={100} layout="responsive" />
                        </a>
                    </div>
                    <div className={Styles.icones}>
                        <a href="https://WA.me/5581982383803" target="_blank">
                            <Image src="/img/whatsapp.svg" alt="Whatsapp" width={100} height={100} layout="responsive" />
                        </a>
                    </div>
                    <div className={Styles.icones}>
                        <a href="https://www.facebook.com/washington.lemos.961?locale=pt_BR" target="_blank">
                            <Image src="/img/face.svg" alt="Facebook" width={100} height={100} layout="responsive" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
