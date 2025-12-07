import useEmblaCarousel from "embla-carousel-react";
import { ImageProvider } from "../../../../utils/ImageProvider";
import { useCallback } from "react";

const testimonialItem = [
  {
    id: 1,
    name: "Funke T.",
    image: ImageProvider.testimonial1,
    comment:
      "I appreciate the security measures this website has in place. It gave me the confidence to rent without worrying about fraud.",
  },
  {
    id: 2,
    name: "Emeka P.",
    image: ImageProvider.testimonial2,
    comment:
      "The communication with the homeowner was excellent. They were responsive and helpful throughout the entire process",
  },
  {
    id: 3,
    name: "Blessing U.",
    image: ImageProvider.testimonial3,
    comment:
      "I found a beautiful apartment at a great price! This platform is a game-changer for renting in Nigeria.",
  },
  {
    id: 4,
    name: "Aisha M.",
    image: ImageProvider.testimonial4,
    comment:
      "No more dealing with shady agents! I loved being able to communicate directly with the homeowner. It made the whole process transparent and stress-free.",
  },
  {
    id: 5,
    name: "Sarah K.",
    image: ImageProvider.testimonial4,
    comment:
      "I was so nervous about renting online, but this platform made it easy and safe. Knowing I was dealing directly with the homeowner gave me peace of mind.",
  },
  {
    id: 6,
    name: " Tunde L.",
    image: ImageProvider.testimonial4,
    comment:
      "I was able to schedule viewings directly with the homeowners, which saved me so much time. The whole process was incredibly efficient.",
  },
];

function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className='container-xxl py-5'>
      <div
        className='text-center mx-auto mb-5'
        data-aos='fade-up'
        data-aos-easing='linear'
        data-aos-duration='1500'
        style={{ maxWidth: "600px" }}>
        <h1 className='mb-3'>Real Stories from Real Renters</h1>
      </div>

      <div
        className='embla testimonial-carousel'
        ref={emblaRef}
        data-aos='fade-up'
        data-aos-easing='linear'
        data-aos-duration='1500'>
        <div className='embla__container'>
          {testimonialItem?.map((item) => (
            <div
              key={item.id}
              className='embla__slide testimonial-item bg-light rounded p-3'>
              <div className='bg-white border rounded p-4'>
                <p>{item.comment}</p>
                <div className='ps-3'>
                  <h6 className='fw-bold mb-1'>{item.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='d-flex justify-content-center gap-4'>
          <button onClick={scrollPrev} className='embla__prev embla-nav'>
            <i className='bi bi-chevron-compact-left'></i>
          </button>
          <button onClick={scrollNext} className='embla__next embla-nav'>
            <i className='bi bi-chevron-compact-right'></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
