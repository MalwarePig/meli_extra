import React from 'react'
import {Form,Label,Icon,FormField,Checkbox,Button} from 'semantic-ui-react'
import './LoginForm.scss'; // Importa estilos SCSS para el componente

export default function LoginForm() {
  return (
    <Form className="login-form">
    <FormField> 
      <input placeholder='Usuario' />
    </FormField>
    <FormField> 
      <input placeholder='Contraseña' />
    </FormField> 
    <Button type='submit'>Iniciar</Button>
  </Form>
  )
}
