import React from "react";
import { getDetails } from "../../redux/actions";
import { connect } from "react-redux";

import DetailsDescription from './DetailsDescription/DetailsDescription';
import ActivitiesList from "./Activitieslist/ActivitiesList";

import "./Details.css";
import "../../animations.css"

class Details extends React.Component {
  componentDidMount() {
    this.props.getDetails(this.props.match.params.id);
  }

  render() {
    return (
      <div className="details">
        <div className="details__container">
          <div className="details__header">
            <div className="details__img toRight">
              <img
                src={this.props.details.img}
                alt={`${this.props.details.name}-flag`}
              />
            </div>
            <h1 className="details__name toLeft">{this.props.details.name}</h1>
          </div>
          <div className="details__description">
            <DetailsDescription
              details={ this.props.details }
            />
            <ActivitiesList
              activities={ this.props.details.Activities }
            />
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
