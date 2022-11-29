import React from "react";

import "./SearchBar.css";
import change from "../../../assets/svg/change.svg";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countrie: "", order: 'Ascending '};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
  }

  handleChange(e) {
    this.setState({ ...this.state, countrie: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // Despachar Busqueda
  }

  handleOrder() {
    if(this.state.order === 'Ascending')
        this.setState({ ...this.state, order: 'Descending' });
    else
        this.setState({ ...this.state, order: 'Ascending' });
  }

  handleFilter() {
    // Desarrollar menu emergente
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input type="search" onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
        <button className="search-order" onClick={this.handleOrder}>
          <img src={change} alt="change" />
          <span>{ this.state.order }</span>
        </button>
        <button className="search-filter">Filter</button>
      </div>
    );
  }
}