import { Link } from "react-router-dom";

function E404() {
  return (
    <section
      className='container-xxl py-5'
      data-aos='fade-up'
      data-aos-easing='linear'
      data-aos-duration='1500'>
      <div className='container text-center'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <i className='bi bi-exclamation-triangle display-1 text-primary'></i>
            <h1 className='display-1'>404</h1>
            <h1 className='mb-4'>Page Not Found</h1>
            <p className='mb-4'>
              We’re sorry, the page you have looked for does not exist in our
              website! Maybe go to our home page or try to use a search?
            </p>
            <Link className='btn btn-primary py-3 px-5' to='/'>
              Go Back To Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default E404;
