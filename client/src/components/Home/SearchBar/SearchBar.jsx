import React from "react";
import { connect } from 'react-redux';
import { getCountrieByName, orderCountries, filterCountries, getCountriesList } from '../../../redux/actions';

import Filter from './Filters/Filters';
import "./SearchBar.css";
import change from "../../../assets/svg/change.svg";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { country: "", order: 'Ascending'};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
  }

  handleChange(e) {
    this.setState({ ...this.state, country: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.country === '' || this.state.country === ' ') this.props.getCountriesList();
    this.props.getCountrieByName(this.state.country);
  }

  handleOrder() {
    this.props.orderCountries();
    if(this.state.order === 'Ascending'){
      this.setState({ ...this.state, order: 'Descending' });
    }else{
      this.setState({ ...this.state, order: 'Ascending' });}
    }
    
  handleFilter() {
    this.props.filterCountries();
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={ this.handleSubmit }>
          <input type="search" onChange={ this.handleChange } />
          <button type="submit">Search</button>
        </form>
        <button className="search-order" onClick={ this.handleOrder }>
          <img src={ change } alt="change" />
          <span>{ this.state.order }</span>
        </button>
        <Filter
          handleFilter={ this.handleFilter }
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    getCountrieByName: name => dispatch(getCountrieByName(name)),
    getCountriesList: name => dispatch(getCountriesList(name)),
    orderCountries: () => dispatch(orderCountries()),
    filterCountries: filters => dispatch(filterCountries(filters))
  }
}

export default connect(null, mapDispatchToProps)(SearchBar);