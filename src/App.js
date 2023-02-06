import React from 'react'
import { Formik, Field, Form } from 'formik';
import schema from './schema';
import './App.css'

function App() {
  function onSubmit(value, actions){
    console.log("SUBMIT", value)

  }

  return (
    <div className="App">
      <Formik
      validationSchema={schema}
      onSubmit={onSubmit}
      initialValues={
        {
          name: '',
          email: ''
        }
      }
      render={({values, errors, isValid})=>(
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
        <button type='submit' disabled={!isValid}>enviar</button>
  
      </Form>

      )}
        />
    </div>
  );
}
export default App;
