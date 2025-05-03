import React from 'react';
import {ReactComponent as ClassicBeetleIcon} from '../svg/noun-beetle-classic.svg';
import {ReactComponent as CurrentBeetleIcon} from '../svg/noun-beetle-current.svg';

function Home() {
  return (
    <div className='home'>
      <div class='container'>
        <img
          class='img-fluid rounded mb-4 mb-lg-0'
          src='http://placehold.it/900x400'
          alt=''
        />
      </div>
      <div class='col-lg-8'>
        <h1 class='font-weight-light'>Our Mission</h1>

        <p>
          Empowering Volkswagen enthusiasts and collectors through community
          engagement, education, and preservation our 501(c)(3) nonprofit is
          dedicated to fostering a passion for vintage, classic and modern
          Volkswagens while promoting sustainability, inclusivity, and the
          cultural significance of these iconic vehicles.
        </p>
        <div className='icon-container'>
          <ClassicBeetleIcon />
          <CurrentBeetleIcon />
        </div>
      </div>
    </div>
  );
}

export default Home;
