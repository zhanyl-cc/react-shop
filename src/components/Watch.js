import React from 'react'
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";


const Watch = () => {
    return (
        <div className='watch'>
            <div className="xxl">
                <div className="row">
                    <div className="c">
                        <div className="img">
                            <img src='images/galaxy.jpg' />
                        </div>

                        <div className="col-12">
                            <div className='product1'>
                                <div className='product-wrapper'>
                                    <div className="col-3 ">
                                        <Link className="product-card position-relative">
                                            <div className="wishlist position-absolute">
                                                <Link><img src='images/wish.svg' />
                                                </Link>

                                            </div>
                                            <div className="product-image">
                                                <img src='images/aw.jpg' />
                                                <img src='images/aw-2.jpg' />
                                            </div>
                                            <div className="product-details mt-5">
                                                <h2>Apple Watch Series 8</h2>
                                                <h6 className="brand"> (128GB, Deep Purple)
                                                </h6>
                                                <p> <b>Экран:  </b>1,9 дюйм<br />
                                                    <b>Өлчөмдөрү: </b>  41 жана 45 мм;<br />
                                                    <b>Процессор:</b>  S8;<br />
                                                    <b>Эстутум сыйымдуулугу: </b> 32 ГБ<br />
                                                    <b>Батарея: </b> 18 саатка чейин иштөө<br />
                                                    <b>Операционная система:</b> watchOS 9;</p>


                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value='3'
                                                    edit='false'
                                                    activeColor="#ffd700"
                                                />
                                                <p>$399</p>
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

                                    <div className="col-3">
                                        <Link className="product-card position-relative">
                                            <div className="wishlist position-absolute">
                                                <Link><img src='images/wish.svg' />
                                                </Link>

                                            </div>
                                            <div className="product-image">
                                                <img src='images/ase.jpg' />
                                                <img src='images/ase-2.jpg' />
                                            </div>
                                            <div className="product-details mt-5">
                                                <h2>Apple Watch SE</h2>
                                                <h6 className="brand"> (128GB, Deep Purple)
                                                </h6>
                                                <p> <b>Display: </b>6.7 inches (17.00 cm) OLED Display <br />
                                                    <b>Memory:</b>  128GB ROM<br />
                                                    <b>Processor:</b>  A16 Bionic Chip, Hexa Core<br />
                                                    <b>Camera:</b> 48 MP + 12 MP + 12 MP Triple Rear & 12 MP Front Camera<br />
                                                    <b>Battery:</b> Qi Wireless Charging Up to 7.5W<br />
                                                    <b>Security (Lock):</b> Facial Lock</p>
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

                                    <div className="col-3">
                                        <Link className="product-card position-relative">
                                            <div className="wishlist position-absolute">
                                                <Link><img src='images/wish.svg' />
                                                </Link>

                                            </div>
                                            <div className="product-image">
                                                <img src='images/aul.jpg' />
                                                <img src='images/aul-2.png' />
                                            </div>
                                            <div className="product-details mt-5">
                                                <h2>Apple Watch Ultra</h2>
                                                <h6 className="brand"> (128GB, Deep Purple)
                                                </h6>
                                                <p> <b>Дисплей:</b> 6,7 дюйм (17,00 см) OLED дисплей <br />
                                                    <b>Эстутум:</b>  128GB ROM<br />
                                                    <b>Процессор:</b>  A16 Bionic Chip, Hexa Core<br />
                                                    <b>Камера:</b> 48 МП + 12 МП + 12 МП үчтүк арткы жана 12 МП алдыңкы камера<br />
                                                    <b>Батарея:</b> Qi зымсыз кубаттоо 7,5 Вт чейин<br />
                                                    <b>Коопсуздук (кулпу):</b> Facial Lock</p>
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
                                    <div className="col-3">
                                        <Link className="product-card position-relative">
                                            <div className="wishlist position-absolute">
                                                <Link><img src='images/wish.svg' />
                                                </Link>

                                            </div>
                                            <div className="product-image">
                                                <img className='ip-13' src='images/aher.jpg' />
                                                <img src='images/aher-2.jpg' />
                                            </div>
                                            <div className="product-details mt-5">

                                                <h2>Apple Watch Hermès </h2>
                                                <h6 className="brand"> (128GB, Deep Purple)
                                                </h6>
                                                <p> <b>Дисплей:</b> 6,7 дюйм (17,00 см) OLED дисплей <br />
                                                    <b>Эстутум:</b>  128GB ROM<br />
                                                    <b>Процессор:</b>  A16 Bionic Chip, Hexa Core<br />
                                                    <b>Камера:</b> 48 МП + 12 МП + 12 МП үчтүк арткы жана 12 МП алдыңкы камера<br />
                                                    <b>Батарея:</b> Qi зымсыз кубаттоо 7,5 Вт чейин<br />
                                                    <b>Коопсуздук (кулпу):</b> Facial Lock</p>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value='3'
                                                    edit='false'
                                                    activeColor="#ffd700"
                                                />
                                                <p>$1229</p>
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

                            <div className='product1'>
                                <div className='product-wrapper'>
                                    <div className="col-3 ">
                                        <Link className="product-card position-relative">
                                            <div className="wishlist position-absolute">
                                                <Link><img src='images/wish.svg' />
                                                </Link>

                                            </div>
                                            <div className="product-image">
                                                <img className='watchsm'src='images/sc-1.jpeg' />
                                                <img src='images/sc.jpg' />
                                            </div>
                                            <div className="product-details mt-5">
                                                <h2 className="brand">Samsung Galaxy Watch4 Classic</h2>
                                                <h6 > (Silver,Black)
                                                </h6>
                                                <p> <b>Өлчөмү</b>46мм | 42мм <br />
                                                    <b>Салмагы</b> 52,0г | 46,5 г<br />
                                                    <b>Дисплей</b> DX менен Corning® Gorilla® Glass
                                                    <br />
                                                    <b>Материал</b> Дат баспаган болот<br />
                                                    <b>Батарея (типтүү) :</b>361mAh | 247 мАч<br />
                                                    <b>Уйкуну көзөмөлдөө</b> <br />
                                                    <b>Машыгуу маршруту / Артка көз салуу</b>
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
                                        </Link></div>

                                    <div className="col-3">
                                        <Link className="product-card position-relative">
                                            <div className="wishlist position-absolute">
                                                <Link><img src='images/wish.svg' />
                                                </Link>

                                            </div>
                                            <div className="product-image">
                                                <img className='watchbg' src='images/sw4.png' />
                                                <img src='images/sw4-2.png' />
                                            </div>
                                            <div className="product-details mt-5">
                                                <h2 className="brand">Galaxy Watch4</h2>
                                                <h6 > (Pink Gold, Silver,Black)
                                                </h6>
                                                <p> <b>Өлчөмү</b>44мм | 40мм <br />
                                                    <b>Салмагы</b>  30.3g | 25.9g<br />
                                                    <b>Дисплей</b> DX+ менен Corning® Gorilla® Glass
                                                    <br />
                                                    <b>Материал</b> Armor алюминий<br />
                                                    <b>Батарея (типтүү) :</b>361mAh | 247 мАч<br />
                                                    <b>Уйкуну көзөмөлдөө</b> <br />
                                                    <b>Машыгуу маршруту / Артка көз салуу</b>
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

                                    <div className="col-3">
                                        <Link className="product-card position-relative">
                                            <div className="wishlist position-absolute">
                                                <Link><img src='images/wish.svg' />
                                                </Link>

                                            </div>
                                            <div className="product-image">
                                                <img src='images/sw-2.jpg' />
                                                <img className='watchbg' src='images/sw.jpg' />
                                            </div>
                                            <div className="product-details mt-5">
                                                <h2 className="brand">Galaxy Watch5</h2>
                                                <h6 > (Pink Gold, Silver,Graphite)
                                                </h6>
                                                <p> <b>Өлчөмү</b>44мм | 40мм <br />
                                                    <b>Салмагы</b>  33,5 г | 28,7 г<br />
                                                    <b>Дисплей</b> Сапфир кристалл
                                                    <br />
                                                    <b>Материал</b> Armor алюминий<br />
                                                    <b>Батарея (типтүү) :</b> 410mAh | 284 мАч<br />
                                                    <b>Уйкуну көзөмөлдөө</b>
                                                    <b>Машыгуу маршруту / Артка көз салуу</b>
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
                                    <div className="col-3">
                                        <Link className="product-card position-relative">
                                            <div className="wishlist position-absolute">
                                                <Link><img src='images/wish.svg' />
                                                </Link>

                                            </div>
                                            <div className="product-image">
                                                <img className='watchsm' src='images/swp.jpg' />
                                                <img src='images/swp-2.jpg' />
                                            </div>
                                            <div className="product-details mt-5">

                                                <h2 className="brand">Galaxy Watch5 Pro</h2>
                                                <h6 > (Black Titanium, Gray Titanium)
                                                </h6>
                                                <p> <b>Өлчөмү</b>45мм <br />
                                                    <b>Салмагы</b>  46,5 г<br />
                                                    <b>Дисплей</b> Сапфир кристалл
                                                    <br />
                                                    <b>Материал</b> Титан<br />
                                                    <b>Батарея (типтүү) :</b> 590 мАч<br />
                                                    <b>Уйкуну көзөмөлдөө</b>
                                                    <b>Машыгуу маршруту / Артка көз салуу</b>
                                                </p>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value='3'
                                                    edit='false'
                                                    activeColor="#ffd700"
                                                />
                                                <p>$649.00

                                                </p>
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
        </div>
    )
}

export default Watch
