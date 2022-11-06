import './App.css';
import React from 'react';
//import logo from './logo.svg';
import ShowInverse from './pages/inverse-Show'
import ShowDataHandle from './pages/ShowDataView'
import PostDataHandle from './pages/PostDataView'
// import DataPost from './pages/SendData_post'
// import DataUpdateCall from './pages/SendData_update'
import UpdateDataHandle from './pages/UpdatedataView'
import DataDeleteCall from './pages/SendData_delete'

function App() {
  return (
    <div className="App">
      < ShowInverse />
      < PostDataHandle />
      < UpdateDataHandle />
      < DataDeleteCall />
      < ShowDataHandle />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
