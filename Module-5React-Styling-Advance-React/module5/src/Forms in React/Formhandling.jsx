import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Formhandling() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    // Name validation
    if (!form.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(form.email)) {
      tempErrors.email = "Invalid email format";
      isValid = false;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!form.phone.trim()) {
      tempErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(form.phone)) {
      tempErrors.phone = "Invalid phone number (must be 10 digits)";
      isValid = false;
    }

    // Password validation
    if (!form.password.trim()) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (form.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    // Confirm Password validation
    if (!form.cpassword.trim()) {
      tempErrors.cpassword = "Confirm password is required";
      isValid = false;
    } else if (form.cpassword !== form.password) {
      tempErrors.cpassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      console.log("Form Data:", form);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <MDBContainer
          fluid
          className="d-flex align-items-center justify-content-center"
        >
          <div className="mask gradient-custom-3"></div>
          <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
            <MDBCardBody className="px-5">
              <h2 className="text-uppercase text-center mb-5">
                Create an account
              </h2>

              <MDBInput
                name="name"
                value={form.name}
                onChange={handleChange}
                wrapperClass="mb-4"
                label="Your Name"
                size="lg"
                id="form1"
                type="text"
              />
              {errors.name && (
                <div style={{ color: "red", marginBottom: "10px" }}>
                  {errors.name}
                </div>
              )}

              <MDBInput
                name="email"
                value={form.email}
                onChange={handleChange}
                wrapperClass="mb-4"
                label="Your Email"
                size="lg"
                id="form2"
                type="email"
              />
              {errors.email && (
                <div style={{ color: "red", marginBottom: "10px" }}>
                  {errors.email}
                </div>
              )}

              <MDBInput
                name="phone"
                value={form.phone}
                onChange={handleChange}
                wrapperClass="mb-4"
                label="Your phone"
                size="lg"
                id="form3"
                type="tel"
              />
              {errors.phone && (
                <div style={{ color: "red", marginBottom: "10px" }}>
                  {errors.phone}
                </div>
              )}

              <MDBInput
                name="password"
                value={form.password}
                onChange={handleChange}
                wrapperClass="mb-4"
                label="Password"
                size="lg"
                id="form4"
                type="password"
              />
              {errors.password && (
                <div style={{ color: "red", marginBottom: "10px" }}>
                  {errors.password}
                </div>
              )}

              <MDBInput
                name="cpassword"
                value={form.cpassword}
                onChange={handleChange}
                wrapperClass="mb-4"
                label="Repeat your password"
                size="lg"
                id="form5"
                type="password"
              />
              {errors.cpassword && (
                <div style={{ color: "red", marginBottom: "10px" }}>
                  {errors.cpassword}
                </div>
              )}

              <div className="d-flex flex-row justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  id="flexCheckDefault"
                  label="I agree to all statements in Terms of Service"
                />
              </div>

              <MDBBtn
                type="submit"
                className="mb-4 w-100 gradient-custom-4"
                size="lg"
              >
                Submit
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </form>
    </div>
  );
}

export default Formhandling;
