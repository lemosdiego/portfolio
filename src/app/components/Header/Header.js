import Menu from "./MenuBar/Menubar";
import Styles from "./header.module.css";

export default function Header() {

    return (
        <header className={Styles.header} id="header">
            <div className={Styles.container_menu}>
                <Menu />
            </div>
        </header>
    );
}
