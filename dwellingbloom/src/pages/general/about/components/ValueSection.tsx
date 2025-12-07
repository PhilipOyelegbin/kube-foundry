import { ImageProvider } from "../../../../utils/ImageProvider";

function ValueSection() {
  return (
    <section className='container-xxl py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h2
              className='section-title'
              data-aos='fade-in'
              data-aos-easing='linear'
              data-aos-duration='1500'>
              About Us
            </h2>
            <p
              className='section-description'
              data-aos='fade-in'
              data-aos-easing='linear'
              data-aos-duration='1500'>
              Navigating the Nigerian rental market can often feel like
              traversing a minefield. Tales of fraudulent listings, shady
              agents, and hidden fees are all too common. At DwellingBloom, we
              believe finding a home should be a positive, secure, and
              transparent experience. That's why we’ve built a platform
              dedicated to transforming the rental landscape in Lagos, Nigeria.
            </p>
            <h5
              data-aos='fade-in'
              data-aos-easing='linear'
              data-aos-duration='1500'>
              The Problem: A Market Rife with Uncertainty
            </h5>
            <p
              className='section-description'
              data-aos='fade-in'
              data-aos-easing='linear'
              data-aos-duration='1500'>
              For too long, renters have faced the daunting task of sifting
              through countless listings, unsure of their authenticity. The fear
              of being scammed or misled has created a climate of distrust,
              hindering the ability of genuine homeowners and tenants to
              connect. Similarly, homeowners struggle to find reliable tenants,
              often burdened with the costs and uncertainties of traditional
              rental processes.
            </p>
          </div>
          <div
            className='col-md-6'
            data-aos='fade-up'
            data-aos-easing='linear'
            data-aos-duration='1500'>
            <img
              src={ImageProvider.property5}
              alt='About Image'
              className='img-fluid'
            />
          </div>
        </div>
        <div className='row'>
          <div
            className='col-md-12'
            data-aos='fade-in'
            data-aos-easing='linear'
            data-aos-duration='1500'>
            <h3 className='section-subtitle'>Our Values</h3>
            <ul className='list-unstyled'>
              <li>
                <i className='fas fa-lock text-primary me-3'></i>{" "}
                <strong>Security</strong>: We prioritize the security of our
                users' personal and financial information.
              </li>
              <li>
                <i className='fas fa-handshake text-primary me-3'></i>{" "}
                <strong>Trust</strong>: We strive to build trust between
                homeowners and renters through our verification process.
              </li>
              <li>
                <i className='fas fa-home text-primary me-3'></i>{" "}
                <strong>Quality</strong>: We aim to provide high-quality
                listings and a seamless user experience.
              </li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div
            className='col-md-12'
            data-aos='fade-in'
            data-aos-easing='linear'
            data-aos-duration='1500'>
            <h3 className='section-subtitle'>Our Goal</h3>
            <p className='section-description'>
              Our goal is to become the go-to platform for house rentals,
              providing a safe and reliable experience for both homeowners and
              renters. We aim to achieve this by continuously improving our
              services and features, and by fostering a community of trustworthy
              users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValueSection;
