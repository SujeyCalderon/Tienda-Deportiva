import React from "react";
import Movie from "../../atoms/Movie/Movie";
import Img from "../../atoms/Img/Img";
import Card from "../../molecules/Card/Card";
import Inicio from "../../../assets/video/XD.mp4";
import PuImage from "../../../assets/img/pu.jpeg";
import AnImage from "../../../assets/img/an.jpeg";
import MImage from "../../../assets/img/m.jpeg";
import MImage2 from "../../../assets/img/h.jpeg";
import MImage3 from "../../../assets/img/z.jpeg";
import MImage4 from "../../../assets/img/ss.jpeg";
import Image2 from '../../../assets/img/dos.jpeg';
import Barra from "../../templates/Barra/Barra";
import P from "../../atoms/P/P";
import Form from "../../molecules/Form/Form";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Barra />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="video-container">
              <Movie src={Inicio} type="video/mp4" />
            </div>
          </div>
          <div className="col-12 col-lg-4" id="claseb" align="right">
            <center>
              <Img src={PuImage} width="100%" alt="Publicidad" />
            </center>
          </div>
        </div>
        <br />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-8">
              <Img src={Image2}/>
            </div>
            <div className="col-12 col-lg-4" id="claseb" align="right">
              <center>
                <Img className="anuncio" src={AnImage} alt="Anuncio" />
              </center>
            </div>
          </div>
        </div>
        <div className="container-fluid2">
          <div className="row">
            <div className="col-12 col-lg-3">
              <Card
                imgSrc={MImage}
                imgAlt="Urbanic ropa deportiva de nylon"
                title="Urbanic ropa deportiva de nylon"
                text="$MXN325.00"
                buttonClass="btn btn-success"
                buttonContent="Comprar Ahora"
              />
            </div>
            <div className="col-12 col-lg-3">
              <Card
                imgSrc={MImage2}
                imgAlt="Conjunto deportivo gym correr"
                title="Conjunto deportivo gym correr"
                text="$MXN168.00"
                buttonClass="btn btn-success"
                buttonContent="Comprar Ahora"
              />
              <Form />
              <P id="successMessage">¡Gracias por su compra!</P>
              <script src="script.js"></script>
            </div>
            <div className="col-12 col-lg-3">
              <Card
                imgSrc={MImage3}
                imgAlt="Zapatillas de running tejidas"
                title="Zapatillas de running tejidas"
                text="$MXN1580.00"
                buttonClass="btn btn-success"
                buttonContent="Comprar Ahora"
              />
              <Form />
              <P id="successMessage">¡Gracias por su compra!</P>
              <script src="script.js"></script>
            </div>
            <div className="col-12 col-lg-3">
              <Card
                imgSrc={MImage4}
                imgAlt="Zapatillas deportivas chunky con diseño de cinta con letra con diseño con cordón"
                title="Zapatillas deportivas chunky con diseño de cinta con letra con diseño con cordón"
                text="$MXN1490.00"
                buttonClass="btn btn-success"
                buttonContent="Comprar Ahora"
              />
              <Form />
              <P id="successMessage">¡Gracias por su compra!</P>
              <script src="script.js"></script>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
