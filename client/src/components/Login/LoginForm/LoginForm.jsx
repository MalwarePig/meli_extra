import React from 'react'
import {Form,Label,Icon,FormField,Checkbox,Button} from 'semantic-ui-react'
import './LoginForm.scss'; // Importa estilos SCSS para el componente

export default function LoginForm() {
  return (
    <Form className="login-form">
    <FormField>
      <label>First Name</label>
      <input placeholder='First Name' />
    </FormField>
    <FormField>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </FormField>
    <FormField>
      <Checkbox label='I agree to the Terms and Conditions' />
    </FormField>
    <Button type='submit'>Submit</Button>
  </Form>
  )
}
