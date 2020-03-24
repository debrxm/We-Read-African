import React, { useState } from 'react';

import './sign-in-and-sign-up.scss';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const SignInAndSignUpPage = () => {
  const [renderSignin, setrenderSignin] = useState(true);
  const handleToggleSidebar = () => {
    setrenderSignin(!renderSignin);
  };
  return (
    <div className="sign-in-and-sign-up">
      {renderSignin ? (
        <SignIn handleToggleSidebar={handleToggleSidebar} />
      ) : (
        <SignUp handleToggleSidebar={handleToggleSidebar} />
      )}
    </div>
  );
};

export default SignInAndSignUpPage;
