'use client';
import Menu from "./MenuBar/Menubar";
import MenuMobile from "./MenuMobile/MenuMobile";
import Styles from "./header.module.css";
import { useState, useEffect } from "react";

export default function Header() {
    const [bgColor, setBgColor] = useState("transparent");

    useEffect(() => {
        const rolarScroll = () => {
            if (window.scrollY > 50) {
                setBgColor("#333333");
            } else {
                setBgColor("transparent");
            }
        };

        window.addEventListener("scroll", rolarScroll);

        return () => {
            window.removeEventListener("scroll", rolarScroll);
        };
    }, []);

    return (
        <header className={Styles.header} id="header" >
            <div className={Styles.menu_mobile} >
                <MenuMobile />
            </div>
            <div className={Styles.container_menu} style={{ backgroundColor: bgColor }}>
                <Menu />
            </div>
        </header>
    );
}
