import styled from "styled-components";

import { themeColor } from "../constants/colors";

export const NavbarWrapper = styled.div`
  & .dropdown-menu {
    border-top: 2px solid #ff3f3f;
    visibility: hidden;
    opacity: 0;
    -webkit-transform: translateY(0.5rem);
    transform: translateY(0.5rem);
    transition: .2s ease all;
    display: block;
    position:absolute;
  }

  & .dropdown-menu::before {
    content: "";
    display: block;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 0.5rem solid #ff3f3f;
    position: absolute;
    top: -0.5rem;
    left: 1rem;
  }

  & .dropdown-menu.show {
    display: block;
    visibility: visible;
    opacity: 1;
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    transition: .2s ease all;
  }

  @media (min-width: 992px) {
    & .navbar-brand {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }

  & .nav-link {
    color: rgba(17, 17, 17, 0.99) !important;
    font-weight: 800;
    font-size: 0.95rem;
    transition: all 0.3s;
  }
  & .nav-link:focus,
  .nav-link:hover {
    color: ${themeColor} !important;
  }
  & .nav-link.disabled {
    color: rgba(17, 17, 17, 0.3) !important;
  }
  & .navbar-nav .show > .nav-link,
  .navbar-nav .active > .nav-link,
  .navbar-nav .nav-link.show,
  .navbar-nav .nav-link.active {
    color: ${themeColor} !important;
  }
`;
