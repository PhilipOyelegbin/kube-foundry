import { ImageProvider } from "../../../../utils/ImageProvider";

const categroyItems = [
  {
    image: ImageProvider.apartment,
    title: "Apartment",
    summary: "123 Properties",
  },
  {
    image: ImageProvider.housing,
    title: "Office",
    summary: "123 Properties",
  },
  {
    image: ImageProvider.condomium,
    title: "Shop",
    summary: "123 Properties",
  },
];

function CategorySection() {
  return (
    <section className='container-xxl py-5'>
      <div className='container'>
        <div
          className='text-center mx-auto mb-5'
          data-aos='fade-in'
          data-aos-easing='linear'
          data-aos-duration='1500'
          style={{ maxWidth: "600px" }}>
          <h1 className='mb-3'>Property Types</h1>
          <p>
            Browse a curated selection of property types, each listing verified
            for your peace of mind.
          </p>
        </div>
        <div className='row g-4'>
          {categroyItems.map((item, index) => (
            <div
              key={index}
              className='col-lg-4 col-sm-6'
              data-aos='fade-in'
              data-aos-easing='linear'
              data-aos-duration='1500'>
              <div className='cat-item d-block bg-light text-center rounded p-3'>
                <div className='rounded p-4'>
                  <div className='icon mb-3'>
                    <img
                      className='img-fluid'
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <h6>{item.title}</h6>
                  <span>{item.summary}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
