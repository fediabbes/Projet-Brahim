import React from 'react'
import { Card } from 'react-bootstrap'
import './Products.css'

function Products({ data }) {
    return (
        <div>
            <div className='ProductsPartOne'>
                <h1> Products</h1>
            </div>
            <div className='ProductsPartTwo'>
                {/* <main role="main">
                    <div class="product">
                        <figure>
                            <img src={el.img} alt="Product Image" class="product-image" />
                        </figure>
                        <div class="product-description">
                            <div class="info">
                                <h1> {el.title} </h1>
                                <p>
                                    {el.description}
                                </p>
                            </div>
                            <div class="price">
                                89
                            </div>
                        </div>   
                        <div class="product-sidebar">
                            <button class="buy">
                                <span>BUY ITEM</span>
                            </button>
                            <button class="info">
                                <span>MORE INFO</span>
                            </button>

                            <button class="size">
                                <span>SIZES</span>
                            </button>

                            <button class="colors">
                                <span>
                                    <a href="" class="color black"></a>
                                    <a href="" class="color white"></a>
                                    <a href="" class="color red"></a>
                                </span>
                            </button>
                        </div>
                    </div>npm start
                   
                </main> */}
                <div className='ProductsPartTwoCard'>
                {data.map(el => <><Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={el.img} />
                    <Card.Body>
                        <Card.Title>{el.title} </Card.Title>
                        <Card.Text>{el.description}</Card.Text>
                    </Card.Body>
                </Card></>)}
                </div>

            </div>
        </div>
    )
}

export default Products