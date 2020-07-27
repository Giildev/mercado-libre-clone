// Dependencies
import React, { Component } from "react";
import { API_URL } from "../../constants";
import Breadcrumb from "../../Components/Breadcrumb";
import { Link } from "@reach/router";

// Components

// Styles
import {
  ProductStyle,
  Position,
  Picture,
  Image,
  Info,
  Condition,
  Name,
  Price,
  Button,
  ProductDescription,
  Title,
  Description,
} from "./styles";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        price: {
          amount: 0,
        },
      },
      breadcrumb: {},
    };
  }
  async componentDidMount() {
    try {
      let itemId = this.props.location.pathname.split("/")[2];

      if (itemId) {
        const response = await fetch(`${API_URL}/api/items/${itemId}`);
        let item = await response.json();
        this.setState({ item });

        const categories = await fetch(
          `${API_URL}/api/categories/${item.category_id}`
        );
        let breadcrumb = await categories.json();
        this.setState({ breadcrumb });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { item, breadcrumb } = this.state;
    return (
      <ProductStyle>
        <Breadcrumb data={breadcrumb} />
        <Position>
          <Picture>
            <Image src={item.picture} alt={item.description} />
          </Picture>
          <Info>
            <Condition>
              {item.condition} - {item.sold_quantity}
            </Condition>
            <Name>{item.title}</Name>
            <Price>{`$ ${item.price.amount}`}</Price>
            <a
              href="https://www.mercadolibre.com.co/"
              rel="nofollow"
              target="_blank"
            >
              <Button>Comprar</Button>
            </a>
          </Info>
        </Position>
        <ProductDescription>
          <Title>Descripcion del Producto</Title>
          <Description>{item.description}</Description>
        </ProductDescription>
      </ProductStyle>
    );
  }
}
