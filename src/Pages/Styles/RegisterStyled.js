import styled from "styled-components";
import { Link } from "react-router-dom";
import { PrimaryBtn } from "./FormPageStyled.js";

// Go To Login Page: Link
export const LinkBtn = styled(Link)`
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
  color: var(--primary-color);
`;

export const GoogleBtn = styled(PrimaryBtn)`
  border: 2px solid var(--dark-white);
  background-color: white;
  color: var(--dark-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
  span {
    margin-left: 1rem;
  }

  @media screen and (max-width: 1270px) {
    span {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 350px) {
    span {
      font-size: 14px;
    }
  }
`;

// Buttons Divider
export const Divider = styled.div`
  width: 100%;
  text-align: center;
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr 3fr;
  align-items: center;
  color: var(--dark-gray);
  letter-spacing: 1px;
  font-size: 18px;

  /* Divider Lines */
  &::after,
  &::before {
    content: "";
    background-color: var(--dark-gray);
    height: 1px;
  }
`;
