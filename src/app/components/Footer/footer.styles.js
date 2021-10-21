import styled from "styled-components";
import { colors } from "../../styles/colors";

export const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  height: 100%;
  background-position: 50% 50%;
  background-size: no-repeat;
  background-size: cover;
  margin-top: 10rem;

  .footer__content {
    text-align: center;

    .socials {
      .social {
        width: 45px;
        height: 45px;
        background-color: #282a4f;
        border-radius: 50%;
        margin: 0 1rem;

        &:hover {
          background-color: ${colors.yellow};
        }
      }
    }
    .copy {
      font-size: 1.4rem;
      color: #fff;
      padding: 2rem 0;

      span {
        color: ${colors.yellow};
      }
    }
  }

  .footer__section {
    @media (max-width: 768px) {
      padding: 2rem 0;
    }
  }
`;
