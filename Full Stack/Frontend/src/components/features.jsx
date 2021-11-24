export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        
        <div className='row'>
          <div className='col-md-10 col-md-offset-1 section-title'>
            <h2 font-size='small'>Características</h2>
          </div>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4'>
                {' '}
                <i className={d.icon}></i>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
                <br />
              </div>
            ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
