import './App.css';
import React from 'react';

//import logo from './logo.svg';
// import ShowInverse from './[mock]pages/inverse-Show'
// import ShowDataHandle from './[mock]pages/ShowDataView'
// import PostDataHandle from './[mock]pages/PostDataView'

// import UpdateDataHandle from './[mock]pages/UpdatedataView'
// import DeleteDataHandle from './[mock]pages/DeleteDataView'

// import { ContainerProvider} from './[mock]services/NewContainer'

import { UserGetHandle, UserUpdateHandle, UserDeleteHandle } from './pages/UserView';
import { SignUpHandle, SignInHandle, SignOutHandle } from './pages/SignView';
import { NodeCreateHandle, NodeGetHandle, NodeUpdateHandle, NodeDeleteHandle } from './pages/NodeView';
import { LessonCreateHandle, LessonGetHandle, LessonUpdateHandle, LessonDeleteHandle } from './pages/LessonView';
import { CourseCreateHandle, CourseGetHandle, CourseUpdateHandle, CourseDeleteHandle } from './pages/CourseView';

import { ContainerProviderTendon } from './services/container';


function App() {
  return (
    <div className="App">
      <ContainerProviderTendon>
        {/* < UserGetHandle /> */}
        {/* < UserUpdateHandle />
        < UserDeleteHandle /> */}
        {/* < SignUpHandle />
        < SignInHandle />
        < SignOutHandle /> */}
        <hr></hr>
        <hr></hr>
        {/* < NodeCreateHandle /> */}
        < NodeGetHandle />
        {/* < NodeUpdateHandle />
        < NodeDeleteHandle />
        <hr></hr>
        <hr></hr>
        < LessonCreateHandle />
        < LessonGetHandle />
        < LessonUpdateHandle />
        < LessonDeleteHandle />
        <hr></hr>
        <hr></hr>
        < CourseCreateHandle />
        < CourseGetHandle />
        < CourseUpdateHandle />
        < CourseDeleteHandle /> */}
      </ContainerProviderTendon>

      {/* <ContainerProvider>
        < ShowInverse />
        < PostDataHandle />
        < UpdateDataHandle />
        < DeleteDataHandle />
        < ShowDataHandle />
      </ContainerProvider> */}
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
