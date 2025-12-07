import { Link } from "react-router-dom";
import { ImageProvider } from "../../../../utils/ImageProvider";

const shopItem = [
  {
    id: "1",
    image: ImageProvider.property1,
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    price: "12,345",
    bed: 3,
    bath: 2,
    size: 1000,
    categrory: "Shop",
    tag: "Sell",
  },
  {
    id: "2",
    image: ImageProvider.property2,
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    price: "12,345",
    bed: 3,
    bath: 2,
    size: 1000,
    categrory: "Shop",
    tag: "Rent",
  },
  {
    id: "3",
    image: ImageProvider.property3,
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    price: "12,345",
    bed: 3,
    bath: 2,
    size: 1000,
    categrory: "Shop",
    tag: "Sell",
  },
  {
    id: "4",
    image: ImageProvider.property4,
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    price: "12,345",
    bed: 3,
    bath: 2,
    size: 1000,
    categrory: "Shop",
    tag: "Rent",
  },
  {
    id: "5",
    image: ImageProvider.property5,
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    price: "12,345",
    bed: 3,
    bath: 2,
    size: 1000,
    categrory: "Shop",
    tag: "Sell",
  },
  {
    id: "6",
    image: ImageProvider.property6,
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    price: "12,345",
    bed: 3,
    bath: 2,
    size: 1000,
    categrory: "Shop",
    tag: "Rent",
  },
  {
    id: "7",
    image: ImageProvider.property1,
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    price: "12,345",
    bed: 3,
    bath: 2,
    size: 1000,
    categrory: "Shop",
    tag: "Sell",
  },
];

const appartmentItem = [
  {
    id: "1",
    image: ImageProvider.property1,
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    price: "12,345",
    bed: 3,
    bath: 2,
    size: 1000,
    categrory: "Apartment",
    tag: "Sell",
  },
  {
    id: "2",
    image: ImageProvider.property2,
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    price: "12,345",
    bed: 3,
    bath: 2,
    size: 1000,
    categrory: "Apartment",
    tag: "Rent",
  },
  {
    id: "3",
    image: ImageProvider.property3,
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    price: "12,345",
    bed: 3,
    bath: 2,
    size: 1000,
    categrory: "Apartment",
    tag: "Sell",
  },
  {
    id: "4",
    image: ImageProvider.property4,
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    price: "12,345",
    bed: 3,
    bath: 2,
    size: 1000,
    categrory: "Apartment",
    tag: "Rent",
  },
  {
    id: "5",
    image: ImageProvider.property5,
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    price: "12,345",
    bed: 3,
    bath: 2,
    size: 1000,
    categrory: "Apartment",
    tag: "Sell",
  },
  {
    id: "6",
    image: ImageProvider.property6,
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    price: "12,345",
    bed: 3,
    bath: 2,
    size: 1000,
    categrory: "Apartment",
    tag: "Rent",
  },
  {
    id: "7",
    image: ImageProvider.property1,
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    price: "12,345",
    bed: 3,
    bath: 2,
    size: 1000,
    categrory: "Apartment",
    tag: "Sell",
  },
];

const officeItem = [
  {
    id: "1",
    image: ImageProvider.property1,
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    price: "12,345",
    bed: 3,
    bath: 2,
    size: 1000,
    categrory: "Office",
    tag: "Sell",
  },
  {
    id: "2",
    image: ImageProvider.property2,
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    price: "12,345",
    bed: 3,
    bath: 2,
    size: 1000,
    categrory: "Office",
    tag: "Rent",
  },
  {
    id: "3",
    image: ImageProvider.property3,
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    price: "12,345",
    bed: 3,
    bath: 2,
    size: 1000,
    categrory: "Office",
    tag: "Sell",
  },
  {
    id: "4",
    image: ImageProvider.property4,
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    price: "12,345",
    bed: 3,
    bath: 2,
    size: 1000,
    categrory: "Office",
    tag: "Rent",
  },
  {
    id: "5",
    image: ImageProvider.property5,
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    price: "12,345",
    bed: 3,
    bath: 2,
    size: 1000,
    categrory: "Office",
    tag: "Sell",
  },
  {
    id: "6",
    image: ImageProvider.property6,
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    price: "12,345",
    bed: 3,
    bath: 2,
    size: 1000,
    categrory: "Office",
    tag: "Rent",
  },
  {
    id: "7",
    image: ImageProvider.property1,
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    price: "12,345",
    bed: 3,
    bath: 2,
    size: 1000,
    categrory: "Office",
    tag: "Sell",
  },
];

