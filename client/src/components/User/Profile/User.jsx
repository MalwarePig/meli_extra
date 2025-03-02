import React from "react";
import {
  Form,
  Label,
  Icon,
  FormField,
  FormGroup,
  Checkbox,
  Button,
} from "semantic-ui-react";
import "./User.scss";

export default function User() {
  return (
    <>
      <h5 className="register-form-tittle">Perfil</h5>
      <Form className="register-form">
        <FormField> 
          <input placeholder="ID de Conductor" value={'1702861'}></input>
        </FormField>
        <FormField> 
          <input placeholder="Nombre y apellido" value={'Sergio Magaña'}></input>
        </FormField>
        <FormField> 
          <input placeholder="Celular" value={'8126156944'}></input>
        </FormField> 

        <FormField> 
          <input placeholder="Placas" value={'SVJA33A'}></input>
        </FormField>

        <FormField> 
          <input placeholder="Modelo" value={'Gol 2020'}></input>
        </FormField>

        <FormField> 
          <input placeholder="Tipo de vehiculo" value={'HatchBack'}></input>
        </FormField> 
        <Button type="submit"><Icon name='edit'/>Editar</Button>
      </Form>
    </>
  );
}
