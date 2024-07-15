'use client';
import React, { useEffect } from "react";
import Styles from "./projetos.module.css";
import { Card } from "@mui/material";
import Image from "next/image";

export default function Projetos() {
    const moverEsquerda = () => {
        let esquerda = document.getElementById('projeto');
        esquerda.scrollLeft -= 300;
    };
    const moverDireita = () => {
        const direita = document.getElementById('projeto');
        direita.scrollLeft += 300;
    };

    useEffect(() => {
        const click = () => {
            const clique = document.getElementById('projeto');
        };

        const projeto = document.getElementById('projeto');
        projeto.addEventListener('click', click);

        return () => {
            projeto.removeEventListener('click', click);
        };
    }, []);

    return (
        <div className={Styles.container} id="projetos">
            <div className={Styles.container_projetos}>
                <div className={Styles.title}>
                    <h2>Projetos</h2>
                </div>
                <div className={Styles.projetos}>
                    <div className={Styles.icon}>
                        <button onClick={moverEsquerda}>
                            <Image src="/img/squerdared.svg" alt="seta esquerda" width={100} height={100} />
                        </button>
                    </div>
                    <div className={Styles.container_card} id="projeto">
                        <div className={Styles.card}>
                            <div className={Styles.imagem}>
                                <img src="/projetos/calculadora.png" alt="projeto1" width={100} height={100} />
                            </div>
                            <div className={Styles.titulo}>
                                <h3>Calculadora</h3>
                            </div>
                            <div className={Styles.descricao}>
                                <p>Projeto simples de uma calculadora utilizando HTML, CSS e JavaScript.</p>
                            </div>
                            <div className={Styles.links}>
                                <a href="https://github.com/lemosdiego/calculadora.git" target="_blank" rel="noopener noreferrer">
                                    <button>Repositório</button>
                                </a>
                                <a href="https://calculadora-liard-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button>Deploy</button>
                                </a>
                            </div>
                        </div>
                        <div className={Styles.card}>
                            <div className={Styles.imagem}>
                                <img src="/projetos/apresentacao.png" alt="projeto1" width={100} height={100} />
                            </div>
                            <div className={Styles.titulo}>
                                <h3>Apresentação</h3>
                            </div>
                            <div className={Styles.descricao}>
                                <p>Projetinho desenvolvido como desafio para entrar no Código Certo é uma iniciativa dedicada a impulsionar a inovação e o desenvolvimento digital, utilizando HTML, CSS e JavaScript </p>
                            </div>
                            <div className={Styles.links}>
                                <a href="https://github.com/lemosdiego/TrilhaFrontEndJR-JUN15.git" target="_blank" rel="noopener noreferrer">
                                    <button>Repositório</button>
                                </a>
                                <a href="https://my-apresentation-trilha-front-end.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button>Deploy</button>
                                </a>
                            </div>
                        </div>
                        <div className={Styles.card}>
                            <div className={Styles.imagem}>
                                <img src="/projetos/floricultura.png" alt="projeto1" width={100} height={100} />
                            </div>
                            <div className={Styles.titulo}>
                                <h3>Floricultor</h3>
                            </div>
                            <div className={Styles.descricao}>
                                <p>Projeto de uma landing page que estou desenvolvendo, om Next.js e media queries, oferecemos uma experiência otimizada em todos os dispositivos</p>
                            </div>
                            <div className={Styles.links}>
                                <a href="https://github.com/lemosdiego/meu-Portfolio.git" target="_blank" rel="noopener noreferrer">
                                    <button>Repositório</button>
                                </a>
                                <a href="https://landing-page-floricultura.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button>Deploy</button>
                                </a>
                            </div>
                        </div>
                        <div className={Styles.card}>
                            <div className={Styles.imagem}>
                                <img src="/projetos/projeto1.jpeg" alt="projeto1" width={100} height={100} />
                            </div>
                            <div className={Styles.titulo}>
                                <h3>Portfolio 2</h3>
                            </div>
                            <div className={Styles.descricao}>
                                <p>Este portfólio é uma vitrine interativa dos meus projetos e habilidades em desenvolvimento web, criado utilizando HTML, CSS e JavaScript. O objetivo principal é demonstrar minha capacidade de criar interfaces de usuário elegantes, funcionais e responsivas.</p>
                            </div>
                            <div className={Styles.links}>
                                <a href="https://github.com/lemosdiego/meu-Portfolio.git" target="_blank" rel="noopener noreferrer">
                                    <button>Repositório</button>
                                </a>
                                <a href="https://meu-portfolio-jet-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button>Deploy</button>
                                </a>
                            </div>
                        </div>
                        <div className={Styles.card}>
                            <div className={Styles.imagem}>
                                <img src="/projetos/imc.webp" alt="projeto3" />
                            </div>
                            <div className={Styles.titulo}>
                                <h3>Calculadora IMC</h3>
                            </div>
                            <div className={Styles.descricao}>
                                <p>A Calculadora IMC é uma aplicação web simples que permite aos usuários calcular seu Índice de Massa Corporal IMC com base em sua altura e peso. Utilizando HTML, CSS e JavaScript, a aplicação fornece uma interface amigável onde os usuários podem inserir seus dados, obter o valor do IMC e ver uma classificação sobre seu estado de saúde.</p>
                            </div>
                            <div className={Styles.links}>
                                <a href="https://github.com/lemosdiego/IMC-project.git" target="_blank" rel="noopener noreferrer">
                                    <button>Repositório</button>
                                </a>
                                <a href="https://imc-delta-seven.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button>Deploy</button>
                                </a>
                            </div>
                        </div>
                        <div className={Styles.card}>
                            <div className={Styles.imagem}>
                                <img src="/projetos/previsao.png" alt="projeto8" width={100} height={100} />
                            </div>
                            <div className={Styles.titulo}>
                                <h3>Previsão do tempo</h3>
                            </div>
                            <div className={Styles.descricao}>
                                <p>Esta aplicação de previsão do tempo foi desenvolvida usando HTML, CSS e JavaScript para oferecer informações meteorológicas precisas e atualizadas aos usuários. A aplicação permite que os usuários verifiquem as condições climáticas em tempo real de qualquer cidade ao redor do mundo.</p>
                            </div>
                            <div className={Styles.links}>
                                <a href="https://github.com/lemosdiego/previsao-do-tempo.git" target="_blank" rel="noopener noreferrer">
                                    <button>Repositório</button>
                                </a>
                                <a href="https://previsao-do-tempo-mu.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button>Deploy</button>
                                </a>
                            </div>
                        </div>
                        <div className={Styles.card}>
                            <div className={Styles.imagem}>
                                <img src="/projetos/quizz.svg" alt="projeto5" width={100} height={100} />
                            </div>
                            <div className={Styles.titulo}>
                                <h3>Quizz Angular</h3>
                            </div>
                            <div className={Styles.descricao}>
                                <p>O Quizz com Angular é uma aplicação web divertida e educativa, construída utilizando o framework Angular. Este projeto permite aos usuários participar de quizzes interativos em uma variedade de tópicos, responder perguntas, receber feedback imediato e ver suas pontuações finais.</p>
                            </div>
                            <div className={Styles.links}>
                                <a href="https://github.com/lemosdiego/quizz_angular.git" target="_blank" rel="noopener noreferrer">
                                    <button>Repositório</button>
                                </a>
                                <a href="https://quizz-angular-nine.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button>Deploy</button>
                                </a>
                            </div>
                        </div>
                        <div className={Styles.card}>
                            <div className={Styles.imagem}>
                                <img src="/projetos/tarefas.png" alt="projeto10" width={100} height={100} />
                            </div>
                            <div className={Styles.titulo}>
                                <h3>Lista de tarefas</h3>
                            </div>
                            <div className={Styles.descricao}>
                                <p>A Lista de Tarefas é uma aplicação web simples e funcional que permite aos usuários criar, gerenciar e rastrear suas tarefas diárias. Utilizando HTML, CSS e JavaScript, essa aplicação proporciona uma interface intuitiva para adicionar novas tarefas, marcar tarefas como concluídas e remover tarefas da lista.</p>
                            </div>
                            <div className={Styles.links}>
                                <a href="https://github.com/lemosdiego/Tarefas-Diarias.git" target="_blank" rel="noopener noreferrer">
                                    <button>Repositório</button>
                                </a>
                                <a href="https://tarefas-diarias-omega.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button>Deploy</button>
                                </a>
                            </div>
                        </div>
                        <div className={Styles.card}>
                            <div className={Styles.imagem}>
                                <img src="/projetos/projeto2.png" alt="projeto2" width={100} height={100} />
                            </div>
                            <div className={Styles.titulo}>
                                <h3>Lupulus Maximus</h3>
                            </div>
                            <div className={Styles.descricao}>
                                <p>Este projeto, desenvolvido utilizando Next.js, é o site oficial da Cervejaria Lupulus Maximus. Nossa missão é proporcionar aos visitantes uma experiência envolvente e informativa sobre nossas cervejas artesanais excepcionais.</p>
                            </div>
                            <div className={Styles.links}>
                                <a href="https://github.com/lemosdiego/lupulus-maximus.git" target="_blank" rel="noopener noreferrer">
                                    <button>Repositório</button>
                                </a>
                            </div>
                        </div>
                        <div className={Styles.card}>
                            <div className={Styles.imagem}>
                                <img src="/projetos/projeto3.svg" alt="projeto3" width={100} height={100} />
                            </div>
                            <div className={Styles.titulo}>
                                <h3>Find my beer</h3>
                            </div>
                            <div className={Styles.descricao}>
                                <p>O Find My Beer é uma aplicação web desenvolvida utilizando Next.js, o objetivo do projeto é permitir que os usuários encontrem e explorem diferentes tipos de cervejas. A aplicação também possibilita a busca por cervejas específicas, a visualização de avaliações e a descoberta de cervejarias locais.</p>
                            </div>
                            <div className={Styles.links}>
                                <a href="https://github.com/lemosdiego/find-my-beer.git" target="_blank" rel="noopener noreferrer">
                                    <button>Repositório</button>
                                </a>
                            </div>
                        </div>
                        <div className={Styles.card}>
                            <div className={Styles.imagem}>
                                <img src="/projetos/blog.svg" alt="projeto4" width={100} height={100} />
                            </div>
                            <div className={Styles.titulo}>
                                <h3>Blog Angular</h3>
                            </div>
                            <div className={Styles.descricao}>
                                <p>O Blog de Notícias é uma plataforma web desenvolvida com o framework Angular, projetada para fornecer aos usuários acesso a conteúdos informativos e atualizados. Este blog oferece uma experiência dinâmica e interativa, onde os usuários podem navegar por diferentes categorias de notícias,</p>
                            </div>
                            <div className={Styles.links}>
                                <a href="https://github.com/lemosdiego/blog-project.git" target="_blank" rel="noopener noreferrer">
                                    <button>Repositório</button>
                                </a>
                            </div>
                        </div>
                        <div className={Styles.card}>
                            <div className={Styles.imagem}>
                                <img src="/projetos/projeto5.jpeg" alt="projeto7" width={100} height={100} />
                            </div>
                            <div className={Styles.titulo}>
                                <h3>Portfolio 1</h3>
                            </div>
                            <div className={Styles.descricao}>
                                <p>Este portfólio é uma plataforma moderna e interativa que exibe meus projetos e habilidades em desenvolvimento web, criado com Next.js, um poderoso framework React. O objetivo é mostrar minha capacidade de construir aplicações web rápidas, escaláveis e com excelente performance.</p>
                            </div>
                            <div className={Styles.links}>
                                <a href="https://github.com/lemosdiego/portifolio2.git" target="_blank" rel="noopener noreferrer">
                                    <button>Repositório</button>
                                </a>
                                <a href="https://portifolio2-cyan.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button>Deploy</button>
                                </a>
                            </div>
                        </div>
                        <div className={Styles.card}>
                            <div className={Styles.imagem}>
                                <img src="/projetos/projeto8.jpeg" alt="projeto11" width={100} height={100} />
                            </div>
                            <div className={Styles.titulo}>
                                <h3>Site android</h3>
                            </div>
                            <div className={Styles.descricao}>
                                <p>Este projeto é um site informativo sobre a história do Android, desenvolvido com HTML e CSS. Ele apresenta a origem, evolução e impacto do Android no mercado de dispositivos móveis, com um design simples e responsivo.</p>
                            </div>
                            <div className={Styles.links}>
                                <a href="https://github.com/lemosdiego/projeto-android.git" target="_blank" rel="noopener noreferrer">
                                    <button>Repositório</button>
                                </a>
                                <a href="https://projeto-android-lime.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button>Deploy</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.icon}>
                        <button onClick={moverDireita}>
                            <Image src="/img/direitared.svg" alt="seta direita" width={100} height={100} layout='responsive' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
