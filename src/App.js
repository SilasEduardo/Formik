import React from 'react'
import { Formik, Field, Form } from 'formik';
import './App.css'

function App() {
  function onSubmit(value, actions){
    console.log("SUBMIT", value)

  }

  function validate(value){
    const errors = {}
    if(!value.name) {
      errors.name = 'Nome é obrigatorio'
    }

    if(!value.email) {
      errors.email = 'Email é obrigatorio'
    }

    return errors
  }
  return (
    <div className="App">
      <Formik
      validate={validate}
      onSubmit={onSubmit}
      initialValues={
        {
          name: '',
          email: ''
        }
      }
      render={({values, errors})=>(
        <Form >
        <div>
          <label>Nome</label>
          <Field name='name' type='text'/>
          {errors.name && (
            <span className='testError'>
              {errors.name}
            </span>
          )}
        </div>
        <div>
          <label>Email</label>
          <Field name='email'type='email'/>
          {errors.email && (
            <span className='testError'>
              {errors.email}
            </span>
          )}
        </div>
        <button type='submit'>enviar</button>
  
      </Form>

      )}
        />
    </div>
  );
}
export default App;
