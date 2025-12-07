import { RegisterForm } from "./components/RegisterForm";

const Register = () => {
  document.title = "Register: DwellingBloom";

  return (
    <article className='container-xxl bg-white p-0 h-screen'>
      <RegisterForm />
    </article>
  );
};

export default Register;
