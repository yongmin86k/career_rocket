import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_MUTATION, SIGNUP_MUTATION } from "../../apollo/mutations";
import { Link } from "react-router-dom";
import { Form, FormSpy, Field } from "react-final-form";
import {
  FullScreenLoader,
  Box,
  ButtonDefault,
  InputText
} from "../../components";
import styles from "./styles";
import GLOBAL from "../../global";
import PropTypes from "prop-types";

const Home = ({ refreshTokenFn }) => {
  const [isRemember, setRemember] = useState(
    localStorage.getItem(GLOBAL.REMEMBER_ME) ? true : false
  );
  const [isActiveSubmit, setActiveSubmit] = useState(false);
  const [isAccountForm, setAccountForm] = useState(true);

  const [login, { loading: logInLoading, error: logInError }] = useMutation(
    LOGIN_MUTATION,
    {
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
      }
    }
  );

  const [signup, { loading: signUpLoading, error: signUpError }] = useMutation(
    SIGNUP_MUTATION,
    {
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
      }
    }
  );

  return (
    <>
      <div style={styles.bgContainer}></div>
      <div style={styles.container}>
        <Link to="/">
          <img src="/images/logo-std-blue.svg" alt="Career Rocket" />
        </Link>

        <Box style={styles.box}>
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
                {({ handleSubmit }) => {
                  return (
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
                {({ handleSubmit }) => {
                  return (
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
                          if (
                            values.username &&
                            values.password &&
                            values.email
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
                  );
                }}
              </Form>
            </>
          )}
        </Box>

        <p
          style={styles.accountForm}
          onClick={() => {
            setAccountForm(!isAccountForm);
          }}
        >
          {isAccountForm ? "Create a new account" : "Back to Log In"}
        </p>

        <p style={styles.copyRights}>Yongmin Kim © 2019</p>
      </div>

      <FullScreenLoader show={logInLoading || signUpLoading} />
    </>
  );
};

export default Home;

Home.propTypes = {
  refreshTokenFn: PropTypes.func
};
