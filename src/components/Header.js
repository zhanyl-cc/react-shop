import React from 'react'
import '../App.css'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6"><p className='text-white mb-0'>Онлайн Соода</p></div>
            <div className="col-6">
              <p className='text-end text-white mb-0'>
                Ишеним телефону:             
                 <a className='text-white'
                  href='tel:+996700022002'>+996700022002</a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className='text-white'>MiLCase</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input type="text"
                  class="form-control py-2"
                  placeholder="Бул жерден продукт издөө ..."
                  aria-label="Бул жерден продукт издөө ..."
                  aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className='fs-6
                  '/>
                </span>
              </div>

            </div>
            <div className="col-5">
              <div className="header-upper-links-d-flex align-items-center d-flex justify-content-between">
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src='images/compare.svg' />
                    <p className='mb-0 text-white'>
                      Салыштыруу
                      <br />Продукциялар 
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src='images/wishlist.svg' />
                    <p className='mb-0 text-white'>
                    Сүйүктүү<br />каалоолор тизмеси
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src='images/user.svg' alt='user' />
                    <p className='mb-0 text-white'>
                    Кирүү<br /> Менин аккаунтум
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src='images/cart.svg' alt='cart' />
                    <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='mb-0 text-white'>$500</p>
                    </div>
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </div>

      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 ">
              <div className="menu-bootom  align-items-center gap-30 d-flex">


                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src='images/menu.svg' alt='' /> <span className='me-5 d-inline-block '> Дүкөн категориялары</span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item text-white" to=''>Apple</Link></li>
                    <li><Link className="dropdown-item text-white" to=''>Another action</Link></li>
                    <li><Link className="dropdown-item text-white" to='' >Something else here</Link></li>
                  </ul>
                </div>

                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to='/'>Үй</NavLink>
                    <NavLink to='/store'>Биздин дүкөн</NavLink>
                    <NavLink to='/blogs'>Блогдор</NavLink>
                    <NavLink to='/contact'>Байланыш</NavLink>
                  </div>
                </div>

              </div>
              {/* close */}
            </div>
          </div>
        </div>

      </header>

    </>
  )
}

export default Header;
