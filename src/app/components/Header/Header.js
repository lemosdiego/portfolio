'use client';
import Menu from "./MenuBar/Menubar";
import MenuMobile from "./MenuMobile/MenuMobile";
import Styles from "./header.module.css";

export default function Header() {

    return (
        <header className={Styles.header} id="header" >
            <div className={Styles.menu_mobile} >
                <MenuMobile />
            </div>
            <div className={Styles.container_menu} >
                <Menu />
            </div>
        </header>
    );
}
