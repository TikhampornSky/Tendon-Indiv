import React from 'react';

import { SignUpHandle, SignInHandle, SignOutHandle } from '../pages/SignView';

import { ContainerProviderTendon } from '../services/container';


function AdminSign() {
  return (
    <div className="App">
      <ContainerProviderTendon>
        < SignUpHandle />
        < SignInHandle />
        < SignOutHandle />
      </ContainerProviderTendon>
    </div>
  );
}

export default AdminSign;
