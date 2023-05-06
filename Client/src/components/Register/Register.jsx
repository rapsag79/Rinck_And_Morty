import styles from "./Register.module.css";
import validation from "../Validation/validation";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = ({register}) => {
  const [errors, setErrors] = useState({});

  const [inputs, setInputs] = useState({
    name: "",
    nameUser: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });

    // const validateErrors = validation({
    //   ...inputs,
    //   [event.target.name]: event.target.value,
    // });

    // setErrors(validateErrors);
    // opcion 2 y mas simple
    setErrors(
      validation({
        ...inputs,
        [event.target.name]: event.target.value,
      })
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    register(inputs);
  }

  return (
    <div className={styles["form-container"]}>
      <form className={styles["rick-morty-form"]} onSubmit={handleSubmit}>
        <h1>welcome register</h1>
        <img
          src="https://storage.googleapis.com/pai-images/9bab556bc1574fce9e72b39aa2e9cfe1.jpeg"
          alt="Rick_And_Morty"
          className={styles.image}
        />

        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            value={inputs.name}
            type="text"
            placeholder="ingrese su Name"
            onChange={handleChange}
          />
        </div>
{/* 
        <div>
          <label htmlFor="user_name">Username</label>
          <input
            name="user_name"
            value={inputs.nameUser}
            type="text"
            placeholder="ingrese su Username"
            onChange={handleChange}
          />
        </div> */}

        <div>
          <label htmlFor="email">Email</label>
          <input
            className={styles.input}
            value={inputs.email}
            name="email"
            type="text"
            placeholder="ingrse su email"
            onChange={handleChange}
          />
          <br />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            className={styles.input}
            value={inputs.password}
            name="password"
            type="password"
            placeholder="ingrese su password"
            onChange={handleChange}
          />
          <br />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <button className={styles.button}><NavLink to={"/"}>
          Create User
        </NavLink>
        </button>
        or 
        <button className={styles.button}><NavLink to={"/"}>
          Log In
        </NavLink>
        </button>
      </form>
    </div>
  );
};

export default Register;
