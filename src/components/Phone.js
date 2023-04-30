import React from 'react'
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import './AllCards.css'
import Home from './../pages/Home';


const Phone = () => {
    return (
        <div className='phone'>
            <div className="xxl">
                <div className="row">
                    <div className="c">
                        <div class="col-9">
                            <video src='images/ip.webm' />
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
                                                <img src='images/14.jpg' />
                                                <img src='images/14-2.jpg' />
                                            </div>
                                            <div className="product-details mt-5">
                                                <h2>Apple iPhone 14 </h2>
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
                                                <img src='images/14-pro.jpg' />
                                                <img src='images/14-pro-2' />
                                            </div>
                                            <div className="product-details mt-5">
                                                <h2>Apple iPhone 14 Pro </h2>
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
                                                <img src='images/14-promax.png' />
                                                <img src='images/14-promax.avif' />
                                            </div>
                                            <div className="product-details mt-5">
                                                <h2>Apple iPhone 14 Pro Max</h2>
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
                                                <img className='ip-13' src='images/13.jpg' />
                                                <img src='images/.jpg' />
                                            </div>
                                            <div className="product-details mt-5">

                                                <h2>Apple iPhone 13 </h2>
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
                                                <img className='samsung' src='images/sum.png' />
                                                <img src='images/sum.jpg' />
                                            </div>
                                            <div className="product-details mt-5">
                                                <h2 className="brand">Samsung Galaxy S23 </h2>
                                                <h6 > (128GB, Deep Purple)
                                                </h6>
                                                <p> <b>Дисплей: </b>6.1  дюйма, AMOLED, 120 Гц <br />
                                                    <b>Эстутум:</b>  128—512 Гб<br />
                                                    <b>Процессор:</b>  Qualcomm Snapdragon 8 Gen2 c разгоном с завода<br />
                                                    <b>Камера:</b> 50 MP + 10 MP + 10 MP Triple Rear & 12 MP Front Camera<br />
                                                    <b>Батарея:</b> 3900 мА·ч, быстрая зарядка 25 Вт<br />
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
                                                <img className='samsung' src='images/sum2-1.png' />
                                                <img className='samsung' src='images/sum2.jpg' />
                                            </div>
                                            <div className="product-details mt-5">
                                                <h2 className="brand">Samsung Galaxy S23 </h2>
                                                <h6 > 128GB(Snapdragon)(Cream)
                                                </h6>
                                                <p> <b>Дисплей: </b>6.1 inches (17.00 cm) OLED Display <br />
                                                    <b>Эстутум:</b>  128GB <br />
                                                    <b>Операциондук система:</b>  Android 13<br />
                                                    <b>Камера:</b> 50 MP + 10 MP + 12 MP Triple Rear & 12 MP Front Camera<br />
                                                    <b>Батарея:</b> 3900mAh<br />
                                                    <b>SIM Card Quantity:</b> 	2 SIM</p>
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
                                                <img className='samsung' src='images/sum3.png' />
                                                <img className='samsung' src='images/sum3-2.jpg' />
                                            </div>
                                            <div className="product-details mt-5">
                                                <h2>Galaxy Z Fold4</h2>
                                                <h6 className="brand"> (128GB, Deep Purple)
                                                </h6>
                                                <p> <b>Дисплей:</b>7.6" Dynamic AMOLED - 1812 x 2176 <br />
                                                    <b>Эстутум:</b>  128GB ROM<br />
                                                    <b>Камера:</b> 3 (50 MP + 12 MP + 12 MP)
                                                    <br />
                                                    <b>Батарея:</b> 4400 мАч<br />
                                                    <b>Чип (кулпу):</b> Qualcomm Snapdragon 8 Plus Gen 1<br />
                                                    <b>Салмагы: 263 г.</b>
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
                                                <img className='samsung' src='images/sum4.png' />
                                                <img className='samsung' src='images/sum4-2.jpg' />
                                            </div>
                                            <div className="product-details mt-5">

                                                <h2>Galaxy Z Flip4 </h2>
                                                <h6 className="brand"> (128GB, Deep Purple)
                                                </h6>
                                                <p> <b>Дисплей:</b> 6.7" Dynamic AMOLED - 1080 x 2640. <br />
                                                    <b>Эстутум:</b>  128GB ROM<br />
                                                    <b>Процессор:</b>  A16 Bionic Chip, Hexa Core<br />
                                                    <b>Камера:</b> 2 (12 MP + 12 MP)<br />
                                                    <b>Батарея:</b>3700 мАч<br />
                                                    <b>Чип (кулпу):</b> Qualcomm Snapdragon 8 Plus Gen 1. <br />
                                                    <b>Салмагы: 187 г.</b></p>
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

export default Phone