function PropertyListSection() {
  return (
    <section className='container-xxl py-5'>
      <div className='container'>
        <div className='row g-0 gx-5 align-items-end'>
          <div className='col-lg-6'>
            <div
              className='text-start mx-auto mb-5'
              data-aos='fade-in'
              data-aos-easing='linear'
              data-aos-duration='1500'>
              <h1 className='mb-3'>Property Listing</h1>
              <p>
                Explore verified listings across a wide range of properties.
                From cozy apartments to spacious family homes, connect directly
                with trusted homeowners and rent with confidence, free from
                fraud.
              </p>
            </div>
          </div>

          <div
            className='col-lg-6 text-start text-lg-end'
            data-aos='fade-in'
            data-aos-easing='linear'
            data-aos-duration='1500'>
            <ul className='nav nav-pills d-inline-flex gap-2 md:justify-content-end justify-content-center mb-5'>
              <li className='nav-item me-2'>
                <Link
                  className='btn btn-outline-primary active'
                  data-bs-toggle='pill'
                  to='#tab-1'>
                  Appartments
                </Link>
              </li>
              <li className='nav-item me-2'>
                <Link
                  className='btn btn-outline-primary'
                  data-bs-toggle='pill'
                  to='#tab-2'>
                  Shops
                </Link>
              </li>
              <li className='nav-item me-0'>
                <Link
                  className='btn btn-outline-primary'
                  data-bs-toggle='pill'
                  to='#tab-3'>
                  Offices
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='tab-content'>
          <div id='tab-1' className='tab-pane fade show p-0 active'>
            <div className='row g-4'>
              {appartmentItem.map((item) => (
                <div
                  key={item.id}
                  className='col-lg-4 col-md-6'
                  data-aos='fade-up'
                  data-aos-easing='linear'
                  data-aos-duration='1500'>
                  <div className='property-item rounded overflow-hidden'>
                    <div className='position-relative overflow-hidden'>
                      <Link to={`/${item.id}`}>
                        <img
                          className='img-fluid'
                          src={item.image}
                          alt={item.title}
                        />
                      </Link>
                      <div className='bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>
                        For {item.tag}
                      </div>
                      <div className='bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>
                        {item.categrory}
                      </div>
                    </div>
                    <div className='p-4 pb-0'>
                      <h5 className='text-primary mb-3'>₦{item.price}</h5>
                      <Link className='d-block h5 mb-2' to={`/${item.id}`}>
                        {item.title}
                      </Link>
                      <p>
                        <i className='fa fa-map-marker-alt text-primary me-2'></i>
                        {item.location}
                      </p>
                    </div>
                    <div className='d-flex border-top'>
                      <small className='flex-fill text-center border-end py-2'>
                        <i className='fa fa-ruler-combined text-primary me-2'></i>
                        {item.size} Sqft
                      </small>
                      <small className='flex-fill text-center border-end py-2'>
                        <i className='fa fa-bed text-primary me-2'></i>
                        {item.bed} Bed
                      </small>
                      <small className='flex-fill text-center py-2'>
                        <i className='fa fa-bath text-primary me-2'></i>
                        {item.bath} Bath
                      </small>
                    </div>
                  </div>
                </div>
              ))}

              {/* Pagination Start */}
              <div className='col-12 text-center'>
                <nav className='d-inline-flex'>
                  <ul className='pagination'>
                    <li className='page-item'>
                      <Link className='page-link' to='#'>
                        <i className='fa fa-angle-left'></i>
                      </Link>
                    </li>
                    <li className='page-item'>
                      <Link className='page-link' to='#'>
                        1
                      </Link>
                    </li>
                    <li className='page-item'>
                      <Link className='page-link' to='#'>
                        2
                      </Link>
                    </li>
                    <li className='page-item'>
                      <Link className='page-link' to='#'>
                        3
                      </Link>
                    </li>
                    <li className='page-item'>
                      <Link className='page-link' to='#'>
                        <i className='fa fa-angle-right'></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* Pagination End */}
            </div>
          </div>

          <div id='tab-2' className='tab-pane fade show p-0'>
            <div className='row g-4'>
              {shopItem.map((item) => (
                <div
                  key={item.id}
                  className='col-lg-4 col-md-6'
                  data-aos='fade-up'
                  data-aos-easing='linear'
                  data-aos-duration='1500'>
                  <div className='property-item rounded overflow-hidden'>
                    <div className='position-relative overflow-hidden'>
                      <Link to={`/${item.id}`}>
                        <img
                          className='img-fluid'
                          src={item.image}
                          alt={item.title}
                        />
                      </Link>
                      <div className='bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>
                        For {item.tag}
                      </div>
                      <div className='bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>
                        {item.categrory}
                      </div>
                    </div>
                    <div className='p-4 pb-0'>
                      <h5 className='text-primary mb-3'>₦{item.price}</h5>
                      <Link className='d-block h5 mb-2' to={`/${item.id}`}>
                        {item.title}
                      </Link>
                      <p>
                        <i className='fa fa-map-marker-alt text-primary me-2'></i>
                        {item.location}
                      </p>
                    </div>
                    <div className='d-flex border-top'>
                      <small className='flex-fill text-center border-end py-2'>
                        <i className='fa fa-ruler-combined text-primary me-2'></i>
                        {item.size} Sqft
                      </small>
                      <small className='flex-fill text-center border-end py-2'>
                        <i className='fa fa-bed text-primary me-2'></i>
                        {item.bed} Bed
                      </small>
                      <small className='flex-fill text-center py-2'>
                        <i className='fa fa-bath text-primary me-2'></i>
                        {item.bath} Bath
                      </small>
                    </div>
                  </div>
                </div>
              ))}

              {/* Pagination Start */}
              <div className='col-12 text-center'>
                <nav className='d-inline-flex'>
                  <ul className='pagination'>
                    <li className='page-item'>
                      <Link className='page-link' to='#'>
                        <i className='fa fa-angle-left'></i>
                      </Link>
                    </li>
                    <li className='page-item'>
                      <Link className='page-link' to='#'>
                        1
                      </Link>
                    </li>
                    <li className='page-item'>
                      <Link className='page-link' to='#'>
                        2
                      </Link>
                    </li>
                    <li className='page-item'>
                      <Link className='page-link' to='#'>
                        3
                      </Link>
                    </li>
                    <li className='page-item'>
                      <Link className='page-link' to='#'>
                        <i className='fa fa-angle-right'></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* Pagination End */}
            </div>
          </div>

          <div id='tab-3' className='tab-pane fade show p-0'>
            <div className='row g-4'>
              {officeItem.map((item) => (
                <div
                  key={item.id}
                  className='col-lg-4 col-md-6'
                  data-aos='fade-up'
                  data-aos-easing='linear'
                  data-aos-duration='1500'>
                  <div className='property-item rounded overflow-hidden'>
                    <div className='position-relative overflow-hidden'>
                      <Link to={`/${item.id}`}>
                        <img
                          className='img-fluid'
                          src={item.image}
                          alt={item.title}
                        />
                      </Link>
                      <div className='bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>
                        For {item.tag}
                      </div>
                      <div className='bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3'>
                        {item.categrory}
                      </div>
                    </div>
                    <div className='p-4 pb-0'>
                      <h5 className='text-primary mb-3'>₦{item.price}</h5>
                      <Link className='d-block h5 mb-2' to={`/${item.id}`}>
                        {item.title}
                      </Link>
                      <p>
                        <i className='fa fa-map-marker-alt text-primary me-2'></i>
                        {item.location}
                      </p>
                    </div>
                    <div className='d-flex border-top'>
                      <small className='flex-fill text-center border-end py-2'>
                        <i className='fa fa-ruler-combined text-primary me-2'></i>
                        {item.size} Sqft
                      </small>
                      <small className='flex-fill text-center border-end py-2'>
                        <i className='fa fa-bed text-primary me-2'></i>
                        {item.bed} Bed
                      </small>
                      <small className='flex-fill text-center py-2'>
                        <i className='fa fa-bath text-primary me-2'></i>
                        {item.bath} Bath
                      </small>
                    </div>
                  </div>
                </div>
              ))}

              {/* Pagination Start */}
              <div className='col-12 text-center'>
                <nav className='d-inline-flex'>
                  <ul className='pagination'>
                    <li className='page-item'>
                      <Link className='page-link' to='#'>
                        <i className='fa fa-angle-left'></i>
                      </Link>
                    </li>
                    <li className='page-item'>
                      <Link className='page-link' to='#'>
                        1
                      </Link>
                    </li>
                    <li className='page-item'>
                      <Link className='page-link' to='#'>
                        2
                      </Link>
                    </li>
                    <li className='page-item'>
                      <Link className='page-link' to='#'>
                        3
                      </Link>
                    </li>
                    <li className='page-item'>
                      <Link className='page-link' to='#'>
                        <i className='fa fa-angle-right'></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* Pagination End */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyListSection;
