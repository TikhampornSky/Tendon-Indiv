import React, { useState } from 'react';

import { SignUpHandle, SignInHandle, SignOutHandle } from '../pages/SignView';
import SignPage, { SignUpPage } from './admin_sign_page';
import { SignInPage } from './admin_sign_page';
import { SignOutPage } from './admin_sign_page';

import { ContainerProviderTendon } from '../services/container';

function AdminSign() {

  return (
    <div className="App">
      <SignPage />
      {/* <ContainerProviderTendon>
        < SignUpHandle />
        < SignInHandle />
        < SignOutHandle />
      </ContainerProviderTendon> */}
    </div>
  );
}

export default AdminSign;
