import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

const schema = object({
  email: string().email().required(),
  password: string().min(6).required(),
});

export const LoginForm = () => {
  const route = useNavigate();
  const session = sessionStorage.getItem("user");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  const onLogin = async (data: { email: string; password: string }) => {
    try {
      const resp = await fetch(`${import.meta.env.VITE_API_URI}/api/v1/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      });

      if (!resp.ok) {
        toast.error("Invalid details");
      } else {
        const user = await resp.json();
        sessionStorage.setItem("token", user.token);
        reset();
        route("/dashboard");
      }
    } catch (error) {
      toast.error(String(error));
    }
  };

  const handleGoogleSignin = async () => {
    console.log("google login");
  };

  useEffect(() => {
    if (session) {
      route("/dashboard");
    }
  }, [session, route]);

  return (
    <section className='vh-100 d-flex justify-content-center align-items-center'>
      <div className='bg-light p-5 rounded' style={{ width: "400px" }}>
        <h2 className='text-center mb-4'>Welcome Back!</h2>
        <h6 className='text-center mb-4'>
          <i className='bi bi-info-circle-fill'></i>
          You are about to login as a client.
        </h6>
        <form
          onSubmit={handleSubmit(onLogin)}
          data-aos='fade-in'
          data-aos-easing='linear'
          data-aos-duration='1500'>
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

          <div className='d-flex justify-content-between align-items-center'>
            <button type='submit' className='mt-4 btn btn-primary'>
              {isSubmitting ? "Checking" : "Log In"}
            </button>
            <Link to=''>Forgot password</Link>
          </div>
        </form>

        <hr />

        <div className='d-flex justify-content-between w-100'>
          <button
            type='button'
            onClick={() => handleGoogleSignin()}
            className='mt-2 btn btn-outline-danger mx-auto'>
            Sign in with Google <i className='bi bi-google'></i>
          </button>
        </div>
      </div>
    </section>
  );
};
