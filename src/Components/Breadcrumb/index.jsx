// Dependencies
import React from "react";

// Components

// Styles
import { BreadcrumbStyle, Item, Step } from "./styles";

const Breadcrumb = (props) => {
  return (
    <BreadcrumbStyle>
      {props.data &&
        props.data.length &&
        props.data.map((bread, index) => {
          return (
            <>
              <Item bold={index + 2 > props.data.length}>{bread}</Item>
              {index + 2 <= props.data.length && <Step>{`>`}</Step>}
            </>
          );
        })}
    </BreadcrumbStyle>
  );
};

export default Breadcrumb;
