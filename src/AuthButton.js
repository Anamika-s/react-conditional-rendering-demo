import React from 'react';

const AuthButton = props=>
{
  let {isLoggedIn} = props;
  if(isLoggedIn)
  return <button> LogOut </button>
  else
  return <button> Login </button>
};

export default  AuthButton;