import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './Home.css'
import Marquee from "react-fast-marquee";
import Card from './../components/Card';
import Product from './../components/Product';


const Home = () => {
  return <>
    <section className="home-page-1 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <NavLink to='/phones' className="main-banner  position-relative">
              <img src='images/iphone14.jpeg' className='img-fluid rounded-3' alt='main-banner' />
              <div className="main-banner-content position-absolute py-5">
                <h4> ЖАНЫ КОЛЛЕКЦИЯ</h4>
                <h5> IPHONE 14 pro </h5>
                <p> $999.00 же $45.56/айдан.</p>
                <button className='button'> АЗЫР САТЫП АЛ</button>
              </div>
            </NavLink>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <NavLink to='/laptops' className="small-banner  position-relative">
                <img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt='main-banner' />
                <div className="small-banner-content position-absolute">
                  <h4> Эң мыкты сатуу</h4>
                  <h5> Ноутбуктар Макс </h5>
                  <p> $1699.00дан  же <br />$45,56/ай.</p>

                </div>
              </NavLink>
              <NavLink to='/watches' className="small-banner  position-relative">
                <img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt='main-banner' />
                <div className="small-banner-content position-absolute">
                  <h4> 15% арзандатуу</h4>
                  <h5> Smartwatch 7</h5>
                  <p> Эң кооз сааттардын <br />стилдерин жана түстөрүн сатып алыңы </p>

                </div>
              </NavLink>
              <div className="small-banner position-relative">
                <img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt='main-banner' />
                <div className="small-banner-content position-absolute">
                  <h4> Жаңы келген</h4>
                  <h5> IPad Air сатып алыңыз </h5>
                  <p> $599.00дан же <br /> $45,56/айына.</p>

                </div>
              </div>

              <div className="small-banner  position-relative">
                <img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt='main-banner' />
                <div className="small-banner-content position-absolute">
                  <h4> Эркин оюу</h4>
                  <h5> AirPods Max</h5>
                  <p> $599.00дан же  <br /> $45.56/айына.</p>

                </div>
              </div>






            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="home-page-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              <div className='d-flex align-items-center gap-10' >
                <img src='images/service.png' alt='services' />
                <div>
                  <h6>Акысыз жеткирүү</h6>
                  <p className='mb-0'>$5 жогору баада соода кылгандар учун</p>
                </div>
              </div>

              <div className='d-flex align-items-center gap-10' >
                <img src='images/service-02.png' alt='services' />
                <div>
                  <h6>Күнүмдүк сюрприз сунуштары</h6>
                  <p className='mb-0'>25% чейин арзандатуу</p>
                </div>
              </div>

              <div className='d-flex align-items-center gap-10' >
                <img src='images/service-03.png' alt='services' />
                <div>
                  <h6>24/7 кызмат</h6>
                  <p className='mb-0'>Эксперт менен соода кылыңыз</p>
                </div>
              </div>

              <div className='d-flex align-items-center gap-10' >
                <img src='images/service-04.png' alt='services' />
                <div>
                  <h6>Жеткиликтүү баалар</h6>
                  <p className='mb-0'> Заводдун демейки баасын алыңыз</p>
                </div>
              </div>

              <div className='d-flex align-items-center gap-10' >
                <img src='images/service-05.png' alt='services' />
                <div>
                  <h6>Коопсуз төлөмдөр</h6>
                  <p className='mb-0'>100% корголгон төлөм</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
    <section className="marque-page py-5">
      
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <b><h3>Мыкты Бренддер</h3></b>
            <div className="marquee card-wrapper" >
              <Marquee d-flex>
                <div className='mx-4 w-25'>
                  <img src='images/brand-01.png' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-02.png' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-03.png' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-04.png' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-05.png' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-06.png' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-07.png' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-08.png' />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="home-page-22 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className='col-8'>
              <b><h2>Дүкөн. Сиз сүйгөн өнүмдөрдү сатып алуу үчүн мыкты жолу.
              </h2></b>
            </div>
            <div className='col-4'>
            <p className='call'>Эксперт менен соода кылуу</p>
            <p className='call'>Telegram: +9967024040</p>
            <a className='call'href='tel:+996702404040'>
               <img className='callpng' src='./images/service-03.png'/>
              +996702404040</a>
              </div>


          </div>
          <div className="col-12">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active d-flex">
                  <Link to='/' className='link'>
                    <img src="images/2phone.png" class="d-block " alt="..." />
                    <p>Уюлдук телефон</p>
                  </Link>
                  <Link className='link'>
                    <img src="images/4watch.png" class="d-block " alt="..." />
                    <p>кол саат</p>
                  </Link>
                  <Link className='link'>
                    <img src="images/1.png" class="d-block " alt="..." />
                    <p>Компьютер</p>
                  </Link>


                  <Link className='link'>
                    <img src="images/5airpods.png" class="d-block " alt="..." />
                    <p> Наушник</p>
                  </Link>

                  <Link className='link'>
                    <img src="images/3ipad.png" class="d-block " alt="..." />
                    <p>планшет</p>
                  </Link>
                  <Link className='link'>
                    <img src="images/6colon.png" class="d-block " alt="..." />

                    <p>колонка</p>
                  </Link>

                  <Link className='link'>
                    <img src="images/access.png" class="d-block " alt="..." />

                    <p>аксессуарлар</p>
                  </Link>

                </div>
                <div class="carousel-item">

                </div>
                <div class="carousel-item">


                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="card py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3>Тандалган коллекция</h3>
          </div>
          <div className='product'><Product /></div>

        </div>
      </div>
    </section>
    <section className="card-news py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3>БИЗДИН АКЫРКЫ ЖАНЫЛЫКТАР</h3>
          </div>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  </>
}

export default Home
