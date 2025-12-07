import { Link } from "react-router-dom";
import { ImageProvider } from "../../../../utils/ImageProvider";

function AboutSection() {
  return (
    <section className='container-xxl py-5'>
      <div className='container'>
        <div className='row g-5 align-items-center'>
          <div
            className='col-lg-6'
            data-aos='fade-in'
            data-aos-easing='linear'
            data-aos-duration='1500'>
            <div className='about-img position-relative overflow-hidden p-5 pe-0'>
              <img
                className='img-fluid w-100'
                src={ImageProvider.about}
                alt='snapshot of a cool home'
              />
            </div>
          </div>
          <div
            className='col-lg-6'
            data-aos='fade-in'
            data-aos-easing='linear'
            data-aos-duration='1500'>
            <h1 className='mb-4'>#1 Place To Find The Perfect Dwelling</h1>
            <p className='mb-4'>
              Cut out the agents and eliminate hidden fees. Our platform
              connects you with genuine homeowners in Lagos, ensuring a
              transparent and secure rental experience. Find your next home
              without the stress and extra costs.
            </p>
            <p>
              <i className='fa fa-check text-primary me-3'></i>Secure
            </p>
            <p>
              <i className='fa fa-check text-primary me-3'></i>Simple
            </p>
            <p>
              <i className='fa fa-check text-primary me-3'></i>Reliable
            </p>
            <Link className='btn btn-primary py-3 px-5 mt-3' to='/about'>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
