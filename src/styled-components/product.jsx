import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const ProductContainer = styled.article``;

export const ProductBadge = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 999;
`;
export const ProductImg = styled.img`
    height: 300px;
    width: 100%;
    -webkit-filter: grayscale(40%);
    filter: grayscale(40%);
    transition: all 0.3s;
    @media only screen and (max-width: 991px) {s
        width: 70% !important;
    }
    
    @media only screen and (max-width: 767px) {
        width: 60% !important;
    }

    ${ProductContainer}:hover & {
        opacity: 0.3;
    }

    
`;

export const ProductOverlay = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: end;
    align-items: flex-end;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 1rem 0;
    opacity: 0;
    transition: all 0.3s;


    ${ProductContainer}:hover & {
        opacity: 1; 
    }
`;

const heartStyles = css`
    -webkit-transform: translateX(-10px);
    transform: translateX(-10px);
    opacity: 0;
`;

const expandStyles = css`
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
    opacity: 0;
`;
const getListItemStyles = (props) => {
    if (props.name === 'add-to-cart') return;
    return props.name === "heart" ? heartStyles : expandStyles;
};

export const ProductOverlayListItem = styled.li`
    transition: all 0.3s;
    & button {
        border-radius: 0px;
    }
    ${ProductContainer}:hover & {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }

    ${getListItemStyles}
`;

export const ProductTitle = styled(Link)`
color: inherit;
transition: all 0.3s;
&:hover, &:focus {
    text-decoration: none;
}
`
