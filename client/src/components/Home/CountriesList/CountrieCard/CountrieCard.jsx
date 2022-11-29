import React from "react";

import "./CountrieCard.css";
import population from "../../../../assets/svg/population.svg";

export default class CountrieCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-flag">
          <img src={this.props.img} alt={`${this.props.name}-flag`} />
        </div>
        <div className="card-data">
          <h3 className="card-data_name">{this.props.countrie}</h3>
          <div className="card-data__text">
            <div className="container">
              <img className="data-svg" src={population} alt="svg" />
              <span>{this.props.population}</span>
            </div>
            <div className="container">
              <img className="data-svg" src={this.props.svg} alt="svg" />
              <span>{this.props.continent}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
