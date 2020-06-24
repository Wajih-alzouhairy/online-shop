import React from "react";
class Card extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="card">
        <h2>Card</h2>{" "}
        {this.props.cardItems.map((cardItem) => (
          <li key={cardItem.id}>
            {cardItem.productName} <i>{cardItem.icon}</i>
            <h5>{cardItem.price}</h5>
            <button onClick={() => this.props.remove(cardItem.id)}>
              remove
            </button>
          </li>
        ))}
      </div>
    );
  }
}
export default Card;
