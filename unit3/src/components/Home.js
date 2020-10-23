import React, { useState, useEffect } from 'react'

// import './assets/css/noscript.css'
// import './assets/css/main.css'

import Nav from './Nav'
import Generic from './Generic'

export default function Home(props) {

    return(
        <div>
        <Nav />
  <section id="banner">

      <div className="inner">
          <h2>Use My Tech Stuff</h2>
            <>
                <p>
                Tired of paying ridiculous fees for camera and other equipment<br />
                rentals? Bypass the middleman and rent from a real person!
                </p>
                <ul className="actions special">
                <li><a href="#" className="button primary">Explore Items</a></li>
                </ul>
            </>
            <a href="#one" className="more scrolly">Learn More</a>
        </div>
    </section>
    
            {/* One */}
    <section id="one" className="wrapper style1 special">
        <div className="inner">
            <header className="major">
                <h2>
                    Arcu aliquet vel lobortis ata nisl<br />
                    eget augue amet aliquet nisl cep donec
                </h2>
                <p>
                    Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
                    eleifend<br />
                    fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
                    ullamcorper.
                </p>
            </header>
                <ul className="icons major">
                    <li>
                        <span className="icon fa-gem major style1"><span className="label">Lorem</span></span>
                    </li>
                    <li>
                        <span className="icon fa-heart major style2"><span className="label">Ipsum</span></span>
                    </li>
                    <li>
                        <span className="icon solid fa-code major style3"><span className="label">Dolor</span></span>
                    </li>
                    </ul>
        </div>
    </section>
            {/* Two */}
    <section id="two" className="wrapper alt style2">
            <section className="spotlight">
                <div className="image"><img src="images/pic01.jpg" alt /></div>
                <div className="content">
                <h2>
                    Magna primis lobortis<br />
                    sed ullamcorper
                </h2>
                <p>
                    Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
                    imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
                </p>
                </div>
            </section>
            <section className="spotlight">
                <div className="image"><img src="../stylesimages/pic02.jpg" alt /></div>
                <div className="content">
                <h2>
                    Tortor dolore feugiat<br />
                    elementum magna
                </h2>
                <p>
                    Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
                    imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
                </p>
              </div>
            </section>
            <section className="spotlight">
                <div className="image"><img src="../styles/images/pic03.jpg" alt /></div>
                <div className="content">
                <h2>
                    Augue eleifend aliquet<br />
                    sed condimentum
                </h2>
                <p>
                    Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
                    imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
                </p>
                </div>
            </section>
            {/* Three */}
            <section id="three" className="wrapper style3 special">
            <div className="inner">
                <header className="major">
                <h2>Accumsan mus tortor nunc aliquet</h2>
                <p>
                    Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
                    eleifend<br />
                    fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
                    ullamcorper.
                </p>
                </header>
                <ul className="features">
                <li className="icon fa-paper-plane">
                    <h3>Arcu accumsan</h3>
                    <p>
                    Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                    tincidunt nullam amet leo Aenean ligula consequat consequat.
                    </p>
                </li>
                <li className="icon solid fa-laptop">
                    <h3>Ac Augue Eget</h3>
                    <p>
                    Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                    tincidunt nullam amet leo Aenean ligula consequat consequat.
                    </p>
                </li>
                <li className="icon solid fa-code">
                    <h3>Mus Scelerisque</h3>
                    <p>
                    Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                    tincidunt nullam amet leo Aenean ligula consequat consequat.
                    </p>
                </li>
                <li className="icon solid fa-headphones-alt">
                    <h3>Mauris Imperdiet</h3>
                    <p>
                    Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                    tincidunt nullam amet leo Aenean ligula consequat consequat.
                    </p>
                </li>
                <li className="icon fa-heart">
                    <h3>Aenean Primis</h3>
                    <p>
                    Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                    tincidunt nullam amet leo Aenean ligula consequat consequat.
                    </p>
                </li>
                <li className="icon fa-flag">
                    <h3>Tortor Ut</h3>
                    <p>
                    Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
                    tincidunt nullam amet leo Aenean ligula consequat consequat.
                    </p>
                </li>
                </ul>
            </div>
            </section>
            {/* CTA */}
            <section id="cta" className="wrapper style4">
            <div className="inner">
            <header>
                <h2>Arcue ut vel commodo</h2>
                <p>
                    Aliquam ut ex ut augue consectetur interdum endrerit imperdiet
                    amet eleifend fringilla.
                </p>
            </header>
                <ul className="actions stacked">
                    <li><a href="#" className="button fit primary">Activate</a></li>
                    <li><a href="#" className="button fit">Learn More</a></li>
                </ul>
            </div>
            </section>
            {/* Footer */}
            <footer id="footer">
            <ul className="icons">
                <li>
                    <a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a>
                </li>
                <li>
                    <a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a>
                </li>
                <li>
                <a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a>
                </li>
                <li>
                <a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a>
                </li>
                <li>
                <a href="#" className="icon solid fa-envelope"><span className="label">Email</span></a>
                </li>
            </ul>
            <ul className="copyright">
                <li>© Untitled</li>
                <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
            </footer>
        </section>
    </div>
    )
}
