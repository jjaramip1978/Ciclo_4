
import '../components/styles/style-home.css';
import '../components/styles/bootstrap-home.css';
import '../components/styles/bootstrap-home.min.css';

export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div class="row">
          <div className='col-md-8 col-md-offset-2 section-title'>
            <h2>Conoce Nuestro Equipo</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
        </div>
        <div class="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className='col-md-2 col-sm-6 team'>
                <div className='thumbnail'>
                  {' '}
                  <img src={d.img} alt='...' className='team-img' />
                  <div className='caption'>
                    <h4>{d.name}</h4>
                    <p>{d.job}</p>
                  </div>
                </div>
              </div>
            ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
