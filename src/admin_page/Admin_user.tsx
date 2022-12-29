import React from 'react';

import { UserGetHandle, UserUpdateHandle, UserDeleteHandle } from '../pages/UserView';

import { ContainerProviderTendon } from '../services/container';


function AdminUser() {
  return (
    <div className="App">
      <ContainerProviderTendon>
        < UserGetHandle />
        < UserUpdateHandle />
        < UserDeleteHandle />
      </ContainerProviderTendon>
    </div>
  );
}

export default AdminUser;
