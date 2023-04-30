import React from 'react'
import './Product.css'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className='pr'>
      <div className='product'>
        <div className='product-wrapper'>
          <div className="col-3">
            <Link className="product-card position-relative">
              <div className="wishlist position-absolute">
                <Link><img src='images/wish.svg' />
                </Link>

              </div>
              <div className="product-image">
                <img src='images/airpods3.jpg' />
                <img src='images/airpods3-2.jpg' />
              </div>
              <div className="product-details">
                <h6 className="brand">Apple AirPods</h6>
                <h5>Купить Наушники Apple AirPods Max Голубое</h5>
                <ReactStars
                  count={5}
                  size={24}
                  value='3'
                  edit='false'
                  activeColor="#ffd700"
                />
                <p>$100.00</p>
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
                <img className='apple-watch1' src='images/apple-watch1.jpg' />
                <img className='apple-watch1' src='images/apple-watch-ultra.avif' />
              </div>
              <div className="product-details">
                <h6 className="brand">Apple Watch</h6>
                <h5>Acheter une Apple Watch Ultra - Apple (LU)</h5>
                <ReactStars
                  count={5}
                  size={24}
                  value='3'
                  edit='false'
                  activeColor="#ffd700"
                />
                <p>$100.00</p>
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
                <img className='pod-1' src='images/pod.png' />
                <img className='pod-2' src='images/pod2.jpg' />
              </div>
              <div className="product-details">
                <h6 className="brand">Apple HomePod</h6>
                <h5>Акылдуу колонка Apple HomePod mini </h5>
                <ReactStars
                  count={5}
                  size={24}
                  value='3'
                  edit='false'
                  activeColor="#ffd700"
                />
                <p>$100.00</p>
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
                <img className='pod-1' src='images/lap.jpg' />
                <img className='pod-2' src='images/lap2.jpg' />
              </div>
              <div className="product-details">
                <h6 className="brand">Samsung Galaxy</h6>
                <h5> Book Pro 360 Laptop NT950QDB-KC52 Win11 i5 11th 16GB
                </h5>
                <ReactStars
                  count={5}
                  size={24}
                  value='3'
                  edit='false'
                  activeColor="#ffd700"
                />
                <p>$100.00</p>
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
      <div className='product'>
        <div className='product-wrapper'>
          <div className="col-3">
            <Link className="product-card position-relative">
              <div className="wishlist position-absolute">
                <Link><img src='images/wish.svg' />
                </Link>

              </div>
              <div className="product-image">
                <img src='images/airpods3.jpg' />
                <img src='images/airpods3-2.jpg' />
              </div>
              <div className="product-details">
                <h6 className="brand">Apple AirPods</h6>
                <h5>Купить Наушники Apple AirPods Max Голубое</h5>
                <ReactStars
                  count={5}
                  size={24}
                  value='3'
                  edit='false'
                  activeColor="#ffd700"
                />
                <p>$100.00</p>
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
                <img className='apple-watch1' src='images/apple-watch1.jpg' />
                <img className='apple-watch1' src='images/apple-watch-ultra.avif' />
              </div>
              <div className="product-details">
                <h6 className="brand">Apple Watch</h6>
                <h5>Acheter une Apple Watch Ultra - Apple (LU)</h5>
                <ReactStars
                  count={5}
                  size={24}
                  value='3'
                  edit='false'
                  activeColor="#ffd700"
                />
                <p>$100.00</p>
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
                <img className='pod-1' src='images/pod.png' />
                <img className='pod-2' src='images/pod2.jpg' />
              </div>
              <div className="product-details">
                <h6 className="brand">Apple HomePod</h6>
                <h5>Акылдуу колонка Apple HomePod mini </h5>
                <ReactStars
                  count={5}
                  size={24}
                  value='3'
                  edit='false'
                  activeColor="#ffd700"
                />
                <p>$100.00</p>
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
                <img className='pod-1' src='images/lap.jpg' />
                <img className='pod-2' src='images/lap2.jpg' />
              </div>
              <div className="product-details">
                <h6 className="brand">Samsung Galaxy</h6>
                <h5> Book Pro 360 Laptop NT950QDB-KC52 Win11 i5 11th 16GB
                </h5>
                <ReactStars
                  count={5}
                  size={24}
                  value='3'
                  edit='false'
                  activeColor="#ffd700"
                />
                <p>$100.00</p>
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



  )
}

export default Product
