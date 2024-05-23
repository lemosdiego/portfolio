import { ST } from "next/dist/shared/lib/utils"
import Styles from "./contatos.module.css"

export default function Contatos() {
    return (
        <footer className={Styles.container} id="contatos">
            <div className={Styles.container_contatos}>
                <div className={Styles.title}>
                    <h2>Entre em contato</h2>
                </div>
                <div className={Styles.contatos}>
                    <div className={Styles.sociais}>
                        <div className={Styles.subtitle}>
                            <h3>Redes sociais</h3>
                        </div>
                        <div className={Styles.icons}>
                            <div className={Styles.icones}>
                                <img src="/img/linkedin.svg" />
                            </div>
                            <div className={Styles.icones}>
                                <img src="/img/github.svg" />
                            </div>
                            <div className={Styles.icones}>
                                <img src="/img/insta.svg" />
                            </div>
                            <div className={Styles.icones}>
                                <img src="/img/face.svg" />
                            </div>
                            <div className={Styles.icones}>
                                <img src="/img/whatsapp.svg" />
                            </div>
                        </div>
                        <div className={Styles.rodape}>
                            <ul>
                                <li>washington.contato1327@gmail.com</li>
                                <li>81982383803</li>
                            </ul>
                        </div>
                    </div>
                    <div className={Styles.form}>
                        <form action="https://api.staticforms.xyz/submit" method="post">
                            <input type="hidden" name="accessKey" value="71bf7d3e-399a-41d9-a329-ea4cb2e65419" />
                            <input type="hidden" name="redirectTo" value="http://192.168.2.14:5500/" />
                            <label for="inputNome">Nome</label>
                            <input type="text" id="inputNome" name="name" required maxLength="25" minLength="2"
                                placeholder="Washington"></input>
                            <label for="inputNome">Sobrenome</label>
                            <input type="text" id="inputNome" name="name" required maxLength="25" minLength="2" placeholder="Lemos"></input>
                            <label for="inputEmail">Email</label>
                            <input type="email" id="inputEmail" name="email" required maxLength="40" placeholder="email@email.com"></input>
                            <label for="textAreaMensagem">Mensagem</label>
                            <textarea name="message" id="textAreaMensagem" required maxLength="100" cols="50" rows="4">
                            </textarea>
                            <button className={Styles.button_form}>Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}