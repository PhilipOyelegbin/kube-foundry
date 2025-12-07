import { ImageProvider } from "../../../../utils/ImageProvider";

function HeroSection() {
  return (
    <section className='container-fluid header bg-white p-0'>
      <div className='row g-0 align-items-center flex-column-reverse flex-md-row'>
        <div className='col-md-6 p-5 mt-lg-5'>
          <h1
            className='display-5'
            data-aos='fade-in'
            data-aos-easing='linear'
            data-aos-duration='1500'>
            Properties
          </h1>
          <nav
            aria-label='breadcrumb'
            data-aos='fade-in'
            data-aos-easing='linear'
            data-aos-duration='1500'>
            <ol className='breadcrumb text-uppercase'>
              <li className='breadcrumb-item'>
                <a href='#'>Home</a>
              </li>
              <li className='breadcrumb-item'>
                <a href='#'>Pages</a>
              </li>
              <li
                className='breadcrumb-item text-body active'
                aria-current='page'>
                Property
              </li>
            </ol>
          </nav>
        </div>
        <div
          className='col-md-6'
          data-aos='fade-in'
          data-aos-easing='linear'
          data-aos-duration='1500'>
          <img className='img-fluid' src={ImageProvider.header} alt='' />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
