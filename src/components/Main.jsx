import React from "react";
import './styles/Main.css'
import logoPhoto from './images/logo.png'
import lesha from './images/lesha.png'
import instaLogo from './images/inst.svg'
import tgLogo from './images/tg.svg'
import { useState, useEffect } from "react";

function Header() {
    return(
        <header className="header">
            <div className="logo">
                <img src={logoPhoto} alt="" />
                <h2>Алексей</h2>
            </div>

            <div className="navbar">
                <a href="#connection">Услуги</a>
                <a href="#myworks">Работы</a>
                <a href="#second">Почему я?</a>
                <a href="#second">Про меня</a>
            </div>
        </header>
    )
}

function Main() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 600);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Очистка обработчика события при размонтировании компонента
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return(
        <div className="main">
            <Header />

            <div className="container">
                <div className="offer">
                    <h1>Приветствую на своем сайте-портфолио!</h1>
                    <p>Меня зовут Алексей, и я здесь, чтобы предложить вам не просто услуги, а целые решения для ваших задач. Мой подход уникален, так же, как и результаты, которые вы получите, выбрав меня.</p>
                    <div className="buttons">
                        <a href="#second">Услуги</a>
                        <img src={instaLogo} alt="" />
                        <img src={tgLogo} alt="" />
                    </div>
                </div>

                { !isMobile &&
                <div className="imgbox">
                    <img src={lesha} alt="" />
                </div>
                }
            </div>
        </div>
    )
}

export default Main;