import { Link, NavLink, useLocation } from "react-router-dom";
import { ImageProvider } from "../../utils/ImageProvider";

export default function Navbar() {
  const params = useLocation();

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

        <div className='ms-auto'>
          <NavLink
            to={params.pathname.includes("/login") ? "/register" : "/login"}>
            {params.pathname.includes("/login") && "Register"}{" "}
            {params.pathname.includes("/register") && "Login"}
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
