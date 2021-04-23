import React, { useRef, useState } from "react";
import "./login.css";
import logo from "../../images/logo2.png";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { connect } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { loginSuccess, registerSuccess } from "../../redux/actions/cartAction";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = (props) => {
  const [newUser, setNewUser] = useState(false);
  const [logInUser, setLogInUser] = useState({});
  // console.log(props);
  const { auth, setRegisterSuccess, setLoginSuccess } = props;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    if (newUser) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
          var user = userCredential.user;
          // console.log(user);
          setRegisterSuccess(user);
          setLogInUser(user);
          updateUserName(data.name);
          verifyEmail();
           history.replace(from);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    if (!newUser) {
      firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
          var user = userCredential.user;
          setLoginSuccess(user);
          setLogInUser(user);
           history.replace(from);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  const updateUserName = (name) => {
    var user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
        photoURL:
          "https://i.ibb.co/J2qd7F5/41808252-747674005571186-6702910658616229888-n.jpg",
      })
      .then(function () {
        console.log("user name Update successful");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const verifyEmail = () => {
    var user = firebase.auth().currentUser;

    user
      .sendEmailVerification()
      .then(function () {
        // Email sent.
      })
      .catch(function (error) {
        // An error happened.
      });
  };
  const resetPassword = (email) => {
    var auth = firebase.auth();
    auth
      .sendPasswordResetEmail(email)
      .then(function () {
        // Email sent.
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  return (
    <section className="login-container text-center d-flex align-items-center justify-content-center ">
      <div className="login-box w-25">
        <Link to="/" className="text-decoration-none">
          <img src={logo} alt="" className="img-fluid w-75 mb-5 " />
        </Link>
        <p>{auth.email}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {newUser && (
            <div className="form-group mb-3">
              <input
                className={classNames("form-control bg-light border-0 ", {
                  "is-invalid": errors.name,
                })}
                name="name"
                placeholder="Name"
                {...register("name", {
                  required: "This Field is required",
                  minLength: {
                    value: 6,
                    message: "please enter a minimun length 6 character",
                  },
                })}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name.message}</div>
              )}
            </div>
          )}
          <div className="form-group mb-3">
            <input
              className={classNames("form-control bg-light border-0 ", {
                "is-invalid": errors.email,
              })}
              placeholder="Email"
              name="email"
              {...register("email", {
                required: "This Field is required",
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "please valid your email Address",
                },
              })}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>

          <div className="form-group mb-3">
            <input
              className={classNames("form-control bg-light border-0 ", {
                "is-invalid": errors.password,
              })}
              placeholder="Password"
              name="password"
              {...register("password", {
                required: "This Field is required",
                pattern: {
                  value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                  message:
                    " Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)",
                },
              })}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>

          {newUser && (
            <div className="form-group mb-3">
              <input
                className={classNames("form-control bg-light border-0 ", {
                  "is-invalid": errors.confirmPassword,
                })}
                placeholder="Confirm Password"
                name="confirmPassword"
                {...register("confirmPassword", {
                  required: "This Field is required",
                  validate: {
                    value: (value) =>
                      value === password.current ||
                      " The password do not match",
                  },
                })}
              />
              {errors.confirmPassword && (
                <div className="invalid-feedback">
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>
          )}
          {!newUser ? (
            <p
              onClick={() => resetPassword(logInUser.email)}
              className="d-flex justify-content-end text-danger btn m-0 p-1"
            >
              Reset Password
            </p>
          ) : (
            ""
          )}
          <input
            className="form-control mb-3 bg-danger text-white"
            type="submit"
            value={newUser ? "Sign up" : "Login"}
          />
          <p onClick={() => setNewUser(!newUser)} className="text-danger btn ">
            {newUser ? "Already have an account?" : "Create a new account?"}
          </p>
        </form>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = {
  setRegisterSuccess: registerSuccess,
  setLoginSuccess: loginSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
