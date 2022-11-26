import React from "react";

export default class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.countrieState = { value: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        console.log(e.target.value);
        this.setState({ value: e.target.value });
    }

    handleSubmit(e){
        e.preventDefault();
        // Despachar Busqueda
    }

    handleOrder(){
        // Desarrollar menu desplegable
    }

    handleFilter(){
        // Desarrollar menu desplegable
    }

    render() {
        return (
            <div className="search">
                <form onSubmit={this.handleSubmit}>
                    <input type='search' onChange={this.handleChange}/>
                    <input type='submit' value='Search'/>
                </form>
                <div>
                    <button className='search-order'>Order</button>
                    <button className='search-filter'>Filter</button>
                </div>
            </div>
        );
    }
}