  import React from 'react'
  import './assets/css/main.css'
  import './assets/css/noscript.css'
  import Nav from './Nav'
  

  export default function Elements(props) {
  return (
  <div>
   
    <div id='page-wrapper'>
      {/* Header */}
        <Nav />
      {/* Main */}
      <article id='main'>
          <section>
            <div className='box alt'>
              <div className='row gtr-50 gtr-uniform'>
                <div className='col-4'><span className='image fit'><img src='./images/pic01.jpg' alt='some shit about the thing shown' /></span></div>
                <div className='col-4'><span className='image fit'><img src='./images/pic01.jpg alt='' /></span></div>
                <div className='col-4'><span className='image fit'><img src='./images/pic03.jpg' alt='' /></span></div>
                <div className='col-4'><span className='image fit'><img src='./images/pic02.jpg' alt='' /></span></div>
                <div className='col-4'><span className='image fit'><img src='./images/pic03.jpg' alt='' /></span></div>
                <div className='col-4'><span className='image fit'><img src='./images/pic01.jpg' alt='' /></span></div>
                <div className='col-4'><span className='image fit'><img src='./images/pic02.jpg' alt='' /></span></div>
                <div className='col-4'><span className='image fit'><img src='./images/pic03.jpg' alt='' /></span></div>
                <div className='col-4'><span className='image fit'><img src='./images/pic01.jpg' alt='' /></span></div>
              
              </div>
            </div>
          </section>
        </article>
      {/* Footer */}
      <footer id='footer''>
        <ul className='icons'>
          <li><a href='#' className='icon brands fa-twitter'><span className='label'>Twitter</span></a></li>
          <li><a href='#' className='icon brands fa-facebook-f'><span className='label'>Facebook</span></a></li>
          <li><a href='#' className='icon brands fa-instagram'><span className='label'>Instagram</span></a></li>
          <li><a href='#' className='icon brands fa-dribbble'><span className='label'>Dribbble</span></a></li>
          <li><a href='#' className='icon solid fa-envelope'><span className='label'>Email</span></a></li>
        </ul>
        <ul className='copyright'>
          <li>© Untitled</li><li>Design: <a href='http://html5up.net'>HTML5 UP</a></li>
        </ul>
      </footer>
      {/* Scripts */}
    </div>
   
  </div>
      )}