'use client';
import { useEffect } from 'react';
import Styles from "./header.module.css";
import Image from "next/image";


export default function Header() {

    useEffect(() => {
        function handleOutsideClick(event) {
            const header = document.getElementById("header");
            if (!header.contains(event.target)) {
                fecharMenu();
            }
        }

        function handleScroll() {
            fecharMenu();
        }

        document.addEventListener("mousedown", handleOutsideClick);
        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function abriMenu() {
        const abrir = document.getElementById('header')
        const iconeOpen = document.getElementById('open')
        const iconClose = document.getElementById('close')

        abrir.style.display = "flex"
        iconeOpen.style.display = 'none'
        iconClose.style.display = "block"
        abrir.style.backgroundColor = "#B71C1C"
        abrir.style.opacity = "0.9"
    }

    function fecharMenu() {
        const fechar = document.getElementById("header")
        const openSvg = document.getElementById("open")
        const closeSvg = document.getElementById('close')

        openSvg.style.display = "block"
        fechar.style.display = "none"
        closeSvg.style.display = "none"
    }

    return (
        <>
            <div className={Styles.container}>
                <p>Menu</p>
                <div className={Styles.icon}>
                    <Image src="/menu/openwhite.svg" id="open" alt="open" width={50} height={50} onClick={abriMenu} />
                    <Image src="/menu/close.svg" id="close" alt="close" width={50} height={50} onClick={fecharMenu} style={{ display: "none" }} />
                </div>
            </div>
            <header className={Styles.header} style={{ display: "none" }} id="header">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#sobre">Sobre mim</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#ferramentas">Habilidades</a></li>
                    <li><a href="#contatos">Contatos</a></li>
                </ul>
            </header>
        </>
    );
}
