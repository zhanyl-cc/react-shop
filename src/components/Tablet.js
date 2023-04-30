import React from 'react'
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import './AllCards.css'

const Tablet = () => {
    return (
        <div className='tablet'>
            <div className="xxl">
                <div className="row">
                    <div className="c0l-12">
                        <div className="tablets position-relative">
                            <img src='images/tabletsfon.avif' />

                            <h2 className='position-absolute'>Жумуш жана оюн үчүн планшеттер</h2>
                            <h4 className='position-absolute'>
                                Планшеттер колуңузда болгону жакшы. Бул сонун портативдик сыналгы жана сонун электрондук окурман. <br />
                                Жана туура колдонмолор менен планшет сиздин чыгармачыл импульстарыңыздын чыгышы үчүн кызмат кылат.<br />
                                Музыка жазыңыз, сүрөттөр менен видеолорду тартыңыз же түзөтүңүз.<br /> Заманбап планшеттин ар тараптуулугу сиз аны жолдо баратып кандайдыр бир (жеңил) иштерди аткаруу үчүн колдонууга кепилдик берет.
                            </h4>
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
                                                <img src='images/micr.avif' />
                                                <img src='images/micro2.avif' />
                                            </div>
                                            <div className="product-details mt-5">
                                                <h2>Microsoft Surface Pro 9 </h2>
                                                <h6 className="brand">Microsoft Surface
                                                </h6>
                                                <p> <b>Негизги өзгөчөлүктөрү:</b> <br />
                                                    13 дюйм (33,02 см) Pixel Sense Flow дисплей, 120 Гц жаңыртуу ылдамдыгы<br />
                                                    8 ГБ оперативдик эс, 256 ГБ ROM<br />
                                                    Intel Core i5 12-муун процессору<br />
                                                    Windows 11 Home OS<br />
                                                    15,5 саатка чейин батареянын иштөө мөөнөтү<br />
                                                    10 МП Негизги камера
                                                    <br />
                                                    Dolby Atmos менен стерео динамик, Dolby Vision IQ дисплейи


                                                </p>

                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value='3'
                                                    edit='false'
                                                    activeColor="#ffd700"
                                                />
                                                <p>$549</p>
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
                                                <img src='images/airpro2.jpg' />
                                                <img src='images/airpro2-2.jpg' />
                                            </div>
                                            <div className="product-details mt-5">
                                                <h2>AirPods Pro</h2>
                                                <p>2rd generation</p>
                                                <h6 className="brand"> Apple
                                                </h6>
                                                <p> <b>Багыттоо түрү:</b> кулакка<br />
                                                    <b>Туташуу мүмкүнчүлүгү:</b> Bluetooth, 5.0 версиясы<br />
                                                    <b>Батареянын иштөө мөөнөтү:</b> 6 саат ойнотуу<br />
                                                    <b>Тез кубаттоо:</b> Ооба<br />
                                                    <b>Ызы-чууну жокко чыгаруу:</b>Активдүү ызы-чууну жокко чыгаруу<br />
                                                    <b>Үн жардамчысы:</b>Google | Siri<br />
                                                    <b>USP:</b> IPX4 сууга туруктуу, жогорку тактыктагы аудио <br />
                                                    <b>Кепилдик:</b>12 ай кепилдик


                                                </p>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value='3'
                                                    edit='false'
                                                    activeColor="#ffd700"
                                                />
                                                <p>$249</p>
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
                                                <img src='images/airpod3d.jpg' />
                                                <img src='images/airpod3d-2.jpg' />
                                            </div>
                                            <div className="product-details mt-5">
                                                <h2>AirPods</h2>
                                                <p>3rd generation</p>
                                                <h6 className="brand">Apple
                                                </h6>
                                                <p> <b>Багыттоо түрү:</b> кулакка<br />
                                                    <b>Туташуу мүмкүнчүлүгү:</b> Bluetooth, 5.0 версиясы<br />
                                                    <b>Батареянын иштөө мөөнөтү:</b> 6 саат ойнотуу<br />
                                                    <b>Тез кубаттоо:</b> Жок<br />
                                                    <b>Ызы-чууну жокко чыгаруу:</b>Жок<br />
                                                    <b>Үн жардамчысы:</b> Siri<br />
                                                    <b>USP:</b>IPX4 сууга туруктуу, күч сенсорун башкаруу<br />
                                                    <b>Кепилдик:</b>12 ай кепилдик


                                                </p>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value='3'
                                                    edit='false'
                                                    activeColor="#ffd700"
                                                />
                                                <p>$169.00</p>
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
                                                <img className='ip-13' src='images/airpodcl.jpg' />
                                                <img src='images/airpodcl-2.jpg' />
                                            </div>
                                            <div className="product-details mt-5">

                                                <h2>AirPods </h2>
                                                <p>2rd generation</p>
                                                <h6 className="brand">Apple
                                                </h6>
                                                <p> <b>Багыттоо түрү:</b> кулакка<br />
                                                    <b>Туташуу мүмкүнчүлүгү:</b> Bluetooth, 5.0 версиясы<br />
                                                    <b>Батареянын иштөө мөөнөтү:</b> 5 саат ойнотуу<br />
                                                    <b>Тез кубаттоо:</b> Ооба<br />
                                                    <b>Ызы-чууну жокко чыгаруу:</b>Жок<br />
                                                    <b>Үн жардамчысы:</b> Google| Siri<br />
                                                    <b>USP:</b>Crystal Clear Sound, Touch Control<br />
                                                    <b>Кепилдик:</b>12 ай кепилдик


                                                </p>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value='3'
                                                    edit='false'
                                                    activeColor="#ffd700"
                                                />
                                                <p>$129</p>
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
                                                <img src='images/sony1.avif' />
                                                <img src='images/sony.avif' />
                                            </div>
                                            <div className="product-details mt-5">
                                                <h2>SONY WH-1000XM5 </h2>
                                                <h6 className="brand">Sony
                                                </h6>
                                                <p> <b>Багыттоо түрү:</b>Ашыкча кулак <br />
                                                    <b>Туташуу мүмкүнчүлүгү:</b> Bluetooth, 5.2 версиясы<br />
                                                    <b>Батареянын иштөө мөөнөтү:</b> 40 саат ойнотуу<br />
                                                    <b>Тез кубаттоо:</b> Ооба<br />
                                                    <b>Ызы-чууну жокко чыгаруу:</b>Ыңгайлаштырылган ызы-чууну жокко чыгаруу<br />
                                                    <b>USP:</b>Noise Canceling Processor QN1, Multi Noise Sensor Technology<br />
                                                    <b>Үн жардамчысы:</b> Alexa | Google | Siri<br />
                                                    <b>Кепилдик:</b>24 ай кепилдик


                                                </p>


                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value='3'
                                                    edit='false'
                                                    activeColor="#ffd700"
                                                />
                                                <p>$549</p>
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
                                                <img src='images/eleon1.avif' />
                                                <img src='images/eleon.avif' />
                                            </div>
                                            <div className="product-details mt-5">
                                                <h2>Eleon Dhani ANC ELEA7324</h2>
                                                <p>(Active Noise Cancellation, On Ear, Black)</p>
                                                <h6 className="brand"> Eleon
                                                </h6>
                                                <p> <b>Багыттоо түрү:</b> кулакка <br />
                                                    <b>Туташуу мүмкүнчүлүгү:</b> Bluetooth, 5.0 версиясы<br />
                                                    <b>Батареянын иштөө мөөнөтү:</b> 15 саат ойнотуу<br />
                                                    <b>Тез кубаттоо:</b> Жок<br />
                                                    <b>Ызы-чууну жокко чыгаруу:</b>активдүү ызы-чууну жокко чыгаруу<br />
                                                    <b>USP:</b>терге чыдамдуу, 40 мм айдоочу<br />
                                                    <b>Үн жардамчысы:</b> Google | Siri<br />
                                                    <b>Кепилдик:</b>12 ай кепилдик


                                                </p>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value='3'
                                                    edit='false'
                                                    activeColor="#ffd700"
                                                />
                                                <p>$249</p>
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
                                                <img src='images/jabra.avif' />
                                                <img src='images/jabra2.avif' />
                                            </div>
                                            <div className="product-details mt-5">
                                                <h2>Jabra Elite 7 Pro 100-99172001-40 TWS </h2>
                                                <p>(IP57 Суу, Тер жана Чаң өткөрбөйт, 30 саат ойнотуу, Титан Кара)</p>
                                                <h6 className="brand">Jabra
                                                </h6>
                                                <p> <b>Багыттоо түрү:</b> кулакка <br />
                                                    <b>Туташуу мүмкүнчүлүгү:</b> Bluetooth, 5.2 версиясы<br />
                                                    <b>Батареянын иштөө мөөнөтү:</b> 30 саат ойнотуу<br />
                                                    <b>Тез кубаттоо:</b> Ооба<br />
                                                    <b>Ызы-чууну жокко чыгаруу:</b>активдүү ызы-чууну жокко чыгаруу<br />
                                                    <b>USP:</b> IP57 Суу, чаң жана терге чыдамдуу, стерео үн<br />
                                                    <b>Үн жардамчысы:</b> Alexa | Гугл<br />
                                                    <b>Кепилдик:</b>24 ай кепилдик


                                                </p>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value='3'
                                                    edit='false'
                                                    activeColor="#ffd700"
                                                />
                                                <p>$169.00</p>
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
                                                <img className='ip-13' src='images/dizo.avif' />
                                                <img src='images/dizo2.avif' />
                                            </div>
                                            <div className="product-details mt-5">

                                                <h2>Dizo by realme TechLife Wireless Dash 790101003 </h2>
                                                <h6 className="brand">Dizo
                                                </h6>
                                                <p> <b>Багыттоо түрү:</b> кулакка <br />
                                                    <b>Туташуу мүмкүнчүлүгү:</b> Bluetooth, 5.2 версиясы<br />
                                                    <b>Батареянын иштөө мөөнөтү:</b> 30 саат ойнотуу<br />
                                                    <b>Тез кубаттоо:</b> Ооба<br />
                                                    <b>Ызы-чууну жокко чыгаруу:</b> Ооба<br />
                                                    <b>USP:</b>  Айланадагы үн режими, IPX4 сууга туруктуу<br />
                                                    <b>Кепилдик:</b>24 ай кепилдик


                                                </p>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value='3'
                                                    edit='false'
                                                    activeColor="#ffd700"
                                                />
                                                <p>$129</p>
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
                                                <img src='images/boult.avif' />
                                                <img src='images/boult2.avif' />
                                            </div>
                                            <div className="product-details mt-5">
                                                <h2>Boult Audio ProBass YCharge </h2>
                                                <h6 className="brand">Boult
                                                </h6>
                                                <p> <b>Багыттоо түрү:</b> кулакка <br />
                                                    <b>Туташуу мүмкүнчүлүгү:</b> Bluetooth, 5.2 версиясы<br />
                                                    <b>Батареянын иштөө мөөнөтү:</b> 12 саат ойнотуу<br />
                                                    <b>Тез кубаттоо:</b> Ооба<br />
                                                    <b>USP:</b>IPX5 сууга туруктуу<br />
                                                    <b>Үн жардамчысы:</b> Alexa | Google | Siri<br />
                                                    <b>Кепилдик:</b>12 ай кепилдик


                                                </p>


                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value='3'
                                                    edit='false'
                                                    activeColor="#ffd700"
                                                />
                                                <p>$549</p>
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
                                                <img src='images/buds.avif' />
                                                <img src='images/buds2.avif' />
                                            </div>
                                            <div className="product-details mt-5">
                                                <h2>OnePlus Buds Pro 2 E507A TWS</h2>
                                                <p>(Active Noise Cancellation, On Ear, Black)</p>
                                                <h6 className="brand"> OnePlus
                                                </h6>
                                                <p> <b>Багыттоо түрү:</b> кулакка <br />
                                                    <b>Туташуу мүмкүнчүлүгү:</b> Bluetooth, 5.3 версиясы<br />
                                                    <b>Батареянын иштөө мөөнөтү:</b> 6 саат ойнотуу<br />
                                                    <b>Тез кубаттоо:</b> Ооба
                                                    <br />
                                                    <b>Ызы-чууну жокко чыгаруу:</b>Ыңгайлаштырылган ызы-чууну жокко чыгаруу<br />
                                                    <b>USP:</b>Микрофон колдоого алынат, 10м Bluetooth диапазону<br />
                                                    <b>Кепилдик:</b>12 ай кепилдик


                                                </p>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value='3'
                                                    edit='false'
                                                    activeColor="#ffd700"
                                                />
                                                <p>$249</p>
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
                                                <img src='images/boult-2.avif' />
                                                <img src='images/boult-2.avif' />
                                            </div>
                                            <div className="product-details mt-5">
                                                <h2>Boult Audio AirBass Maverick TWS </h2>
                                                <p>(IP57 Суу, Тер жана Чаң өткөрбөйт, 35 саат ойнотуу, Титан Кара)</p>
                                                <h6 className="brand">BOULT
                                                </h6>
                                                <p> <b>Багыттоо түрү:</b> кулакка <br />
                                                    <b>Туташуу мүмкүнчүлүгү:</b> Bluetooth, 5.3 версиясы<br />
                                                    <b>Батареянын иштөө мөөнөтү:</b> 35 саат ойнотуу<br />
                                                    <b>Тез кубаттоо:</b> Ооба<br />
                                                    <b>Ызы-чууну жокко чыгаруу:</b>ENC менен төрт микрофон<br />
                                                    <b>USP:</b> IPX5 сууга туруктуу, BoomX Tech
                                                    <br />
                                                    <b>Үн жардамчысы:</b>  Ооба  <br />
                                                    <b>Кепилдик:</b>12 ай кепилдик


                                                </p>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value='3'
                                                    edit='false'
                                                    activeColor="#ffd700"
                                                />
                                                <p>$169.00</p>
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
                                                <img className='ip-13' src='images/wings.avif' />
                                                <img src='images/wings2.avif' />
                                            </div>
                                            <div className="product-details mt-5">

                                                <h2>Dizo by realme TechLife Wireless Dash 790101003 </h2>
                                                <h6 className="brand">Dizo
                                                </h6>
                                                <p> <b>Багыттоо түрү:</b> кулакка <br />
                                                    <b>Туташуу мүмкүнчүлүгү:</b> Bluetooth, 5.2 версиясы<br />
                                                    <b>Батареянын иштөө мөөнөтү:</b> 30 саат ойнотуу<br />
                                                    <b>Тез кубаттоо:</b> Ооба<br />
                                                    <b>Ызы-чууну жокко чыгаруу:</b> Ооба<br />
                                                    <b>USP:</b>  Айланадагы үн режими, IPX4 сууга туруктуу<br />
                                                    <b>Кепилдик:</b>24 ай кепилдик


                                                </p>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value='3'
                                                    edit='false'
                                                    activeColor="#ffd700"
                                                />
                                                <p>$129</p>
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
                        <hr />
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

export default Tablet
