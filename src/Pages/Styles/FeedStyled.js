import styled from "styled-components";

// Main Holding Div
export const Container = styled.main`
  min-height: 100vh;
  background-color: var(--light-white);
  position: relative;
  padding-bottom: 6rem;

  .scroll-top {
    border-radius: 50%;
    z-index: -5;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    opacity: 0;
    outline: 1px solid black;
    outline-offset: 4px;
    transition: var(--slow-transition);
    cursor: pointer;

    a {
      display: inline-block;
      color: black;
      transition: var(--slow-transition);
    }
    i {
      font-size: 2.4rem;
    }
  }

  .active-top {
    opacity: 1;
    z-index: 5;

    &:hover {
      outline-color: var(--primary-color);

      a {
        color: var(--primary-color);
      }
    }
  }

  @media screen and (max-width: 530px) {
    .scroll-top {
      display: none;
    }
  }
`;

// Body Container
export const ExploreHolder = styled.div`
  display: grid;
  max-width: var(--container-size);
  margin: 0 auto;
  padding-top: 2rem;

  /* Holds (Profile, Posts, News) */
  grid-template-columns: 1.2fr 3.3fr 1.5fr;

  @media screen and (max-width: 1280px) {
    padding: 2rem 2rem;
  }

  /* Holds (Profile, Posts) */
  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr 3fr;
  }

  /* Holds (Posts) */
  @media screen and (max-width: 827px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 470px) {
    padding: 1rem 1rem;
  }

  @media screen and (max-width: 470px) {
    padding: 10px 10px;
  }
  @media screen and (max-width: 327px) {
    padding: 0;
  }
`;

// Network section - Holder
export const NetworkHolder = styled.div`
  display: grid;
  max-width: var(--container-size);
  margin: 0 auto;
  padding-top: 2rem;
  grid-template-columns: 1fr 3fr;

  /* Network Manager - Div */
  .manager-holder {
    min-width: 320px;
  }

  @media screen and (max-width: 810px) {
    grid-template-columns: 1fr;
    padding: 2rem 2rem 0;

    /* Network Manager - Popup */
    .manager-holder {
      display: none;
    }

    .activate-manager {
      transform: translateY(0);
    }

    @media screen and (max-width: 530px) {
      .activate-manager {
        bottom: 60px;
      }

      padding: 2rem 1rem 0;
    }

    @media screen and (max-width: 340px) {
      .activate-manager {
        bottom: 30px;
      }
    }
  }
`;
