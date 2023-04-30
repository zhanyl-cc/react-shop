import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Product from "../components/Product";
// import Color from "../components/Color";
// import Container from "../components/Container";
import { Link, NavLink } from 'react-router-dom';
import './Ourstore.css'
import Colors from './../components/Colors';


const OurStore = () => {
  const [grid, setGrid] = useState(4);
  return (
    <>


      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12 ">
            <div id="carouselExampleControls1" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active d-flex">
                  <NavLink to='/phones' className='link'>
                    <img src="images/2phone.png" class="d-block " alt="..." />
                    <p>Уюлдук телефон</p>
                  </NavLink>
                  <NavLink to='/watches' className='link'>
                    <img src="images/4watch.png" class="d-block " alt="..." />
                    <p>кол саат</p>
                  </NavLink>
                  <NavLink to='/laptops' className='link'>
                    <img src="images/1.png" class="d-block " alt="..." />
                    <p>Компьютер</p>
                  </NavLink>


                  <NavLink to='/headphones' className='link'>
                    <img src="images/5airpods.png" class="d-block " alt="..." />
                    <p> Наушник</p>
                  </NavLink>

                  <NavLink to='/tablets'className='link'>
                    <img src="images/3ipad.png" class="d-block " alt="..." />
                    <p>планшет</p>
                  </NavLink>
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
                  <Link className='link'>
                    <img src="images/access.png" class="d-block " alt="..." />

                    <p>аксессуарлар</p>
                  </Link>

                </div>
              </div>
              {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button> */}

            </div>

          </div>
        </div>
        <div className="d-flex">
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-end align-items-center" style={{ margin:"2px 20px" }}>
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                  <b>Иреттөө:</b>
                  </p>
                  <select
                    name=""
                    defaultValue={"manula"}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="manual">Өзгөчөлөнгөн</option>
                    <option value="best-selling">Мыкты сатуу</option>
                    <option value="title-ascending">Алфавит боюнча, A-Z</option>
                    <option value="title-descending">
                    Алфавит боюнча З-А
                    </option>
                    <option value="price-ascending">Баасы, төмөндөн жогоруга</option>
                    <option value="price-descending">Баасы, жогорудан төмөнгө</option>
                    <option value="created-ascending">Дата, эскиден жаңыга</option>
                    <option value="created-descending">Дата, жаңыдан эски</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  {/* <p className="totalproducts mb-0">21 Products</p> */}


                  {/* <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />

                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div> */}

                </div>
              </div>
            </div>


            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <Product grid={grid} />
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Категориялар боюнча дүкөн</h3>
              <div>
                <ul className="ps-0">
                  <li>Cаат</li>
                  <li>Аксессуар</li>
                  <li>Камера</li>
                  <li>Ноутбук </li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Чыпкалоо</h3>
              <div>
                <h5 className="sub-title">Жеткиликтүүлүк</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Кампада (1)
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
                      Запаста жок(0)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Баасы</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">Баштап</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput1">Чейин</label>
                  </div>
                </div>
                <h4 className="sub-title">Түстөр</h4>
                <div>
                  <Colors />
                </div>
                <h4 className="sub-title">Бренддер</h4>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-1"
                    />
                    <label className="form-check-label" >
                      Apple
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""

                    />
                    <label className="form-check-label" htmlFor="color-2">
                      Samsung
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""

                    />
                    <label className="form-check-label" htmlFor="color-2">
                      Xiomi
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""

                    />
                    <label className="form-check-label" htmlFor="color-2">
                      Dell
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""

                    />
                    <label className="form-check-label" htmlFor="color-2">
                      Asus
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Продукт тегдери</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                  Наушник
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                  Ноутбук
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                  Мобилдик
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                  Колонка
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  );
};

export default OurStore;


