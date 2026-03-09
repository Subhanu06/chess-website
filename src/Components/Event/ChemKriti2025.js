import React from 'react'
import ReadMore from './ReadMore';
import ChemKriti2025Poster from '../../assets/Chemkriti2025 poster.jpeg';
import ChemConnect2025 from '../../assets/Chem-connect2025.jpeg';
import ChemNiti2025 from '../../assets/Chemniti2025.jpeg';
import CodeFest2025 from '../../assets/Codefest2025.jpeg';
import TalentHunt2025 from '../../assets/TalentHunt2025.jpeg';
import Technothon2025 from '../../assets/Technothon2025.jpeg';
import './ChemKriti2025.css'
import NavBar from '../NavBar';
import Footer from '../Footer';

function ChemKriti2025() {
  return (
    <div>
        <NavBar/>
            <section className='container' style={{marginTop: "5rem"}}>
                <div className='members__box__wrap'>
                    <div className="row">
                        <h3 className='card__outerHeading'>Chem<span className="text_primary">Kriti</span> <span className="text_gold">2025</span></h3>
                        <hr className="hr" width="60%" style={{margin: "1% auto"}}/>
                        <p className="lead card__lead">
                            The annual Departmental fest organized by ChESS for 2025.
                            "Innovate, Engineer, Excel"
                            Join us for an exciting journey of technical excellence, innovation, and collaboration
                            as we bring together the brightest minds in chemical engineering.
                        </p>
                        <img className="rounded mx-auto d-block img-thumbnail main__img" src={ChemKriti2025Poster} alt="ChemKriti 2025 poster" />

                        <div className='members__box__wrap outer'>
                            <div className='row'>
                                <div className="col-12 col-sm-12 col-lg-4">
                                    <div className="card members__box background">
                                        <img className="card-img-top background__img" src={ChemConnect2025} alt="Chem-Connect 2025 poster" />
                                        <div className="card-body">
                                            <h4 className="card-title background__heading">Chem-Connect 2025</h4>
                                            <p className="card-text background__text">
                                                <ReadMore>
                                                    Connect with industry experts, alumni, and fellow chemical engineers in this networking event.
                                                    Discover career opportunities, share experiences, and build lasting professional relationships
                                                    that will shape your future in chemical engineering.
                                                </ReadMore>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-12 col-lg-4 gap">
                                    <div className="card members__box background">
                                        <img className="card-img-top background__img" src={ChemNiti2025} alt="ChemNiti 2025 poster" />
                                        <div className="card-body">
                                            <h4 className="card-title background__heading">ChemNiti 2025</h4>
                                            <p className="card-text background__text">
                                                <ReadMore>
                                                    A policy and ethics focused event where participants engage in discussions about
                                                    sustainable chemical engineering practices, environmental policies, and ethical
                                                    considerations in the industry. Shape the future of responsible engineering.
                                                </ReadMore>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-12 col-lg-4 gap">
                                    <div className="card members__box background">
                                        <img className="card-img-top background__img" src={CodeFest2025} alt="CodeFest 2025 poster" />
                                        <div className="card-body">
                                            <h4 className="card-title background__heading">CodeFest 2025</h4>
                                            <p className="card-text background__text">
                                                <ReadMore>
                                                    The ultimate coding competition for chemical engineers! Solve complex problems
                                                    using programming skills, develop innovative solutions for process optimization,
                                                    and showcase your computational thinking abilities in this exciting hackathon.
                                                </ReadMore>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row" style={{justifyContent: "center"}}>
                                <div className="col-12 col-sm-12 col-lg-4">
                                    <div className="card members__box background">
                                        <img className="card-img-top background__img" src={TalentHunt2025} alt="Talent Hunt 2025 poster" />
                                        <div className="card-body">
                                            <h4 className="card-title background__heading">Talent Hunt 2025</h4>
                                            <p className="card-text background__text">
                                                <ReadMore>
                                                    Showcase your unique talents beyond academics! Whether it's music, dance, art, or any other skill,
                                                    this is your platform to shine. Celebrate the diverse talents within our chemical engineering community
                                                    and win exciting prizes while entertaining your peers.
                                                </ReadMore>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-12 col-lg-4 gap">
                                    <div className="card members__box background">
                                        <img className="card-img-top background__img" src={Technothon2025} alt="Technothon 2025 poster" />
                                        <div className="card-body">
                                            <h4 className="card-title background__heading">Technothon 2025</h4>
                                            <p className="card-text background__text">
                                                <ReadMore>
                                                    A comprehensive technical marathon featuring multiple engineering challenges,
                                                    innovation contests, and problem-solving competitions. Test your technical prowess
                                                    across various domains and compete with the best minds in chemical engineering.
                                                </ReadMore>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
    </div>
  )
}

export default ChemKriti2025