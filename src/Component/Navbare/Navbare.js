import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import './Navbare.css'

function Navbare() {
    return (
        <div className='Navbare'>
            <div> <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt="free"
                            src="https://www.misuraemme.it/themes/misuraemme/assets/img/generali/misuraemme-logo.svg"
                            className="NavbarImg"
                        />{' '}
                    </Navbar.Brand>
                    <div className="NavbareLinks">
                        <nav class="navMenu">
                            <a href="/">Home</a>
                            <a href="/products">Products</a>
                            <a href="#"></a>
                            <a href="#">About</a>
                            <div class="dot"></div>
                        </nav>
                    </div>
                </Container>
            </Navbar>
            </div>
        </div>
    )
}

export default Navbare