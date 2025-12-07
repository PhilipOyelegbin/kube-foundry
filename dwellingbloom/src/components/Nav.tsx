import { Link, NavLink } from "react-router-dom";
import { ImageProvider } from "../utils/ImageProvider";

const menuItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Property",
    url: "/property",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export default function Navbar() {
  // Sticky Navbar
  window.addEventListener("scroll", function () {
    if (window.scrollY > 45) {
      if (window.scrollY > 45) {
        document.querySelector(".nav-bar")?.classList.add("sticky-top");
      } else {
        document.querySelector(".nav-bar")?.classList.remove("sticky-top");
      }
    }
  });

  return (
    <header className='container-fluid nav-bar bg-transparent'>
      <nav className='navbar navbar-expand-lg bg-white navbar-light py-0 px-4'>
        <Link
          to='/'
          className='navbar-brand d-flex align-items-center text-center'>
          <div className='icon p-2 me-2'>
            <img
              className='img-fluid'
              src={ImageProvider.logo}
              alt='Icon'
              style={{ width: "30px", height: "30px" }}
            />
          </div>
          <h1 className='m-0 text-primary'>DB</h1>
        </Link>

        <button
          type='button'
          className='navbar-toggler'
          data-bs-toggle='collapse'
          data-bs-target='#navbarCollapse'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarCollapse'>
          <div className='navbar-nav ms-auto'>
            {menuItems.map((item, index) => (
              <NavLink key={index} to={item.url} className='nav-item nav-link'>
                {item.title}
              </NavLink>
            ))}
          </div>
          <Link to='/login' className='btn btn-primary px-3 d-none d-lg-flex'>
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
