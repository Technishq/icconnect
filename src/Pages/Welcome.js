// Libraries
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// Functional Components
import Header from "../Components/Welcome/Header";
import MainImg from "../Components/Welcome/MainImg";
import OptionSection from "../Components/Welcome/OptionSection";


// Styled Components
import { Container, Section } from "./Styles/WelcomeStyled";

const Welcome = () => {
  // user-info - for checking if the user not logged in
  const user = useSelector((state) => state.user);

  return (
    <Container>
      {user.token && <Navigate to="/feed" />}

      {/* Header */}
      <Header />

      {/* Main Image Section */}
      <Section>
        <MainImg />
      </Section>

    </Container>
  );
};

export default Welcome;
