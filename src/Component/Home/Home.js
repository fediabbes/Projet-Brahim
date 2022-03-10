import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Home.css'
import video from '../assets/video.mp4'
import VideoPartFour from "../assets/PartFourVideo.mp4"
import PartFourIMG from "../assets/PartFourIMG.jpg"
import PartSixImgOne from "../assets/PartSixImgOne.jpg"
import PartSixImgTwo from "../assets/PartSixImgTwo.jpg"
import PartSixImgThree from "../assets/PartSixImgThree.jpg"
import PartSixImgFour from "../assets/PartSixImgFour.jpg"
import PartSixImgFive from "../assets/PartSixImgFive.jpg"
import PartSixImgSix from "../assets/PartSixImgSix.jpg"
import img from '../assets/PartThreeImg.jpg'
import { Carousel } from 'react-bootstrap'

function Home() {
    useEffect(() => {
        Aos.init({});
    }, [])
    return (
        <div>
            <div className='PartOne'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.misuraemme.it/files/.thumbs/home/slider-2021-10/1500x900a/misuraemme-millimetrica-1.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.misuraemme.it/files/.thumbs/home/slider-2021-10/1500x900a/misuraemme-palo-alto-1.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.misuraemme.it/files/.thumbs/home/slider-2021-10/1500x900a/misuraemme-palo-alto-free.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='PartTwo'>
                <video data-aos="fade-right" className='PartTwoVideo' autoplay='true' muted='true' playsinline loop >
                    <source src={video} />
                </video>
                <div >
                    <section className="items">
                        <nav className="main-nav">
                            <a href="#"><span data-hover="Beverly West Residences">Beverly West Residences</span></a>
                        </nav>
                    </section>
                </div>

            </div>
            <div className='PartThree'>
                <div className='PartThreeBlocOne' >
                    <header>
                        <h2 data-aos='fade-up'>A timeless story</h2>
                        <p class="subtitle" data-aos='fade-up'>Industrial Design Made in Italy</p>
                    </header>
                    <div className='PartThreeSpacer'></div>
                    <div className='PartThreePP'>
                        <p data-aos='fade-up'>Passed on by three generations, the know-how of MisuraEmme is the result of consolidated knowledge over time and loyalty to strong and <br /> imperative values.</p>
                        <p data-aos='fade-up'>100% made in Italy, designed by famous architects and realised making use of the artisan culture of professionals of the Brianza area. The products of MisuraEmme combine tradition with innovation.<br />Today the company is not only capable of proposing furniture characterised by a high level of personalisations, but also to export these values, designing solutions in tune with different international requirements.</p>
                    </div>
                </div>
                <div className="PartThreeBlocTwo" >
                    <img data-aos="fade-left" src={img} />
                </div>

                <div  >
                    <section className="PartThreeAOne">
                        <nav className="main-nav">
                            <a data-aos='fade-up' href="#"><span data-hover="Profile">Profile <span> |</span></span></a>
                        </nav>
                    </section>
                    <section className="PartThreeATwo">
                        <nav className="main-nav">
                            <a data-aos='fade-up' href="#"><span data-hover="History">History <span> |</span></span></a>
                        </nav>
                    </section>
                    <section className="PartThreeAThree">
                        <nav className="main-nav">
                            <a data-aos='fade-up' href="#"><span data-hover="Innovation and environment">Innovation and environment  <span> |</span></span></a>
                        </nav>
                    </section>
                    <section className="PartThreeAFour">
                        <nav className="main-nav">
                            <a data-aos='fade-up' href="#"><span data-hover="Certification">Certification </span></a>
                        </nav>
                    </section>

                </div>

            </div>
            <div className='PartFour'>
                <div>
                    <img data-aos="fade-up-right" src={PartFourIMG} />
                    <video data-aos="fade-up-right" playsInline autoPlay loop muted __idm_id__={106498}>
                        <source src="https://www.misuraemme.it/themes/misuraemme/assets/video/misuraemme-moodboardcreator.mp4" type="video/mp4" data-media="screen" />
                    </video> </div>
                <div className='PartFourBlocs'>
                    <h1 data-aos="fade-up-left">MOODBOARD <br /> CREATOR</h1>
                    <p data-aos="fade-up-left">Creating a moodboard means building a well-structured story, where nothing is left to chance, with the express purpose of communicating a particular message. In other words, we could define the moodboard as a visual narrative aimed at focusing, clarifying and organizing the creative process, in order to structure the idea that has arisen and thus give it greater strength.</p>
                </div>
            </div>
            <div className='PartFive'>
                <Carousel >
                    <Carousel.Item>
                        <div className='CarouselOne'>
                            <img
                                className="d-block w-100"
                                id='CarouselOneImgOne'
                                src="https://content.poliform.it/assets/2021/08/Poliform_night_systems_LEXINGTON_anteprima_960x960px_02.jpg"
                                alt="First slide"
                            />
                            <img
                                className="d-block w-100"
                                id='CarouselOneImgTwo'
                                src="https://content.poliform.it/assets/2021/08/Poliform_night_systems_LEXINGTON_anteprima_960x960px_01.jpg"
                                alt="First slide"
                            />
                        </div>
                        <Carousel.Caption>
                            <h3>Actualités</h3>
                            <a className='CarouselA' href="#"> Lexington</a>
                            <a className='CarouselATwo'>découvrir</a>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className='CarouselOne'>
                            <img
                                className="d-block w-100"
                                id='CarouselOneImgOne'
                                src="https://content.poliform.it/assets/2021/02/Poliform_divani_BRISTOL_anteprima_960x960px_2021_01.jpg"
                                alt="First slide"
                            />
                            <img
                                className="d-block w-100"
                                id='CarouselOneImgTwo'
                                src="https://content.poliform.it/assets/2021/02/Poliform_divani_BRISTOL_anteprima_960x960px_2021_02.jpg"
                                alt="First slide"
                            />
                        </div>
                        <Carousel.Caption>
                            <h3>Actualités</h3>
                            <a className='CarouselA' href="#"> BRISTOL</a>
                            <a className='CarouselATwo'>découvrir</a>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className='CarouselOne'>
                            <img
                                className="d-block w-100"
                                id='CarouselOneImgOne'
                                src="https://content.poliform.it/assets/2021/02/Poliform_poltrone_LE_CLUB_anteprima_960x960px_02_2021.jpg"
                                alt="First slide"
                            />
                            <img
                                className="d-block w-100"
                                id='CarouselOneImgTwo'
                                src="https://content.poliform.it/assets/2021/02/Poliform_poltrone_LE_CLUB_anteprima_960x960px_01.jpg"
                                alt="First slide"
                            />
                        </div>
                        <Carousel.Caption>
                            <h3>Actualités</h3>
                            <a className='CarouselA' href="#"> LE CLUB</a>
                            <a className='CarouselATwo'>découvrir</a>

                        </Carousel.Caption>
                    </Carousel.Item>


                </Carousel>
            </div>
            <div className="PartSix">

                <div class="content-wrapper">
                    <div class="news-card">
                        <a href="#" class="news-card__card-link"></a>
                        <img src={PartSixImgOne} alt="" class="news-card__image" />
                        <div data-aos="fade-right" class="news-card__text-wrapper">
                            <h2 class="news-card__title">Amazing First Title</h2>
                            <div class="news-card__post-date">Jan 29, 2018</div>
                            <div class="news-card__details-wrapper">
                                <p class="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur&hellip;</p>
                                <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="news-card">
                        <a href="#" class="news-card__card-link"></a>
                        <img src={PartSixImgTwo} alt="" class="news-card__image" />
                        <div data-aos="fade-down" class="news-card__text-wrapper">
                            <h2 class="news-card__title">Amazing Second Title that is Quite Long</h2>
                            <div class="news-card__post-date">Jan 29, 2018</div>
                            <div class="news-card__details-wrapper">
                                <p class="news-card__excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam obcaecati ex natus nulla rem sequi laborum quod fugit&hellip;</p>
                                <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="news-card">
                        <a href="#" class="news-card__card-link"></a>
                        <img src={PartSixImgThree} alt="" class="news-card__image" />
                        <div data-aos="fade-left" class="news-card__text-wrapper">
                            <h2 class="news-card__title">DAMA</h2>
                            <div class="news-card__post-date">Jan 29, 2018</div>
                            <div class="news-card__details-wrapper">
                                <p class="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae&hellip;</p>
                                <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="news-card">
                        <a href="#" class="news-card__card-link"></a>
                        <img src={PartSixImgFour} alt="" class="news-card__image" />
                        <div data-aos="fade-up-right" class="news-card__text-wrapper">
                            <h2 class="news-card__title">Amazing Forth Title that is Quite Long</h2>
                            <div class="news-card__post-date">Jan 29, 2018</div>
                            <div class="news-card__details-wrapper">
                                <p class="news-card__excerpt">Lorem ipsum dolor sit amet!</p>
                                <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="news-card">
                        <a href="#" class="news-card__card-link"></a>
                        <img src={PartSixImgFive} alt="" class="news-card__image" />
                        <div data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom" class="news-card__text-wrapper">
                            <h2 class="news-card__title">Amazing Fifth Title</h2>
                            <div class="news-card__post-date">Jan 29, 2018</div>
                            <div class="news-card__details-wrapper">
                                <p class="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio&hellip;</p>
                                <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="news-card">
                        <a href="#" class="news-card__card-link"></a>
                        <img src={PartSixImgSix} alt="" class="news-card__image" />
                        <div data-aos="fade-up-left" class="news-card__text-wrapper">
                            <h2 class="news-card__title">Amazing 6<sup>th</sup> Title</h2>
                            <div class="news-card__post-date">Jan 29, 2018</div>
                            <div class="news-card__details-wrapper">
                                <p class="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia.</p>
                                <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
            <div className='PartSeven'>
                <h1 data-aos="zoom-in-up">NOUVELLES COLLECTIONS</h1>
                <h3>Poliform présente la collection 2022. De la recherche continue de solutions et de styles naissent des produits fonctionnels, esthétiquement cohérents même s'ils sont conçus par des mains différentes, soignés dans leurs formes et élaborés avec grande maîtrise, fabriqués avec des matériaux d'excellence. Pour des espaces de vie et de couchage en phase avec les tendances les plus actuelles, entre design et confort.</h3>
                <p>découvrir</p>
            </div>
            <div className='PartEight'>
                <div className="footer-basic">
                    <footer>
                        <h4>Follow us</h4>
                        <div className="social"><a href="https://www.instagram.com/fedy_abbes/" ><i className="icon ion-social-instagram"></i></a><a href="https://www.snapchat.com/"><i class="icon ion-social-snapchat"></i></a><a href="https://twitter.com/?lang=fr"><i class="icon ion-social-twitter"></i></a><a href="https://www.facebook.com/fedy.abbes/"><i class="icon ion-social-facebook"></i></a></div>
                        <hr />
                        <div>
                            <div >
                                <section className="PartEightAOne">
                                    <nav className="main-nav">
                                        <a href="#"><span data-hover="Contacts">Contacts <span> |</span></span></a>
                                    </nav>
                                </section>
                                <section className="PartEightATwo">
                                    <nav className="main-nav">
                                        <a href="#"><span data-hover="Privacy Policy">Privacy Policy  <span> |</span></span></a>
                                    </nav>
                                </section>
                                <section className="PartEightAThree">
                                    <nav className="main-nav">
                                        <a href="#"><span data-hover="Cookie Policy">Cookie Policy  <span> |</span></span></a>
                                    </nav>
                                </section>
                                <section className="PartEightAFour">
                                    <nav className="main-nav">
                                        <a href="#"><span data-hover="Certification">Certification </span></a>
                                    </nav>
                                </section>

                            </div>
                        </div>
                        <img data-aos="flip-up" src='https://www.misuraemme.it/themes/misuraemme/assets/img/generali/misuraemme-contract-black.svg' />
                    </footer>
                </div>
            </div>
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>


        </div>
    )
}

export default Home