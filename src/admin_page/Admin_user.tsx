import React from 'react';
import './user_page.css'
import UserInputPage from './user_page';

import { UserGetHandle, UserUpdateHandle, UserDeleteHandle } from '../pages/UserView';

import { ContainerProviderTendon } from '../services/container';


function AdminUser() {
  return (
    <div className="App">
      <div> 
        <UserInputPage method ="GET" />
      </div>  
      <UserInputPage method ="UPDATE" />
      <UserInputPage method ="DELETE" />
      {/* <ContainerProviderTendon>
        < UserGetHandle />
        < UserUpdateHandle />
        < UserDeleteHandle />
      </ContainerProviderTendon> */}
    </div>
  );
}

export default AdminUser;
