import React from 'react';

function Main() {
  return (
    <>
      <div>{localStorage.getItem('accessToken')}</div>
      <div>{localStorage.getItem('accessToken')}</div>
      <div>{localStorage.getItem('accessToken')}</div>
      <div>{localStorage.getItem('email')}</div>
    </>
  );
}

export default Main;
