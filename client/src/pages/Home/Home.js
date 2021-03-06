import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_MUTATION, SIGNUP_MUTATION } from "../../apollo/mutations";
import { Link } from "react-router-dom";
import { Form, FormSpy, Field } from "react-final-form";
import {
  FullScreenLoader,
  PopupError,
  Box,
  ButtonDefault,
  InputText
} from "../../components";
import styles from "./styles";
import GLOBAL from "../../global";
import { useMediaQuery } from "../../hooks";
import PropTypes from "prop-types";

const Home = ({ refreshTokenFn }) => {
  const isMedia = useMediaQuery();

  const [isRemember, setRemember] = useState(
    localStorage.getItem(GLOBAL.REMEMBER_ME) ? true : false
  );
  const [isActiveSubmit, setActiveSubmit] = useState(false);
  const [isAccountForm, setAccountForm] = useState(true);
  const [isAccountError, setAccountError] = useState(null);

  const [login, { loading: logInLoading }] = useMutation(LOGIN_MUTATION, {
    onCompleted: ({ login }) => {
      const token = login.token;

      refreshTokenFn({
        [GLOBAL.AUTH_TOKEN]: token
      });

      if (isRemember) {
        localStorage.setItem(GLOBAL.REMEMBER_ME, login.user.username);
      } else {
        localStorage.removeItem(GLOBAL.REMEMBER_ME);
      }
    },
    onError: error => {
      error.message && setAccountError(error.message.split(": ")[1]);
    }
  });

  const [signup, { loading: signUpLoading }] = useMutation(SIGNUP_MUTATION, {
    onCompleted: ({ signup }) => {
      const token = signup.token;

      refreshTokenFn({
        [GLOBAL.AUTH_TOKEN]: token
      });

      if (isRemember) {
        localStorage.setItem(GLOBAL.REMEMBER_ME, signup.user.username);
      } else {
        localStorage.removeItem(GLOBAL.REMEMBER_ME);
      }
    },
    onError: error => {
      error.message && setAccountError(error.message.split(": ")[1]);
    }
  });

  return (
    <div style={styles.page(isMedia)}>
      <div style={styles.bgContainer(isMedia)}>
        {isMedia !== "mobile" && <div style={styles.imgWelcome} />}
      </div>
      <div style={styles.container(isMedia)}>
        <Link to="/">
          <img
            style={styles.logo(isMedia)}
            src="/images/logo-std-blue.svg"
            alt="Career Rocket"
          />
        </Link>

        <Box style={styles.box(isMedia)}>
          {isAccountForm ? (
            <>
              <h1 style={styles.title}>Log In</h1>
              <p style={styles.caption}>
                Please use the authorized manager ID to log in.
              </p>

              <Form
                onSubmit={values => {
                  login({
                    variables: { ...values }
                  });
                }}
              >
                {({ handleSubmit, form }) => {
                  return (
                    <>
                      <form onSubmit={handleSubmit}>
                        <FormSpy
                          subscription={{ values: true }}
                          onChange={({ values }) => {
                            if (!values.username) {
                              setActiveSubmit(false);
                            }
                            if (!values.password) {
                              setActiveSubmit(false);
                            }
                            if (values.username && values.password) {
                              setActiveSubmit(true);
                            }
                          }}
                        />

                        <Field
                          name="username"
                          defaultValue={
                            localStorage.getItem(GLOBAL.REMEMBER_ME)
                              ? localStorage.getItem(GLOBAL.REMEMBER_ME)
                              : null
                          }
                        >
                          {props => {
                            return (
                              <InputText
                                {...props}
                                type="text"
                                style={styles.input}
                                label="Username"
                                placeholder="Manager ID"
                                autoComplete="username"
                              />
                            );
                          }}
                        </Field>

                        <Field name="password">
                          {props => {
                            return (
                              <InputText
                                {...props}
                                type="password"
                                style={styles.input}
                                label="Password"
                                placeholder="Password"
                                autoComplete="current-password"
                              />
                            );
                          }}
                        </Field>

                        <Field
                          name="rememberMe"
                          type="checkbox"
                          value={
                            localStorage.getItem(GLOBAL.REMEMBER_ME)
                              ? true
                              : false
                          }
                        >
                          {({ input }) => {
                            return (
                              <label style={styles.checkBoxContainer}>
                                <input
                                  {...input}
                                  style={styles.inputCheckBox}
                                  type="checkbox"
                                  onClick={() => {
                                    setRemember(!isRemember);
                                  }}
                                />
                                <p style={styles.checkBox}>
                                  {isRemember && (
                                    <img
                                      style={styles.checkBoxImg}
                                      src="/images/ic-checked.svg"
                                      alt="Check to remember the account information"
                                    />
                                  )}
                                </p>
                                <p style={styles.checkBoxLabel}>Remember me</p>
                              </label>
                            );
                          }}
                        </Field>

                        <ButtonDefault
                          type="submit"
                          isActiveSubmit={isActiveSubmit}
                        >
                          Log in
                        </ButtonDefault>
                      </form>
                      <p
                        style={styles.accountForm(isMedia)}
                        onClick={() => {
                          form.reset();
                          setAccountForm(!isAccountForm);
                        }}
                      >
                        Create a new account
                      </p>
                    </>
                  );
                }}
              </Form>
            </>
          ) : (
            <>
              <h1 style={styles.title}>Sign Up</h1>
              <p style={styles.caption}>Please type following information.</p>
              <Form
                onSubmit={values => {
                  signup({
                    variables: { ...values }
                  });
                }}
              >
                {({ handleSubmit, form }) => {
                  return (
                    <>
                      <form onSubmit={handleSubmit}>
                        <FormSpy
                          subscription={{ values: true }}
                          onChange={({ values }) => {
                            if (!values.username) {
                              setActiveSubmit(false);
                            }
                            if (!values.password) {
                              setActiveSubmit(false);
                            }
                            if (!values.email) {
                              setActiveSubmit(false);
                            }
                            if (!values.name) {
                              setActiveSubmit(false);
                            }
                            if (
                              values.username &&
                              values.password &&
                              values.email &&
                              values.name
                            ) {
                              setActiveSubmit(true);
                            }
                          }}
                        />

                        <Field
                          name="username"
                          defaultValue={
                            localStorage.getItem(GLOBAL.REMEMBER_ME)
                              ? localStorage.getItem(GLOBAL.REMEMBER_ME)
                              : null
                          }
                        >
                          {props => {
                            return (
                              <InputText
                                {...props}
                                type="text"
                                style={styles.input}
                                label="Username*"
                                placeholder="Manager ID"
                                autoComplete="username"
                              />
                            );
                          }}
                        </Field>

                        <Field name="password">
                          {props => {
                            return (
                              <InputText
                                {...props}
                                type="password"
                                style={styles.input}
                                label="Password*"
                                placeholder="Password"
                                autoComplete="password"
                              />
                            );
                          }}
                        </Field>

                        <Field name="email">
                          {props => {
                            return (
                              <InputText
                                {...props}
                                type="email"
                                style={styles.input}
                                label="Email*"
                                placeholder="Email"
                                autoComplete="email"
                              />
                            );
                          }}
                        </Field>

                        <Field name="name">
                          {props => {
                            return (
                              <InputText
                                {...props}
                                type="text"
                                style={styles.input}
                                label="Full name*"
                                placeholder="Full name"
                                autoComplete="name"
                              />
                            );
                          }}
                        </Field>

                        <ButtonDefault
                          type="submit"
                          isActiveSubmit={isActiveSubmit}
                        >
                          Sign Up
                        </ButtonDefault>
                      </form>
                      <p
                        style={styles.accountForm(isMedia)}
                        onClick={() => {
                          form.reset();
                          setAccountForm(!isAccountForm);
                        }}
                      >
                        Back to Log In
                      </p>
                    </>
                  );
                }}
              </Form>
            </>
          )}
        </Box>

        {isMedia === "mobile" && (
          <p style={styles.copyRights(isMedia)}>Yongmin Kim © 2019</p>
        )}
      </div>

      {isMedia !== "mobile" && (
        <p style={styles.copyRights(isMedia)}>Yongmin Kim © 2019</p>
      )}
      <FullScreenLoader show={logInLoading || signUpLoading} />

      {isAccountError && (
        <PopupError errorMsg={isAccountError} onClose={setAccountError} />
      )}
    </div>
  );
};

export default Home;

Home.propTypes = {
  refreshTokenFn: PropTypes.func
};
