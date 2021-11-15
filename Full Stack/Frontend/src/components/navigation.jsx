import {Link, NavLink} from 'react-router-dom';

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          {/* <img src="img/logo2.png" className="img-round" alt="" /> */}
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <div className='navbar-logo'>
            <Link className='navbar-brand page-scroll' to='/'>
              INGENIO
            </Link>{' '}
          </div>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <NavLink to='/registro' className='page-scroll'>
                Sing up
              </NavLink>
            </li>
            <li>
              <NavLink to='/' className='page-scroll'>
                Sing in
              </NavLink>
            </li>
            <li>
              <NavLink to='/buscador' className='page-scroll'>
                Buscador
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
