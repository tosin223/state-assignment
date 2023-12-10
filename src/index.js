import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Input from './component/Input';
import Form from './component/FormOne';
import FormOne from './component/FormOne';
import FormTwo from './component/FormTwo';
import FormThree from './component/FormThree';
import FinalForm from './component/FinalForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Input /> */}
    {/* <FormOne />
    <FormTwo />
    <FormThree /> */}
    <FinalForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
