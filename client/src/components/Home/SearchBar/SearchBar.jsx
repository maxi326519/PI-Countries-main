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

    render() {
        return (
            <form className="search" onSubmit={this.handleSubmit}>
                <input type='text' onChange={this.handleChange}/>
                <input type='submit' value='Search'/>
            </form>
        );
    }
}
