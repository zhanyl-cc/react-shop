import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = () => {
    return (

        <div className='col-3'>
            <div className='card-news'>
                <div className="card-image">
                    <img className='img-fluid' src='images/blog-1.jpg' />

                </div>
                <div className='content'>
                    <p className='date'> 1 Dec,2023</p>
                    <h5 className='title'>A beautiful sundaymorning renaissance</h5>
                    <p className='description'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cumque quia, qui pariatur iusto incidunt delectus vero exercitationem, voluptatum cupiditate sed distinctio! 
                    </p>
                    <Link to='/' className='button'>Read More</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Card
