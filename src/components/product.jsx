import React from "react";
import { Button } from "reactstrap";

import { ProductContainer, ProductBadge, ProductImg, ProductOverlay, ProductOverlayListItem, ProductTitle } from '../styled-components/product'

const Product = ({ name, imageUrl, price }) => (
        <ProductContainer className="text-center">
            <div className="position-relative mb-3">
                <ProductBadge className="text-white"></ProductBadge>
                <a className="d-block" href="detail.html">
                    <ProductImg className="img-fluid" src={imageUrl} alt={name}></ProductImg>
                </a>
                <ProductOverlay>
                    <ul className="mb-0 list-inline">
                        <ProductOverlayListItem name="heart" className="list-inline-item">
                            <a href="#">
                                <Button outline size="sm" color="dark">
                                    <i className="far fa-heart"></i>
                                </Button>
                            </a>
                        </ProductOverlayListItem>
                        <ProductOverlayListItem name="add-to-cart" className="list-inline-item">
                            <a href="#">
                                <Button size="sm" color="dark">
                                    Add to cart
                                </Button>
                            </a>
                        </ProductOverlayListItem>
                        <ProductOverlayListItem name="expand" className="list-inline-item">
                            <a href="#productView" data-toggle="modal">
                                <Button outline size="sm" color="dark">
                                    <i className="fas fa-expand"></i>
                                </Button>
                            </a>
                        </ProductOverlayListItem>
                    </ul>
                </ProductOverlay>
            </div>
            
            <ProductTitle>
                <h6>{name}</h6>
            </ProductTitle>
            <p className="small text-muted">${price}</p>
        </ProductContainer>
);

export default Product;
