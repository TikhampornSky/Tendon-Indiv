import React, { useState } from 'react';
import SignPage from './admin_sign_page';

import { SignUpHandle, SignInHandle, SignOutHandle } from '../pages/SignView';

import { ContainerProviderTendon } from '../services/container';

interface showComponentModel {
  showSignUp: boolean,
  showSignIn: boolean,
  showSignOut: boolean
}

function AdminSign() {
  const [show, setShow] = useState<showComponentModel>({showSignUp: false, showSignIn: false, showSignOut: false})

  function submitHandle (method: string) {
    if (method === "SignUp") {
      setShow({showSignUp: !show.showSignUp, showSignIn: show.showSignIn, showSignOut: show.showSignOut})
    } else if (method === "SignIn") {
      setShow({showSignUp: show.showSignUp, showSignIn: !show.showSignIn, showSignOut: show.showSignOut})
    } else {
      setShow({showSignUp: show.showSignUp, showSignIn: show.showSignIn, showSignOut: !show.showSignOut})
    }
  }

  return (
    <div className="App">
      < SignPage />
      {/* <ContainerProviderTendon>
        < SignUpHandle />
        < SignInHandle />
        < SignOutHandle />
      </ContainerProviderTendon> */}
    </div>
  );
}

export default AdminSign;
