import React from 'react';

import './Footer.css';

function Footer() {

    return (
        <section className="footer">
            <hr className="footer-seperator" />
            <section className="footer-social-media">
                <a href="/" target='_self' rel="noopener noreferrer">Разрабатывает уникальные программные решения.</a>
            </section>
            <section className="footer-info">
                <section className="footer-info-left">
                    <section className="footer-info__name">
                        Simbirsoft
                    </section>
                    <section className="footer-info__returns">
                        РЕШЕНИЯ
                        <br />
                        УСЛУГИ
                    </section>
                </section>
                <section className="footer-info-center">
                    <section className="footer-info__email">
                        ТЕХНОЛОГИИ
                    </section>
                    <section className="footer-info__terms">
                        ПОРТФОЛИО
                        <br />
                        О НАС
                    </section>
                </section>
                <section className="footer-info-right">
                    <section className="footer-info__number">
                        8-800-200-9924
                    </section>
                    <section className="footer-info__contact">
                        КОНТАКТЫ
                        <br />
                        REQUEST@SIMBIRSOFT.COM
                    </section>
                </section>
            </section>
            <hr className="footer-seperator" />
        </section>
    )

}

export default Footer;