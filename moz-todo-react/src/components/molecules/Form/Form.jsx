import React from "react";
import Label from '../../atoms/Label/Label';
import Input from "../../atoms/Input/Input";
import './Form.css';

const Form = () => {
    return (
        <form id="myForm">
            <Label className="className" htmlFor="name" children="Nombre:"/>
            <Input type="text" id="name" name="name" />
            <br />

            <Label className="className" htmlFor="email" children="Correo Electrónico:"/>
            <Input type="email" id="email" name="email" />
            <br />

            <Label className="className" htmlFor="tel" children="Número telefónico:"/>
            <Input type="tel" id="tel" name="tel" />
            <br />

            <Label className="className" htmlFor="direccion" children="Dirección:"/>
            <Input type="text" id="direccion" name="direccion" />
            <br />

            <Input type="submit" value="Enviar" />
        </form>
    );
}

export default Form;
