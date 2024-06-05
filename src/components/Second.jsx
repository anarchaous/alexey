import React from "react";
import './styles/Second.css'
import firstLaptop from './images/first-laptop.svg'
import secondLaptop from './images/second-laptop.svg'
import thirdLaptop from './images/third-laptop.svg'
import iphone from './images/iphone.svg'
import leshaLogo from './images/logo.png'
import instaLogo from './images/inst.svg'
import tgLogo from './images/tg.svg'
import leshik from './images/lesha.png'
import { useState, useEffect } from "react";

function Cards() {
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
        <div className="cards">
            {isMobile && <img className="leshik" src={leshik} />}
             <div className="aboutme">
                    <h1>Про меня</h1>
                    <hr />
                    <p>Я – UI/UX дизайнер с острым чувством стиля и функциональности. Мое искусство – создавать макеты сайтов, которые не только красивы, но и интуитивно понятны. Я верю в дизайн, который служит людям, делая их цифровой опыт легким и приятным.</p>
                </div>

                <div className="myproduct">
                    <h1>Мои услуги включают</h1>
                    <hr />
                    <p><span>• Дизайн сайтов :</span> Создаю визуально привлекательные и функционально продуманные макеты, которые гарантируют удобство использования и позитивный пользовательский опыт.</p>
                    <p><span>• Социальные медиа:</span> Разрабатываю захватывающие посты для Instagram, которые выделяются и привлекают внимание вашей аудитории.</p>
                    <p><span>• Логотипы и брендинг:</span> Помогаю брендам выражать их сущность через меморабельные логотипы и визуальную идентичность.</p>
                </div>

                <div className="whyme">
                    <h1>Почему я?</h1>
                    <hr />
                    <p><span>•Творческий подход:</span> Каждый проект для меня – это возможность творчества и инноваций.</p>
                    <p><span>•Внимание к деталям:</span> Я обращаю внимание на каждую деталь, чтобы мой дизайн был не только красивым, но и функциональным.</p>
                    <p><span>•Понимание целей клиента:</span> Я работаю в тесном сотрудничестве с клиентами, чтобы понять их потребности и цели, обеспечивая максимальную эффективность каждого дизайна.</p>
                </div>
        </div>
    )
}

function Laptops() {
    return(
        <div className="myworks" id="myworks">
                <div className="firstLaptop">
                    <img src={firstLaptop} alt="" />
                </div>

                <div className="secondLaptop">
                    <img src={secondLaptop} alt="" />
                </div>

                <div className="thirdLaptop">
                    <img src={thirdLaptop} alt="" />
                </div>
        </div>
    )
}

function Second() {
    return(
        <div className="second" id="second">
            <Cards />
            <Laptops />

            <div className="connection" id="connection">
                <div className="first-section">
                    <h1>Обратная связь</h1>
                    <hr />
                    <div>
                        <input type="text" className="name" placeholder="Имя"/>
                        <input type="text" className="username" placeholder="Имя пользователя"/>
                    </div>
                    <input type="text" className="order" placeholder="Ваша заявка"/>
                    <a href="https://t.me/yugay1337">Отправить</a>
                </div>

                <div className="iphone">
                    <img src={iphone} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Second;