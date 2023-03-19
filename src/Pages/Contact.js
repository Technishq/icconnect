import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// Functional Components
import Header from "../Components/Welcome/Header";
import MainImg from "../Components/Welcome/MainImg";
import { Container, Section } from "./Styles/WelcomeStyled";

import OptionSection from "../Components/Welcome/OptionSection";


// npm i @emailjs/browser

const Contact = () => {
    const user = useSelector((state) => state.user);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_csuo02n",
        "template_fazer4d",
        form.current,
        "S6ii0feoWjiEQY3po"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
<Container>
      {user.token && <Navigate to="/feed" />}

      {/* Header */}
      <Header />

      <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>

    </Container>


    
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  form {
    position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%,-50%);

     flex-direction: column; 
     align-items: center;

    
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;