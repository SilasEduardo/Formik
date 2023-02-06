import React from 'react'
import { Formik, Field } from 'formik';

function App() {
  function onSubmit(){

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
        <form  >
        <div>
          <label>Nome</label>
          <Field name='name' type='text'/>
        </div>
        <div>
          <label>Email</label>
          <Field name='email'type='email'/>
        </div>
        <button type='submit'>enviar</button>
  
      </form>

      )}
        />
    </div>
  );
}
export default App;
