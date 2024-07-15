import React from "react";
import Barra from "../../templates/Barra/Barra";
import Card from "../../molecules/Card/Card";
import Suplemento1 from '../../../assets/img/cc.jpeg';
import Suplemento2 from '../../../assets/img/tes.jpeg';
import Suplemento3 from '../../../assets/img/bb.jpeg';
import Suplemento4 from '../../../assets/img/ww.jpeg';
import Suplemento5 from '../../../assets/img/aa.jpeg';
import Suplemento6 from '../../../assets/img/yy.jpeg';
import Suplemento7 from '../../../assets/img/uu.jpeg';
import Suplemento8 from '../../../assets/img/dd.jpeg';
import './Suplementos.css';

const Suplementos = () => {
  return (
    <div>
      <Barra />
      <div className="container-fluid5">
        <div className="row">
          <div className="col-12 col-lg-3">
            <Card
              imgSrc={Suplemento1}
              imgAlt="Suplemento en polvo Meta Nutrition Creatine + creatina en sachet de 500g"
              title="Suplemento en polvo Meta Nutrition Creatine + creatina en sachet de 500g"
              text="$MXN498.00"
              buttonClass="btn btn-success"
              buttonContent="Comprar Ahora"
            />
          </div>
          <div className="col-17 col-lg-7">
            <Card
              imgSrc={Suplemento2}
              imgAlt="Testosterona Boooster (60 capsulas)"
              title="Testosterona Boooster (60 capsulas)"
              text="$MXN1066.00"
              buttonClass="btn btn-success"
              buttonContent="Comprar Ahora"
            />
          </div>
          <div className="col-17 col-lg-7">
            <Card
              imgSrc={Suplemento3}
              imgAlt="Gold Whey Protein 2.27 kg"
              title="Gold Whey Protein 2.27 kg"
              text="$MXN1519.00"
              buttonClass="btn btn-success"
              buttonContent="Comprar Ahora"
            />
          </div>
          <div className="col-17 col-lg-7">
            <Card
              imgSrc={Suplemento4}
              imgAlt="Evolution proteina de suero de leche"
              title="Evolution proteina de suero de leche"
              text="$MXN895.00"
              buttonClass="btn btn-success"
              buttonContent="Comprar Ahora"
            />
          </div>
          <div className="col-17 col-lg-7">
            <Card
              imgSrc={Suplemento5}
              imgAlt="Creatina monohidratada pura 500 kg sin saborizante"
              title="Creatina monohidratada pura 500 kg sin saborizante"
              text="$MXN568.00"
              buttonClass="btn btn-success"
              buttonContent="Comprar Ahora"
            />
          </div>
          <div className="col-17 col-lg-7">
            <Card
              imgSrc={Suplemento6}
              imgAlt="INS PSYCHOTIC GOLD 35 servicios"
              title="INS PSYCHOTIC GOLD 35 servicios"
              text="$MXN720.00"
              buttonClass="btn btn-success"
              buttonContent="Comprar Ahora"
            />
          </div>
          <div className="col-17 col-lg-7">
            <Card
              imgSrc={Suplemento7}
              imgAlt="BPI Sports BEST BCAA 30 ser Blue Raspberry"
              title="BPI Sports BEST BCAA 30 ser Blue Raspberry"
              text="$MXN480.00"
              buttonClass="btn btn-success"
              buttonContent="Comprar Ahora"
            />
          </div>
          <div className="col-17 col-lg-7">
            <Card
              imgSrc={Suplemento8}
              imgAlt="Falcon performance choco bronce 722 gr"
              title="Falcon performance choco bronce 722 gr"
              text="$MXN551.00"
              buttonClass="btn btn-success"
              buttonContent="Comprar Ahora"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Suplementos;
