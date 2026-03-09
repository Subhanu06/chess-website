import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import "./Chemeinsider.css";
import insider1 from "../../assets/insider1.jpg";
import insider2 from "../../assets/insider2.jpg";
import insider3 from "../../assets/insider3.jpg";
import insider4 from "../../assets/insider4.jpg";
import insider5 from "../../assets/insider5.jpg";
import insider6 from "../../assets/insider6.jpg";
import insider7 from "../../assets/insider7.jpg";
import insider8 from "../../assets/insider8.jpg";
import insider9 from "../../assets/insider9.jpg";
import insider10 from "../../assets/insider10.jpg";
import insider11 from "../../assets/insider11.jpg";
import insider12 from "../../assets/insider12.jpg";
function Chemeinsider() {
  return (
    <div>
      <NavBar />
      <section className="container mt-5">
        <div className="members__box__wrap">
          <div className="row">
            <h3 className="card__outerHeading">Chem-<span className="text_primary">E</span>-Insider</h3>
            <hr className="hr" width="60%" style={{ margin: "1% auto" }} />
            <p className="lead card__lead">
              A series of technical infographic posts We present bite-sized
              information on various chemical engineering topics, among which,
              mostly equipments have been covered.
            </p>
            <div className="members__box__wrap outer">
              <h3 className="card__outerHeading">2021</h3>
              <hr className="hr" width="60%" style={{ margin: "1% auto" }} />

              <div className="row mt-3">
                <div className="col-12 col-sm-12 col-lg-6 gap">
                  <div className="card members__box background">
                    <img
                      className="card-img-top background__img"
                      src={insider7}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                        Working of a Screw Chiller
                      </h4>
                      <i className="card-text background__text">
                        26th December, 2021
                      </i>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-lg-6 gap">
                  <div className="card members__box background">
                    <img
                      className="card-img-top background__img"
                      src={insider6}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                        Air Separation Unit (ASU).
                      </h4>
                      <i className="card-text background__text">
                        19th October, 2021
                      </i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-12 col-sm-12 col-lg-6">
                  <div className="card members__box background">
                    <img
                      className="card-img-top background__img"
                      src={insider1}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                        Functioning of Valves
                      </h4>
                      <i className="card-text background__text">
                        15th September, 2021
                      </i>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-lg-6 gap">
                  <div className="card members__box background">
                    <img
                      className="card-img-top background__img"
                      src={insider2}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                        Working of a Boiler
                      </h4>
                      <i className="card-text background__text">
                        15th August, 2021
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="members__box__wrap outer">
              <h3 className="card__outerHeading">2022</h3>
              <hr className="hr" width="60%" style={{ margin: "1% auto" }} />
              <div className="row mt-3">
                <div className="col-12 col-sm-12 col-lg-6">
                  <div className="card members__box background">
                    <img
                      className="card-img-top background__img"
                      src={insider12}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                        Reciprocating Pumps
                      </h4>
                      <i className="card-text background__text">
                        11th November, 2022
                      </i>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-lg-6">
                  <div className="card members__box background">
                    <img
                      className="card-img-top background__img"
                      src={insider11}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                        Shell and Tube Heat Exchanger
                      </h4>
                      <i className="card-text background__text">
                        10th October, 2022
                      </i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 col-sm-12 col-lg-6">
                  <div className="card members__box background">
                    <img
                      className="card-img-top background__img"
                      src={insider10}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                        Fluidized Bed Dryer
                      </h4>
                      <i className="card-text background__text">
                        10th September, 2022
                      </i>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-lg-6">
                  <div className="card members__box background">
                    <img
                      className="card-img-top background__img"
                      src={insider9}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                        Rotary drum filter
                      </h4>
                      <i className="card-text background__text">
                        10th August, 2022
                      </i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 col-sm-12 col-lg-6">
                  <div className="card members__box background">
                    <img
                      className="card-img-top background__img"
                      src={insider8}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                        Pulse jet bag filter
                      </h4>
                      <i className="card-text background__text">
                        10th July, 2022
                      </i>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-lg-6">
                  <div className="card members__box background">
                    <img
                      className="card-img-top background__img"
                      src={insider5}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                        Autoclave
                      </h4>
                      <i className="card-text background__text">
                        10th June, 2022
                      </i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 col-sm-12 col-lg-6 gap">
                  <div className="card members__box background">
                    <img
                      className="card-img-top background__img"
                      src={insider4}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                        Distillation column
                      </h4>
                      <i className="card-text background__text">
                        9th May, 2022
                      </i>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-lg-6">
                  <div className="card members__box background">
                    <img
                      className="card-img-top background__img"
                      src={insider3}
                      alt="Event poster"
                    />
                    <div className="card-body">
                      <h4 className="card-title background__heading">
                        Cooling Tower
                      </h4>
                      <i className="card-text background__text">
                        4th March, 2022
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Chemeinsider;
