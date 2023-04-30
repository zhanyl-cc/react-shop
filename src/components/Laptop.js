import React from 'react'
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import './AllCards.css'

const Laptop = () => {
    return (
        <div className='laptop'>
            <div className="xxl">
                <div className="row">
                    {/* <div className="col-12"> */}


                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Модел/Бренд</h3>
                            <div>
                                <ul className="ps-0">
                                    <li>Жарнамалык</li>
                                    <li>Эң популярдуу</li>

                                </ul>
                            </div>
                            <h5 className="sub-title">Availablity</h5>
                            <div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                    />
                                    <label className="form-check-label" htmlFor="">
                                        Apple
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                    />
                                    <label className="form-check-label" htmlFor="">
                                        Samsung
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                    />
                                    <label className="form-check-label" htmlFor="">
                                        Dell
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                    />
                                    <label className="form-check-label" htmlFor="">
                                        Asus
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Баасы</h3>
                            <div className="d-flex align-items-center gap-10">
                                <div className="form-floating">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="From"
                                    />
                                    <label htmlFor="floatingInput">From</label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInput1"
                                        placeholder="To"
                                    />
                                    <label htmlFor="floatingInput1">To</label>
                                </div>
                            </div>
                            <div>



                                <h3 className="sub-title">  Түс</h3>
                                <div>
                                    <ul className="ps-0">
                                        <li>Midnight</li>
                                        <li>Starlight</li>
                                        <li>Silver</li>
                                        <li>Space Gray</li>

                                    </ul>
                                    {/* <Color /> */}
                                </div>
                                <h3 className="sub-title" >Процессор </h3>
                                <div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="color-1"
                                        />
                                        <label className="form-check-label" htmlFor="color-1">
                                            M1 Макс
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="color-2"
                                        />
                                        <label className="form-check-label" htmlFor="color-2">
                                            M1 Pro
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="color-1"
                                        />
                                        <label className="form-check-label" htmlFor="color-1">
                                            M2 Макс
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="color-2"
                                        />
                                        <label className="form-check-label" htmlFor="color-2">
                                            M2 Pro
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="color-1"
                                        />
                                        <label className="form-check-label" htmlFor="color-1">
                                            M1
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="color-2"
                                        />
                                        <label className="form-check-label" htmlFor="color-2">
                                            M2
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="color-1"
                                        />
                                        <label className="form-check-label" htmlFor="color-1">
                                            Intel Core i5
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="color-2"
                                        />
                                        <label className="form-check-label" htmlFor="color-2">
                                            Intel Core i7
                                        </label>
                                    </div>
                                </div>

                                <h3 className="sub-title" >Чыгарылган жылы </h3>
                                <div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="color-1"
                                        />
                                        <label className="form-check-label" htmlFor="color-1">
                                            2023
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="color-2"
                                        />
                                        <label className="form-check-label" htmlFor="color-2">
                                            2022
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="color-1"
                                        />
                                        <label className="form-check-label" htmlFor="color-1">
                                            2021
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="color-2"
                                        />
                                        <label className="form-check-label" htmlFor="color-2">
                                            2020-2016
                                        </label>
                                    </div>




                                </div>
                            </div>
                        </div>

                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Product Tags</h3>
                            <div>
                                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Headphone
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Laptop
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Mobile
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Wire
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-9">
                        <div className='productlap'>
                            <div className='productlap-wrapper'>
                                <div className="col-12 ">
                                    <Link className="productlap-card position-relative">
                                        <div className="wishlist position-absolute">
                                            <Link><img src='images/wish.svg' />
                                            </Link>
                                            <div className="action position-absolute">
                                                <div className="d-flex flex-column gap-15">
                                                    <Link><img src='images/prodcompare.svg' /></Link>
                                                    <Link><img src='images/view.svg' /></Link>
                                                    <Link><img src='images/add-cart.svg' /></Link>

                                                </div>
                                            </div>

                                        </div>
                                        <div className="productlap-image">
                                            <img src='images/mac13-2.jpeg' />
                                            <img src='images/mac13.jpeg' />
                                        </div>
                                        <div className="productlap-details mt-5">
                                            <h2 >Apple MacBook Pro 13" M1 256GB Space Gray (2020) (MYD82)</h2>
                                            <h6 className="brand"> Apple
                                            </h6>
                                            <p> <b>Модел:</b> MacBook Air M2 <br />
                                                <b>Түс:</b>  Space Gray<br />
                                                <b>Камтылган эс:</b>  256 ГБ<br />
                                                <b>RAM(оперюпамять):</b> 8 ГБ<br />
                                                <b>Процессор:</b>M1<br />
                                                <b>Диагоналдык:</b> 13,3"<br />
                                                <b>таңгак менен продуктунун салмагы:</b> 0,10 кг<br />

                                                <b>Толук комплекте:</b>MacBook, документация, заряддагыч, кабель, куту
                                            </p>

                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value='3'
                                                edit='false'
                                                activeColor="#ffd700"
                                            />
                                            <div className='btn'>
                                                <h3>$399</h3>
                                                <button className='button'> BUY NOW</button></div>
                                        </div>

                                    </Link></div>

                                <div className="col-12">
                                    <Link className="productlap-card position-relative">
                                        <div className="wishlist position-absolute">
                                            <Link><img src='images/wish.svg' />
                                            </Link>

                                        </div>
                                        <div className="productlap-image">
                                            <img src='images/mac162.jpg' />
                                            <img src='images/mac162-2.jpg' />
                                        </div>
                                        <div className="productlap-details mt-5">
                                            <h2>Apple MacBook Pro 16" M1 Pro 512GB Silver 2021 (MK1E3)</h2>
                                            <h6 className="brand"> (128GB, Deep Purple)
                                            </h6>
                                            <p> <b>Модел:</b> MacBook AirPro M1 <br />
                                                <b>Түс:</b>  Space Gray<br />
                                                <b>Камтылган эс:</b>  512 Гб<br />
                                                <b>RAM(оперюпамять):</b> 16 ГБ<br />
                                                <b>Процессор:</b>M1 Pro<br />
                                                <b>Диагоналдык:</b> 16<br />
                                                <b>Салмагы:</b> 2.00 кг<br />
                                                <b>Кошумча тандоолор:</b> Touch ID
                                                <br />
                                                <b>Толук комплекте:</b>MacBook, документация, заряддагыч, кабель, куту
                                            </p>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value='3'
                                                edit='false'
                                                activeColor="#ffd700"
                                            />
                                            <p>From $249</p>
                                            <button className='button'> BUY NOW</button>
                                        </div>
                                        <div className="action position-absolute">
                                            <div className="d-flex flex-column gap-15">
                                                <Link><img src='images/prodcompare.svg' /></Link>
                                                <Link><img src='images/view.svg' /></Link>
                                                <Link><img src='images/add-cart.svg' /></Link>

                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="col-12">
                                    <Link className="productlap-card position-relative">
                                        <div className="wishlist position-absolute">
                                            <Link><img src='images/wish.svg' />
                                            </Link>

                                        </div>
                                        <div className="productlap-image">
                                            <img src='images/mac16-2.jpg' />
                                            <img src='images/mac16.jpg' />
                                        </div>
                                        <div className="productlap-details mt-5">
                                            <h2>Apple MacBook Pro 16" M2 Pro 1TB Space Gray 2023 (MNW93)</h2>
                                            <h6 className="brand"> Apple
                                            </h6>
                                            <p> <b>Модел:</b> MacBook Pro 16" M2 Max<br />
                                                <b>Түс:</b>  Space Gray<br />
                                                <b>Камтылган эс:</b>  1TB<br />
                                                <b>RAM(опер.память):</b> 32Gb<br />
                                                <b>Процессор:</b>M2 Max<br />
                                                <b>Дисплей:</b> Liquid Retina XDR<br />
                                                <b>Диоганаль:</b> 16"<br />
                                                <b>Экран кеңейтүүсү:</b> 3456х2234<br />
                                                <b>Туташтыргычтар:</b> 1 x HDMI, 1 x SDXC Card, 3 x Thunderbolt 4, AUX 3.5mm, MagSafe 3
                                                <br />
                                                <b>Толук комплекте:</b>MacBook, документация, заряддагыч, кабель, куту
                                            </p>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value='3'
                                                edit='false'
                                                activeColor="#ffd700"
                                            />
                                            <p>$100.00</p>
                                            <button className='button'> BUY NOW</button>
                                        </div>
                                        <div className="action position-absolute">
                                            <div className="d-flex flex-column gap-15">
                                                <Link><img src='images/prodcompare.svg' /></Link>
                                                <Link><img src='images/view.svg' /></Link>
                                                <Link><img src='images/add-cart.svg' /></Link>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12">
                                    <Link className="productlap-card position-relative">
                                        <div className="wishlist position-absolute">
                                            <Link><img src='images/wish.svg' />
                                            </Link>

                                        </div>
                                        <div className="productlap-image">
                                            <img className='ip-13' src='images/mac136-2.jpg' />
                                            <img src='images/mac136.jpg' />
                                        </div>
                                        <div className="productlap-details mt-5">

                                            <h2> MacBook Air 13.6" M2 512GB Space Gray 2022</h2>
                                            <h6 className="brand"> Apple
                                            </h6>
                                            <p> <b>Модел:</b> MacBook Air M2 <br />
                                                <b>Түс:</b>  Space Gray<br />
                                                <b>Камтылган эс:</b>  512 Гб<br />
                                                <b>RAM(оперюпамять):</b> 8 ГБ<br />
                                                <b>Процессор:</b>M2<br />
                                                <b>Дисплей:</b> Суюк торчо<br />
                                                <b>Экран кеңейтүүсү:</b> 2560×1664<br />
                                                <b>Туташтыргычтар:</b> 2 x USB-C, AUX 3,5 мм, MagSafe 3
                                                <br />
                                                <b>Толук комплекте:</b>MacBook, документация, заряддагыч, кабель, куту
                                            </p>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value='3'
                                                edit='false'
                                                activeColor="#ffd700"
                                            />
                                            <p>58 549 грн</p>
                                            <button className='button'> BUY NOW</button>
                                        </div>
                                        <div className="action position-absolute">
                                            <div className="d-flex flex-column gap-15">
                                                <Link><img src='images/prodcompare.svg' /></Link>
                                                <Link><img src='images/view.svg' /></Link>
                                                <Link><img src='images/add-cart.svg' /></Link>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>



                        </div>
                        <div className='productlap'>
                            <div className='productlap-wrapper'>
                                <div className="col-12 ">
                                    <Link className="productlap-card position-relative">
                                        <div className="wishlist position-absolute">
                                            <Link><img src='images/wish.svg' />
                                            </Link>

                                        </div>
                                        <div className="productlap-image">
                                            <img src='images/mac13-2.jpeg' />
                                            <img src='images/mac13.jpeg' />
                                        </div>
                                        <div className="productlap-details mt-5">
                                            <h2 >Galaxy Book3 Ultra</h2>
                                            <h6 className="brand"> Samsung
                                            </h6>
                                            <p> <b>Иштетүү системасы:</b> Windows 11 Home <br />
                                                <b>Процессор:</b>  13-муундагы Intel ®  Core ™  i7 же i9 процессору<br />
                                                <b>Экран:</b>  16 дюймдук AMOLED 3K дисплей<br />
                                                <b>Порттар:</b> Thunderbolt, USB-A, HDMI жана MicroSD порттору<br />
                                                <b>Сактагыч:</b>1ТБ камтылган сактагыч, 2ТБ чейин кеңейтилүүчү сактагыч<br />
                                                <b>Негизги өзгөчөлүктөрү:</b> NVIDIA ®  GeForce ®  RTX графикалык картасы<br />

                                            </p>

                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value='3'
                                                edit='false'
                                                activeColor="#ffd700"
                                            />
                                            <p>$2,399.99</p>
                                            <button className='button'> BUY NOW</button>
                                        </div>
                                        <div className="action position-absolute">
                                            <div className="d-flex flex-column gap-15">
                                                <Link><img src='images/prodcompare.svg' /></Link>
                                                <Link><img src='images/view.svg' /></Link>
                                                <Link><img src='images/add-cart.svg' /></Link>

                                            </div>
                                        </div>
                                    </Link></div>

                                <div className="col-12">
                                    <Link className="productlap-card position-relative">
                                        <div className="wishlist position-absolute">
                                            <Link><img src='images/wish.svg' />
                                            </Link>

                                        </div>
                                        <div className="productlap-image">
                                            <img src='images/mac162.jpg' />
                                            <img src='images/mac162-2.jpg' />
                                        </div>
                                        <div className="productlap-details mt-5">
                                            <h2>Galaxy Book3 Pro 360</h2>
                                            <h6 className="brand"> Samsung
                                            </h6>
                                            <p> <b>Иштетүү системасы:</b> Windows 11 Home <br />
                                                <b>Процессор:</b>  13-муундагы Intel ®  Core ™  i7 процессору<br />
                                                <b>Экран:</b>  16 дюймдук AMOLED 3K дисплей<br />
                                                <b>Порттар:</b> Thunderbolt, USB-A, HDMI жана MicroSD порттору<br />
                                                <b>Сактагыч:</b>1ТБ камтылган сактагыч, 2ТБ чейин кеңейтилүүчү сактагыч<br />
                                                <b>Негизги өзгөчөлүктөрү:</b> S Pen камтылган<br />

                                            </p>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value='3'
                                                edit='false'
                                                activeColor="#ffd700"
                                            />
                                            <p> $1,899.99</p>
                                            <button className='button'> BUY NOW</button>
                                        </div>
                                        <div className="action position-absolute">
                                            <div className="d-flex flex-column gap-15">
                                                <Link><img src='images/prodcompare.svg' /></Link>
                                                <Link><img src='images/view.svg' /></Link>
                                                <Link><img src='images/add-cart.svg' /></Link>

                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="col-12">
                                    <Link className="productlap-card position-relative">
                                        <div className="wishlist position-absolute">
                                            <Link><img src='images/wish.svg' />
                                            </Link>

                                        </div>
                                        <div className="productlap-image">
                                            <img src='images/mac16-2.jpg' />
                                            <img src='images/mac16.jpg' />
                                        </div>
                                        <div className="productlap-details mt-5">
                                            <h2>Galaxy
                                                Book3 Pro</h2>
                                            <h6 className="brand"> Samsung
                                            </h6>
                                            <p> <b>Иштетүү системасы:</b> Windows 11 Home <br />
                                                <b>Процессор:</b>  13-муундагы Intel ®  Core ™  i7 процессору<br />
                                                <b>Экран:</b>  14" же 16" AMOLED 3K дисплей<br />
                                                <b>Порттар:</b> Thunderbolt, USB-A, HDMI жана MicroSD порттору<br />
                                                <b>Сактагыч:</b>512 ГБ же 1 ТБ камтылган сактагыч, 2 ТБ чейин кеңейтилүүчү сактагыч <br />
                                                <b>Негизги өзгөчөлүктөрү:</b> Күчтүү, портативдик дизайн<br />

                                            </p>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value='3'
                                                edit='false'
                                                activeColor="#ffd700"
                                            />
                                            <p>$1,449.99</p>
                                            <button className='button'> BUY NOW</button>
                                        </div>
                                        <div className="action position-absolute">
                                            <div className="d-flex flex-column gap-15">
                                                <Link><img src='images/prodcompare.svg' /></Link>
                                                <Link><img src='images/view.svg' /></Link>
                                                <Link><img src='images/add-cart.svg' /></Link>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12">
                                    <Link className="productlap-card position-relative">
                                        <div className="wishlist position-absolute">
                                            <Link><img src='images/wish.svg' />
                                            </Link>

                                        </div>
                                        <div className="productlap-image">
                                            <img className='ip-13' src='images/mac136-2.jpg' />
                                            <img src='images/mac136.jpg' />
                                        </div>
                                        <div className="productlap-details mt-5">

                                            <h2>Galaxy Book3 360</h2>
                                            <h6 className="brand"> Samsung
                                            </h6>
                                            <p> <b>Иштетүү системасы:</b> Windows 11 Home <br />
                                                <b>Процессор:</b>  13-муундагы Intel ®  Core ™  i7 процессору<br />
                                                <b>Экран:</b>  13,3" же 15,6" FHD AMOLED дисплей<br />
                                                <b>Порттар:</b> Thunderbolt, USB-C, USB-A, HDMI жана MicroSD порттору<br />
                                                <b>Сактагыч:</b>512 ГБ камтылган сактагыч, 2 ТБ чейин кеңейтилүүчү сактагыч <br />
                                                <b>Негизги өзгөчөлүктөрү:</b>S Pen шайкеш келет<br />

                                            </p>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value='3'
                                                edit='false'
                                                activeColor="#ffd700"
                                            />
                                            <p>$1,299.99</p>
                                            <button className='button'> BUY NOW</button>
                                        </div>
                                        <div className="action position-absolute">
                                            <div className="d-flex flex-column gap-15">
                                                <Link><img src='images/prodcompare.svg' /></Link>
                                                <Link><img src='images/view.svg' /></Link>
                                                <Link><img src='images/add-cart.svg' /></Link>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>



                        </div>

                    </div>

                    {/* </div> */}

                    <hr/>
                        <section className="home-page-2 py-5">
                            <div className="container-xxl">
                                <div className="row">
                                    <div className="col-12">
                                        <h3 className='align-items-center'>ишеним менен сатып алуу</h3>
                                        <div className="servies d-flex align-items-center justify-content-between">

                                            <div className='d-flex align-items-center gap-10' >
                                                <img src='images/service.png' alt='services' />
                                                <div>
                                                    <h6>Акысыз жеткирүү</h6>
                                                    <p className='mb-0'>Саат 20:00гө чейин буйрутма берип, эртеси алыңыз. 24/7 көз салуу.</p>
                                                </div>
                                            </div>
                                            <div className='d-flex align-items-center gap-10' >
                                                <img src='images/service-05.png' alt='services' />
                                                <div>
                                                    <h6>Каржы жеткиликтүү</h6>
                                                    <p className='mb-0'>6 айдан 48 айга чейин өз шарттарыңыз боюнча төлөңүз.</p>
                                                </div>
                                            </div>

                                            <div className='d-flex align-items-center gap-10' >
                                                <img src='images/service-02.png' alt='services' />
                                                <div>
                                                    <h6>Акысыз кайтаруу</h6>
                                                    <p className='mb-0'>Аны сүйбөйсүзбү? Аны 28 күндүн ичинде бекер кайтарып бериңиз.</p>
                                                </div>
                                            </div>

                                            <div className='d-flex align-items-center gap-10' >
                                                <img src='images/service-04.png' alt='services' />
                                                <div>
                                                    <h6>Соода</h6>
                                                    <p className='mb-0'>Заматта арзандатуу үчүн учурдагы телефонуңузду соодалаңыз.</p>
                                                </div>
                                            </div>




                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                </div>
            </div>
        </div>
    )
}

export default Laptop
