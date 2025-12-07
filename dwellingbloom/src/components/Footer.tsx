import { Link } from "react-router-dom";
import { ImageProvider } from "../utils/ImageProvider";

export default function Footer() {
  const year = new Date().getFullYear();
  const navItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Help",
      url: "/help",
    },
    {
      title: "FAQs",
      url: "/faq",
    },
    {
      title: "Cookies",
      url: "/cookies",
    },
  ];

  const socialItems = [
    {
      href: "https://twitter.com",
      icon: <i className='bi bi-twitter'></i>,
    },
    {
      href: "https://facebook.com",
      icon: <i className='bi bi-facebook'></i>,
    },
    {
      href: "https://instagram.com",
      icon: <i className='bi bi-instagram'></i>,
    },
    {
      href: "https://linkedin.com",
      icon: <i className='bi bi-linkedin'></i>,
    },
  ];

  return (
    <footer
      className='container-fluid bg-dark text-white-50 footer pt-5 mt-5'
      data-aos='fade-in'
      data-aos-easing='linear'
      data-aos-duration='1500'>
      <div className='container py-5'>
        <div className='row g-5'>
          <div className='col-lg-4 col-md-6'>
            <h5 className='text-white mb-4'>Get In Touch</h5>
            <p className='mb-2'>
              <i className='fa fa-map-marker-alt me-3'></i>123 Street, New York,
              USA
            </p>
            <p className='mb-2'>
              <i className='fa fa-phone-alt me-3'></i>+012 345 67890
            </p>
            <p className='mb-2'>
              <i className='fa fa-envelope me-3'></i>info@example.com
            </p>
            <div className='d-flex pt-2'>
              {socialItems.map((item, index) => (
                <Link
                  key={index}
                  className='btn btn-outline-light btn-social me-2'
                  to={item.href}>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className='col-lg-4 col-md-6'>
            <h5 className='text-white mb-4'>Quick Links</h5>
            <Link className='btn btn-link text-white-50' to=''>
              About Us
            </Link>
            <Link className='btn btn-link text-white-50' to=''>
              Contact Us
            </Link>
            <Link className='btn btn-link text-white-50' to=''>
              Our Services
            </Link>
            <Link className='btn btn-link text-white-50' to=''>
              Privacy Policy
            </Link>
            <Link className='btn btn-link text-white-50' to=''>
              Terms & Condition
            </Link>
          </div>

          <div className='col-lg-4 col-md-6'>
            <h5 className='text-white mb-4'>Photo Gallery</h5>
            <div className='row g-2 pt-2'>
              <div className='col-4'>
                <img
                  className='img-fluid rounded bg-light p-1'
                  src={ImageProvider.property1}
                  alt=''
                />
              </div>
              <div className='col-4'>
                <img
                  className='img-fluid rounded bg-light p-1'
                  src={ImageProvider.property2}
                  alt=''
                />
              </div>
              <div className='col-4'>
                <img
                  className='img-fluid rounded bg-light p-1'
                  src={ImageProvider.property3}
                  alt=''
                />
              </div>
              <div className='col-4'>
                <img
                  className='img-fluid rounded bg-light p-1'
                  src={ImageProvider.property4}
                  alt=''
                />
              </div>
              <div className='col-4'>
                <img
                  className='img-fluid rounded bg-light p-1'
                  src={ImageProvider.property5}
                  alt=''
                />
              </div>
              <div className='col-4'>
                <img
                  className='img-fluid rounded bg-light p-1'
                  src={ImageProvider.property6}
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='copyright'>
          <div className='row'>
            <div className='col-md-6 text-center text-md-start mb-3 mb-md-0'>
              &copy; {year}{" "}
              <Link className='border-bottom' to='#'>
                DwellingBloom
              </Link>
              , All Right Reserved
            </div>
            <div className='col-md-6 text-center text-md-end'>
              <div className='footer-menu'>
                {navItems.map((item, index) => (
                  <Link key={index} to={item.url}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
