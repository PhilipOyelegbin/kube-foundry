import { Link } from "react-router-dom";

const buttonItems = [
  {
    label: "Sign in as a client",
    path: "/login/user",
    icon: <i className='bi bi-person-circle fs-2 me-3'></i>,
  },
  {
    label: "Sign in as a home owner",
    path: "/login/vendor",
    icon: <i className='bi bi-person-badge-fill fs-2 me-3'></i>,
  },
];

function UserAuth() {
  document.title = "Login: DwellingBloom";

  return (
    <article className='container-xxl bg-white p-0 h-screen'>
      <div className='container vh-100 d-flex flex-column justify-content-center'>
        <div
          className='text-center mx-auto mb-5'
          data-aos='fade-in'
          data-aos-easing='linear'
          data-aos-duration='1500'
          style={{ maxWidth: "600px" }}>
          <h3 className='mb-3'>Please select your role to get started.</h3>
        </div>

        <div className='row g-4'>
          {buttonItems.map((item, index) => (
            <div
              key={index}
              className='col-lg-6 col-sm-6 mb-5'
              data-aos='fade-in'
              data-aos-easing='linear'
              data-aos-duration='1500'>
              <Link
                to={item.path}
                className='cat-item d-block bg-light text-center rounded p-3'>
                <div className='rounded p-4 d-flex justify-content-center align-items-center'>
                  {item.icon}
                  <h6>{item.label}</h6>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default UserAuth;
