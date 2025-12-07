import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

function ContactFormSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  const onSend = async (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URI}/api/supportmail`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        }
      );

      if (response.ok) {
        reset();
        toast.success("Email sent successfully");
      } else {
        toast.error("Unable to send mail!");
      }
    } catch (error) {
      toast.error(String(error));
    }
  };

  return (
    <section className='container-xxl py-5'>
      <div className='container'>
        <div
          className='text-center mx-auto mb-5'
          data-aos='fade-in'
          data-aos-easing='linear'
          data-aos-duration='1500'
          style={{ maxWidth: "600px" }}>
          <h1 className='mb-3'>Contact Us</h1>
          <p>
            We understand that finding the perfect rental or managing your
            property can sometimes raise questions. Whether you're a renter
            seeking clarification on a listing or a homeowner needing assistance
            with your account, we're dedicated to providing prompt and helpful
            support.
          </p>
        </div>

        <div className='row g-4'>
          <div className='col-12'>
            <div className='row gy-4'>
              <div
                className='col-md-6 col-lg-4'
                ddata-aos='fade-in'
                data-aos-easing='linear'
                data-aos-duration='1500'>
                <div className='bg-light rounded p-3'>
                  <div
                    className='d-flex align-items-center bg-white rounded p-3'
                    style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}>
                    <div
                      className='icon me-3'
                      style={{ width: "45px", height: "45px" }}>
                      <i className='fa fa-map-marker-alt text-primary'></i>
                    </div>
                    <span>123 Street, New York, USA</span>
                  </div>
                </div>
              </div>
              <div
                className='col-md-6 col-lg-4'
                data-aos='fade-in'
                data-aos-easing='linear'
                data-aos-duration='1500'>
                <div className='bg-light rounded p-3'>
                  <div
                    className='d-flex align-items-center bg-white rounded p-3'
                    style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}>
                    <div
                      className='icon me-3'
                      style={{ width: "45px", height: "45px" }}>
                      <i className='fa fa-envelope-open text-primary'></i>
                    </div>
                    <span>info@example.com</span>
                  </div>
                </div>
              </div>
              <div
                className='col-md-6 col-lg-4'
                data-aos='fade-in'
                data-aos-easing='linear'
                data-aos-duration='1500'>
                <div className='bg-light rounded p-3'>
                  <div
                    className='d-flex align-items-center bg-white rounded p-3'
                    style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}>
                    <div
                      className='icon me-3'
                      style={{ width: "45px", height: "45px" }}>
                      <i className='fa fa-phone-alt text-primary'></i>
                    </div>
                    <span>+012 345 6789</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className='col-md-6'
            data-aos='fade-up'
            data-aos-easing='linear'
            data-aos-duration='1500'>
            <iframe
              className='position-relative rounded w-100 h-100'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd'
              frameBorder='0'
              style={{ minHeight: "400px", border: "0" }}
              allowFullScreen
              aria-hidden='false'
              tabIndex={0}></iframe>
          </div>

          <div className='col-md-6'>
            <div
              data-aos='fade-up'
              data-aos-easing='linear'
              data-aos-duration='1500'>
              <p className='mb-4'>
                We value your feedback and are committed to providing you with
                the best rental experience. Please use the form below to contact
                us, and we'll get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit(onSend)}>
                <div className='row g-3'>
                  <div className='col-md-6'>
                    <div className='form-floating'>
                      <input
                        {...register("name")}
                        type='text'
                        className='form-control'
                        id='name'
                        placeholder='Your Name'
                      />
                      <label htmlFor='name'>Your Name</label>
                    </div>
                    {errors.name && (
                      <div className='alert alert-danger' role='alert'>
                        {errors.name.message}
                      </div>
                    )}
                  </div>

                  <div className='col-md-6'>
                    <div className='form-floating'>
                      <input
                        {...register("email")}
                        type='email'
                        className='form-control'
                        id='email'
                        placeholder='Your Email'
                      />
                      <label htmlFor='email'>Your Email</label>
                    </div>
                    {errors.email && (
                      <div className='alert alert-danger' role='alert'>
                        {errors.email.message}
                      </div>
                    )}
                  </div>

                  <div className='col-12'>
                    <div className='form-floating'>
                      <input
                        {...register("subject")}
                        type='text'
                        className='form-control'
                        id='subject'
                        placeholder='Subject'
                      />
                      <label htmlFor='subject'>Subject</label>
                    </div>
                    {errors.subject && (
                      <div className='alert alert-danger' role='alert'>
                        {errors.subject.message}
                      </div>
                    )}
                  </div>

                  <div className='col-12'>
                    <div className='form-floating'>
                      <textarea
                        {...register("message")}
                        className='form-control'
                        placeholder='Leave a message here'
                        id='message'
                        style={{ height: "150px" }}></textarea>
                      <label htmlFor='message'>Message</label>
                    </div>
                    {errors.message && (
                      <div className='alert alert-danger' role='alert'>
                        {errors.message.message}
                      </div>
                    )}
                  </div>

                  <div className='col-12'>
                    <button
                      className='btn btn-primary w-100 py-3'
                      type='submit'>
                      {isSubmitting ? "Processing.." : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;
