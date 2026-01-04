import VWCLargeLogo from '../images/large_logo/vwc_full.png';
import VWCSmallLogo from '../images/small_logo/vwc_small.png';
import Navigation from './Navigation';

function Header() {
  return (
    <div className='navigation'>
      <div className='navbar navbar-expand'>
        {/* <NavLink className='navbar-brand' to='/'>
          VW Collective of Milwaukee
        </NavLink> */}
        <div className='home-page-image-container'>
          {/** Desktop */}
          <picture>
            <source
              media='(min-width: 650px)'
              srcset={`${VWCLargeLogo}`}
              alt='Volkswagen Collective of Milwaukee Large Logo'
            />
            <source
              srcset={`${VWCSmallLogo}`}
              alt='Volkswagen Collective of Milwaukee Small Logo'
            />
            <img
              src={`${VWCSmallLogo}`}
              alt='Volkswagen Collective of Milwaukee Small Logo'
            />
          </picture>
        </div>
        <Navigation />
      </div>
    </div>
  );
}

export default Header;
