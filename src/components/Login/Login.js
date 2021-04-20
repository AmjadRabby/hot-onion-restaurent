import React from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import logo from "../../images/logo2.png";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <section className="login-container text-center d-flex align-items-center justify-content-center mt-5">
      <div className="login-box w-25">
        <img src={logo} alt="" className="img-fluid w-75 mb-5 " />

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control mb-3"
            {...register("example")}
            name="name"
            placeholder="Name"
          />
          {errors.name && <span>Name field is required</span>}
          <input
            className="form-control mb-3"
            {...register("example")}
            placeholder="Email"
            name="email"
          />
          {errors.email && <span>Email field is required</span>}
          <input
            className="form-control mb-3"
            // defaultValue="test"
            {...register("example")}
            placeholder="Password"
            name="password"
          />
          {errors.password && <span>Password field is required</span>}
          <input
            className="form-control mb-3"
            {...register("example")}
            placeholder="Confirm Password"
            name="confirmPassword"
          />
          {errors.confirmPassword && (
            <span>Confirm Password field is required</span>
          )}

          <input
            className="form-control mb-3 bg-danger text-white"
            type="submit"
          />
          <p className="text-danger">Already have an account</p>
        </form>
      </div>
    </section>
  );
};

export default Login;
