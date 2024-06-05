import React from "react"
import './styles/Footer.css'
import leshaLogo from './images/logo.png'
import instaLogo from './images/inst.svg'
import tgLogo from './images/tg.svg'

function Footer() {
    return(
        <footer className="footer">
            <div className="first-div"></div>

            <div className="main-div">
                <div className="footer-logo">
                    <img src={leshaLogo} alt="" />
                    <h1>Алексей</h1>
                </div>

                <p>Благодарю за то что ты зашел на мой сайт-портфолио! Отдельное спасибо моему другу Арману за помощь в верстке. Если у вас есть вопросы, пишите в обратную связь.</p>

                <div className="contacts">
                    <h2>Мои Контакты</h2>
                    <div className="contacts-logo">
                        <a href="https://t.me/yugay1337"><img src={instaLogo} alt="" /></a>
                        <a href="https://www.instagram.com/yugay1337_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><img src={tgLogo} alt="" /></a>
                    </div>
                </div>
            </div>

            <div className="third-div">

            </div>
        </footer>
    )
}

export default Footer;