import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";

const schema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().email().required(),
  gender: yup.string(),
  phone_number: yup.string().min(11).required(),
  password: yup.string().min(6).required(),
});

export const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  const onRegister = async (data: {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    password: string;
  }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URI}/api/v1/users`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        reset();
        navigate("/login");
      } else {
        toast.error("An error occurred during registration.");
      }
    } catch (error) {
      toast.error(String(error));
    }
  };

  const handleGoogleSignup = async () => {
    console.log("google register");
  };

  return (
    <section className='d-flex justify-content-center align-items-center'>
      <div className='bg-light p-5 rounded' style={{ width: "600px" }}>
        <h2 className='text-center mb-4'>Get Started with DwellingBloom</h2>
        <p>
          Kindly fill the following information to complete your registration.
        </p>
        <form
          onSubmit={handleSubmit(onRegister)}
          data-aos='fade-in'
          data-aos-easing='linear'
          data-aos-duration='1500'>
          <div className='form-floating mb-3'>
            <input
              {...register("first_name")}
              type='text'
              className='form-control'
              id='floatingInput'
              placeholder='John'
            />
            <label htmlFor='floatingInput'>First Name</label>
          </div>
          {errors.first_name && (
            <div className='alert alert-danger' role='alert'>
              {errors.first_name.message}
            </div>
          )}

          <div className='form-floating mb-3'>
            <input
              {...register("last_name")}
              type='text'
              className='form-control'
              id='floatingInput'
              placeholder='Doe'
            />
            <label htmlFor='floatingInput'>Last Name</label>
          </div>
          {errors.last_name && (
            <div className='alert alert-danger' role='alert'>
              {errors.last_name.message}
            </div>
          )}

          <div className='form-floating mb-3'>
            <input
              {...register("phone_number")}
              type='tel'
              className='form-control'
              id='floatingInput'
              placeholder='08123456790'
            />
            <label htmlFor='floatingInput'>Phone Number</label>
          </div>
          {errors.phone_number && (
            <div className='alert alert-danger' role='alert'>
              {errors.phone_number.message}
            </div>
          )}

          <div className='form-floating mb-3'>
            <input
              {...register("email")}
              type='email'
              className='form-control'
              id='floatingInput'
              placeholder='name@example.com'
            />
            <label htmlFor='floatingInput'>Email Address</label>
          </div>
          {errors.email && (
            <div className='alert alert-danger' role='alert'>
              {errors.email.message}
            </div>
          )}

          <div className='form-floating mb-3'>
            <input
              {...register("gender")}
              type='text'
              className='form-control'
              id='floatingInput'
              placeholder='Male'
            />
            <label htmlFor='floatingInput'>Gender</label>
          </div>
          {errors.gender && (
            <div className='alert alert-danger' role='alert'>
              {errors.gender.message}
            </div>
          )}

          <div className='form-floating mb-3'>
            <input
              {...register("password")}
              type='password'
              className='form-control'
              id='floatingPassword'
              placeholder='xxxxxxxxxxx'
            />
            <label htmlFor='floatingPassword'>Password</label>
          </div>
          {errors.password && (
            <div className='alert alert-danger' role='alert'>
              {errors.password.message}
            </div>
          )}

          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              id='flexCheckChecked'
              checked
              required
            />
            <label className='form-check-label' htmlFor='flexCheckChecked'>
              By signing up, you agree the <Link to='/'>Terms of Service</Link>{" "}
              and hereby give my consent to share my personal data
            </label>
          </div>

          <div className='d-flex justify-content-between align-items-center'>
            <button type='submit' className='mt-4 btn btn-primary'>
              {isSubmitting ? "Checking" : "Sign Up"}
            </button>
            <Link to=''>Forgot password</Link>
          </div>
        </form>

        <hr />

        <div className='d-flex justify-content-between w-100'>
          <button
            type='button'
            onClick={() => handleGoogleSignup()}
            className='mt-2 btn btn-outline-danger mx-auto'>
            Sign up with Google <i className='bi bi-google'></i>
          </button>
        </div>
      </div>
    </section>
  );
};
