import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryItemLink = styled(Link)`
    display: block;
    position: relative;
    color: #343a40;
    transition: all 0.3s;
`;

export const CategoryItemImg = styled.img`
    transition: all 0.3s;
    object-fit: cover;
    &:hover {
        opacity: 0.7;
    }
`;
export const CategoryItemTitle = styled.strong`
    display: inline-block;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid black;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.07);
    font-size: 0.8rem;
`;
