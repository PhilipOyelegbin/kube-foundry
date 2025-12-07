import { LoginForm } from "./components/LoginForm";

const Login = () => {
  document.title = "User: DwellingBloom";

  return (
    <article className='container-xxl bg-white p-0 h-screen'>
      <LoginForm />
    </article>
  );
};

export default Login;
