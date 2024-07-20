import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
       toast.success("Form Data submitted successfully");
      handleClick();
    } else {
       toast.error("Invalid data");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newError = {};

    if (!formData.name) {
      newError.name = <p className="err">Name is Required</p>;
    }

    if (!formData.email) {
      newError.email = <p className="err">Email is required</p>;
    } else if (!validEmail(formData.email)) {
      newError.email = <p className="err">Invalid Email</p>;
    }

    if (!formData.password) {
      newError.password = <p className="err">Password is required</p>;
    } else if (formData.password.length < 8 || formData.password.length > 16) {
      newError.password = (
        <p className="err">Password length must be 8 to 16 characters</p>
      );
    }

    if (!formData.confirmPassword) {
      newError.confirmPassword = (
        <p className="err">Confirm Password is required</p>
      );
    } else if (formData.confirmPassword !== formData.password) {
      newError.confirmPassword = <p className="err">Password must be match</p>;
    }

    if (!formData.mobileNumber) {
      newError.mobileNumber = <p className="err">Mobile Number is required</p>;
    } else if (formData.mobileNumber.length !== 10) {
      newError.mobileNumber = (
        <p className="err">Mobile Number should be 10 digit</p>
      );
    }

    if (!formData.dob) {
      newError.dob = <p className="err">Date of Birth is required</p>;
    } else if (new Date(formData.dob) > new Date()) {
      newError.dob = (
        <p className="err">Date of Birth should be lesser than current date</p>
      );
    }

    setErrors(newError);
    return Object.keys(newError).length === 0;
  };

  const handleClick = () => {
    setFormData({
      name: "",
      email: "",
      mobileNumber: "",
      dob: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p> {errors.name} </p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p> {errors.email} </p>}
        </div>

        <div>
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
          {errors.mobileNumber && <p> {errors.mobileNumber} </p>}
        </div>

        <div>
          <label htmlFor="dob">DOB:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
          {errors.dob && <p> {errors.dob} </p>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p> {errors.password} </p>}
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p> {errors.confirmPassword} </p>}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
};

export default NewForm;
