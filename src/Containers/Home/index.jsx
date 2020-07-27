// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { setItems, setSearch } from "../../redux/actions";
import { API_URL } from "../../constants";

// Components
import Breadcrumb from "../../Components/Breadcrumb";
import ProductPreview from "../../Components/ProductPreview";

// Styles
import { ProductList, Divider } from "./styles";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumb: {},
    };
  }

  componentWillMount() {
    let urlParam = this.props.location.search.split("=")[1];
    if (urlParam !== null) {
      this.props.setSearch(urlParam);
      this.getItems();
    }
  }

  getItems = async () => {
    try {
      let search = this.props.location.search.split("=")[1];
      const response = await fetch(`${API_URL}/api/items?q=${search}`);
      let data = await response.json();
      this.setState({ breadcrumb: data.categories });
      await this.props.setItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const items = this.props.items;
    return (
      <>
        {items && (
          <>
            <Breadcrumb data={this.state.breadcrumb} />
            <ProductList>
              {items.map((item, index) => {
                return (
                  <>
                    <ProductPreview
                      thumbnail={item.picture}
                      price={`$${item.price.amount}`}
                      description={item.title}
                      address={item.address}
                      id={item.id}
                      key={item.id}
                    />
                    <Divider key={index} />
                  </>
                );
              })}
            </ProductList>
          </>
        )}
      </>
    );
  }
}

export default connect(
  ({ items, search, noItems }) => {
    return { items, search };
  },
  { setItems, setSearch }
)(Home);
