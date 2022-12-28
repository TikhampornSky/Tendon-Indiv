import './App.css';
import React from 'react';
//import logo from './logo.svg';
import ShowInverse from './pages_mock/inverse-Show'
import ShowDataHandle from './pages_mock/ShowDataView'
import PostDataHandle from './pages_mock/PostDataView'

import UpdateDataHandle from './pages_mock/UpdatedataView'
import DeleteDataHandle from './pages_mock/DeleteDataView'

import { ContainerProvider} from './services_mock/NewContainer'

import { AuthGetHandle, AuthUpdateHandle, AuthDeleteHandle } from './pages/AuthDataView';
import { SignUpHandle, SignInHandle } from './pages/SignDataView';
import { ContainerProviderTendon } from './service/container';

function App() {
  return (
    <div className="App">
      <ContainerProviderTendon>
        < AuthGetHandle />
        < AuthUpdateHandle />
        < AuthDeleteHandle />
        < SignUpHandle />
        <SignInHandle />
      </ContainerProviderTendon>

      <ContainerProvider>
        < ShowInverse />
        < PostDataHandle />
        < UpdateDataHandle />
        < DeleteDataHandle />
        < ShowDataHandle />
      </ContainerProvider>
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
