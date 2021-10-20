import styled from "styled-components";
import { colors } from "../../styles/colors";

export const FooterContainer = styled.footer`
  position: relative;
  min-height: 40vh;
  width: 100%;
  height: 100%;
  background-position: 50% 50%;
  background-size: no-repeat;
  background-size: cover;
  margin-top: 10rem;

  .footer__content {
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 768px) {
      display: block;
      padding: 2rem;
    }
  }

  .footer__section {
    .logo {
      font-size: 3rem;
      color: ${colors.blue};
    }

    .text {
      font-size: 1.5rem;
      color: ${colors.gray};
      padding: 1rem 0;
    }

    .red {
      font-size: 1.5rem;
      color: ${colors.red};
    }

    .title {
      font-size: 1.8rem;
      color: ${colors.blue};
      padding-bottom: 1.5rem;
    }

    ul {
      list-style-type: none;
      li {
        padding: 1rem 0;
        a {
          font-size: 1.4rem;

          &:hover {
            color: ${colors.red};
          }
        }
      }
    }

    @media (max-width: 768px) {
      padding: 2rem 0;
    }
  }
`;
