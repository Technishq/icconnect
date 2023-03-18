import styled from "styled-components";

// Input-Form Container
export const InputContainer = styled.div`
  min-height: 70vh;
  display: grid;
  place-items: center;

  /* Input-form */
  .holder {
    box-shadow: 0px 2px 12px rgb(0 0 0 / 25%);
    padding: 2rem 2rem 0;
    border-radius: 20px;
    display: grid;
    min-width: 440px;
    margin-top: 1rem;
  }

  /* Input-form: CODE */
  .code-holder {
    padding-bottom: 2rem;

    .resend {
      color: var(--primary-color);
      font-weight: bold;
      margin-top: 10px;
      font-size: 14px;
      transition: var(--quick-transition);
      cursor: pointer;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }

  /* First Input Label - Heading */
  label {
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 1px;
    color: var(--ligth-black);
    margin-right: 5rem;
    margin-bottom: 0.5rem;
  }

  /* Form-subheading */
  p {
    margin-bottom: 2rem;
    font-size: 14px;
  }

  /* form input fields */
  input {
    font-size: 1.3rem;
    padding: 0.5rem 0.3rem 0.5rem 0.7rem;
    margin-bottom: 1rem;
    border: 2px solid gray;
    color: var(--ligth-black);
    border-radius: 5px;
    transition: all 0.2s ease;
    background-color: white;
  }

  /* error occured input fields */
  input.wrong {
    background-color: #ff000033;
  }

  /* code input fields */
  input#code {
    letter-spacing: 10px;
  }

  /* show-hide pass: Container */
  .pass-container {
    position: relative;

    /* pass input-field */
    input {
      width: 100%;
      padding-right: 65px;
    }

    /* Show/Hide Button */
    strong {
      user-select: none;
      position: absolute;
      right: 20px;
      top: 20%;
      background: transparent;
      border: none;
      font-size: 15px;
      font-weight: 600;
      text-transform: capitalize;
      color: var(--dark-gray);
      letter-spacing: 1px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  /* Form-error text */
  .error {
    margin-bottom: 0;
    color: red;
    font-size: 15px;
    margin-top: 0.2rem;
  }

  @media screen and (max-width: 510px) {
    label {
      font-size: 1.5rem;
    }

    p {
      font-size: 13px;
    }

    input {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 400px) {
    label {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 510px) {
    .holder {
      margin-top: 1.5rem;
      min-width: 100%;
      padding: 0 1rem;
      box-shadow: none;
    }

    .code-holder {
      margin-top: 0;
    }
  }
`;

// Main Btn
export const PrimaryBtn = styled.button`
  background: var(--primary-color);
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 0.7rem 0;
  border-radius: 20px;
  margin-bottom: 0.7rem;
  margin-top: 1rem;
  cursor: pointer;
`;

export const SecondaryBtn = styled(PrimaryBtn)`
  background: white;
  color: var(--dark-gray);
  padding: 0.3rem 0;
  border-radius: 20px;
`;
