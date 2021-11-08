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
            <a className='navbar-brand page-scroll' href='#page-top'>
              INGENIO
            </a>{' '}
          </div>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Características
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Servicios
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonios
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
