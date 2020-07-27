import React from "react";
import { Router } from "@reach/router";
import { GlobalStyle, Container } from "./styles";
import { Provider } from "react-redux";
import store from "./redux/store";

// Components
import Header from "./Components/Header";

//Containers
import Home from "./Containers/Home";
import Product from "./Containers/Product";

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <Container>
          <Router>
            <Home path="/" />
            <Home path="/:items" />
            <Product path="/item/:id" />
          </Router>
        </Container>
      </Provider>
    </>
  );
}
export default App;
