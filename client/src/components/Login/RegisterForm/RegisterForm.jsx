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


export default function RegisterForm() {
  return ( 
     
      <Form>
        <FormField>
          <label>ID de Conductor </label>
          <input placeholder="Ej: 291753"></input>
        </FormField>
        <FormField>
          <label>Nombre y apellido </label>
          <input placeholder="Ej: 291753"></input>
        </FormField>
        <FormField>
          <label>Numero de teléfono </label>
          <input placeholder="Ej: 291753"></input>
        </FormField>
        <FormField>
          <label>Horario de carga</label>
          <input placeholder="Ej: 291753"></input>
        </FormField>
        <FormField>
          <label>Placas</label>
          <input placeholder="Ej: 291753"></input>
        </FormField>

        <FormField>
          <label>Modelo</label>
          <input placeholder="Ej: 291753"></input>
        </FormField>

        <FormGroup grouped>
          <label>Tipo de vehiculo:</label>
          <FormField
            label="sedan"
            control="input"
            type="radio"
            name="htmlRadios"
          />
          <FormField
            label="Camioneta"
            control="input"
            type="radio"
            name="htmlRadios"
          />
          <FormField
            label="Otro"
            control="input"
            type="radio"
            name="htmlRadios"
          />
          <input placeholder="Tipo?"></input>
        </FormGroup>
        <Button type='submit'>Guardar</Button>
      </Form> 
  );
}
