import React from 'react';
import ReactDOM from 'react-dom';
import A11y from './components/A11y';
import './index.css';



const Home = () =>{
  return (
    <div>
      <A11y />
    </div>
  )
}

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);

