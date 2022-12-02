import React from "react";
import { getDetails } from "../../redux/actions";
import { connect } from "react-redux";

import "./Details.css";
import arrow from '../../assets/svg/arrow-left.svg'

class Details extends React.Component {
  componentDidMount() {
    this.props.getDetails(this.props.match.params.id);
  }

  render() {
    return (
      <div className="details">
        <button className="details__back">{'< Back'}</button>
        <div className="details__container">
          <div className="details__img">
            <img
              src={this.props.details.img}
              alt={`${this.props.details.name}-flag`}
            />
          </div>
          <div className="details__text">
            <span>id: {this.props.details.id}</span>
            <span>Name: {this.props.details.name}</span>
            <span>Continent: {this.props.details.continent}</span>
            <span>Capital: {this.props.details.capital}</span>
            <span>Subregion: {this.props.details.subregion}</span>
            <span>Area: {this.props.details.area}</span>
            <span>Population: {this.props.details.population}</span>
            <span>Activities: {this.props.details.activitiys}</span>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    details: state.details,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDetails: (id) => dispatch(getDetails(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
