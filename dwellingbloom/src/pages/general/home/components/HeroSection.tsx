import { Link } from "react-router-dom";
import { ImageProvider } from "../../../../utils/ImageProvider";

function HeroSection() {
  return (
    <section className='container-fluid header bg-white p-0'>
      <div className='row g-0 align-items-center flex-column-reverse flex-md-row'>
        <div className='col-md-6 p-5 mt-lg-5'>
          <h1
            className='display-5 mb-4'
            data-aos='fade-in'
            data-aos-easing='linear'
            data-aos-duration='1500'>
            Tired of rental <span className='text-primary'>scams</span>? Find
            your dream apartment with confidence!
          </h1>
          <p
            className='mb-4 pb-2'
            data-aos='fade-in'
            data-aos-easing='linear'
            data-aos-duration='1500'>
            We're revolutionizing house renting in Lagos, Nigeria by connecting
            you directly with verified homeowners. Browse genuine listings, skip
            the middlemen, and say goodbye to rental fraud. Your safe and secure
            home is just a click away
          </p>
          <Link
            to='/register'
            className='btn btn-primary py-3 px-5 me-3'
            data-aos='fade-in'
            data-aos-easing='linear'
            data-aos-duration='1500'>
            Get Started
          </Link>
        </div>
        <div
          className='col-md-6'
          data-aos='fade-in'
          data-aos-easing='linear'
          data-aos-duration='1500'>
          <img className='img-fluid' src={ImageProvider.carousel1} alt='' />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
