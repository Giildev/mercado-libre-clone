// Dependencies
import React from "react";

// Components
import { Link } from "@reach/router";

// Styles
import {
  ProductPreviewStyle,
  PicturePosition,
  Thumbnail,
  ProductInfo,
  Price,
  Description,
  AddressPosition,
  Address,
} from "./styles";

const ProductPreview = (props) => {
  return (
    <Link to={`/item/${props.id}`}>
      <ProductPreviewStyle>
        <PicturePosition>
          <Thumbnail src={props.thumbnail} alt={props.description} />
        </PicturePosition>
        <ProductInfo>
          <Price>{props.price}</Price>
          <Description>{props.description}</Description>
        </ProductInfo>
        <AddressPosition>
          <Address>{props.address}</Address>
        </AddressPosition>
      </ProductPreviewStyle>
    </Link>
  );
};

export default ProductPreview;
