import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <footer className='py-34'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src='images/newsletter.png' alt='newsletter' />
                <h2 className=' text-white mb-0'>NewsLetter үчүн катталуу</h2>
              </div>

            </div>
            <div className="col-7">
              <div className="input-group">
                <input type="text"
                  class="form-control py-1"
                  placeholder="Сиздин электрондук почта дарегиңиз"
                  aria-label="Сиздин электрондук почта дарегиңиз"
                  aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">
                  Жазылуу
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='mb-4 text-white'>Биз менен байланыш</h4>
              <div>
                <address className='text-white fs-6'>Дарегибиз:,<br />
                  Тыналиев коч.10а <br />
                  Пинкод:131262
                </address>
                <a href="tel:+996702404040" className="mt-3 d-block mb-1 text-white">+996702404040</a>
                <a href="mailto:anarkulovajanyl2000@gmail.com" className="mt-2 d-block mb-4 text-white">bishstore@gmail.com</a>
                <div className="socialicons  d-flex align-items-center gap-30">
                  <a className='text-white' href=''><BsInstagram className=' fs-4' /></a>
                  <a href=''><BsYoutube className='text-white fs-4' /></a>
                  <a href=''><BsLinkedin className='text-white fs-4' /></a>
                  <a href=''><BsGithub className='text-white fs-4' /></a>
                </div>
              </div>
            </div>
            <div className="col-3"><h4 className='mb-4 text-white'>Маалымат</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Купуялык саясаты</Link>
                <Link className='text-white py-2 mb-1'>Төлөмдү кайтаруу</Link>
                <Link className='text-white py-2 mb-1'>Жеткирүү саясаты</Link>
                <Link className='text-white py-2 mb-1'>Шарттар жана жоболор </Link>
                <Link className='text-white py-2 mb-1'>Блогдор </Link>
              </div>
            </div>
            <div className="col-3"><h4 className='mb-0 text-white'>Аккаунт</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Биз жөнүндө</Link>
                <Link className='text-white py-2 mb-1'>Көп берилүүчү суроолор</Link>
                <Link className='text-white py-2 mb-1'>Байланыш</Link>

              </div>
            </div>
            <div className="col-2"><h4 className='mb-4 text-white'>Ыкчам шилтемелер</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Ноутбук</Link>
                <Link className='text-white py-2 mb-1'>Наушник</Link>
                <Link className='text-white py-2 mb-1'>Планшеттер</Link>
                <Link className='text-white py-2 mb-1'>Саат</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className="row">
            <div className="col-12">
              <p className='text-center mb-0 text-white'> &copy; {new Date().getFullYear()}; Иштеп чыгуучулар бурчу менен иштейт</p>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer
