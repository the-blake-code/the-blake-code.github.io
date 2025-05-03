import React from 'react';

function About() {
  return (
    <div className='about'>
      <div class='container'>
        <div class='col-lg-7'>
          <img
            class='img-fluid rounded mb-4 mb-lg-0'
            src='http://placehold.it/900x400'
            alt=''
          />
        </div>
        <div class='col-lg-5'>
          <h1 class='font-weight-light'>About</h1>
          <p>
            <span class='s1'>
              “Beetle” icons used on the Home page are by John Burraco from{' '}
              <a
                href='https://thenounproject.com/browse/icons/term/beetle/'
                target='_self'
                rel='undefined'
              >
                Noun Project.
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
