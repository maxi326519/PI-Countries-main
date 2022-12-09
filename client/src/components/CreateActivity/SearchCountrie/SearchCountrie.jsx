import React from 'react';
import { connect } from 'react-redux';
import { getCountriesList } from '../../../redux/actions';

import './SearchCountrie.css';

class SearchCountrie extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            search: '',
            countries: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    componentDidMount(){
        console.log('Componente montado');
        this.props.getCountriesList();
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.handleCountries( this.state.countries.map(c => c.id) )
    }

    handleChange(e){
        this.setState({ ...this.state, search: e.target.value})
    }

    handleAddCountrie(countrie){
        this.setState({
            ...this.state,
            countries: [
                ...this.state.countries,
                {
                    id: countrie.id,
                    img: countrie.img
                }
            ]
        });
    }

    handleRemove(id){
        this.setState({
            ...this.state,
            countries: this.state.countries.filter( c => c.id !== id)
        });
    }

    render(){
        return(
            <div className="add-countrie">
                <form className="search-form" onSubmit={ this.handleSubmit }>
                    <input type='search' placeholder='Search countrie' onChange={ this.handleChange }/>
                    <input type='submit' value='Add'/>
                </form>
                <div className="countries-added">
                    {this.state.countries?.map( countrie => {
                        return(
                            <div className="img-container spacing">
                                <button onClick={ () => this.handleRemove(countrie.id) }>X</button>
                                <img src={ countrie.img } alt={ countrie.id }/>
                            </div>
                        )
                    })}
                </div>
                <div className="countries-panel">
                    {this.props.countries.filter(c => c.name.toLowerCase().includes(this.state.search.toLowerCase()))
                        .map( countrie => {
                            return (
                                <div className="countries-content">
                                    <div className="img-container">
                                        <img src={ countrie.img } alt={ countrie.id }/>
                                    </div>
                                    <span>{ countrie.name }</span>
                                    {this.state.countries.find(c => c.id === countrie.id)?
                                        <button className="btn-add" onClick={ () => this.handleRemove(countrie.id) }>Remove</button>
                                        :
                                        <button className="btn-add" onClick={ () => this.handleAddCountrie(countrie) }>Add</button>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        countries: state.list.data
    }
}

function mapDispatchToProps(dispatch){
    return {
        getCountriesList: () => dispatch(getCountriesList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCountrie);