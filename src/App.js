import React from 'react'
import { Formik, Field, Form } from 'formik';

function App() {
  function onSubmit(value, actions){
    console.log("SUBMIT", value)

  }
  return (
    <div className="App">
      <Formik
      onSubmit={onSubmit}
      initialValues={
        {
          name: '',
          email: ''
        }
      }
      render={({values})=>(
        <Form >
        <div>
          <label>Nome</label>
          <Field name='name' type='text'/>
        </div>
        <div>
          <label>Email</label>
          <Field name='email'type='email'/>
        </div>
        <button type='submit'>enviar</button>
  
      </Form>

      )}
        />
    </div>
  );
}
export default App;
