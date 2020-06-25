import React, { Component } from "react";
import Data from "./data.json";
import ProductList from "./components/ProductList";
import { Fa500Px } from "react-icons/fa";
import Card from "./components/Card";
export default class App extends Component {
  state = {
    cardItems: [],
  };
  addHandler = (cardObject) => {
    this.setState({
      ...this.state,
      cardItems: [...this.state.cardItems, cardObject],
    });
  };
  removeHandler = (cardId) => {
    console.log("remove", cardId);
    this.setState({
      ...this.state,
      cardItems: this.state.cardItems.filter(
        (carditem) => carditem.id !== cardId
      ),
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>
          <Fa500Px />
          Welcome to our online store
        </h1>
        <ProductList data={Data} add={this.addHandler} />
        <Card cardItems={this.state.cardItems} remove={this.removeHandler} />
      </React.Fragment>
    );
  }
}
