import React from 'react';
import { connect } from 'react-redux';
import { getCountriesList } from '../../../redux/actions';

import './AddCountrie.css';
import '../../../animations.css'

import Loading from '../../Loading/Loading';

class AddCountrie extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            search: '',
        };
        this.handleChange = this.handleChange.bind(this); 
    }

    componentDidMount(){
        console.log('Componente montado');
        this.props.getCountriesList();
    }

    handleChange(e){
        this.setState({ search: e.target.value});
    }

    render(){
        return(
            <div className="add-countrie toBottom">
                <div className="add-form panel">
                    <input type='search' placeholder='Search countrie' onChange={ this.handleChange }/>
                    <div className="countries-added">
                        {this.props.countriesAdded?.map( (countrie, i) => {
                            return(
                                <div key={ i } className="img-container spacing toLeft">
                                    <button className="btn-remove"onClick={ () => this.props.handleRemove(countrie.id) }>X</button>
                                    <img src={ countrie.img } alt={ countrie.id }/>
                                </div>
                            )
                        })}
                    </div>
                    <div className="countries-panel">
                        {this.props.countries.length === 0 ?
                        <Loading/>
                        : this.props.countries.filter(c => c.name.toLowerCase().includes(this.state.search.toLowerCase()))
                            .map((countrie, i) => {
                                return (
                                    <div key={ i } className="countries-content">
                                        <div className="img-container toLeft">
                                            <img src={ countrie.img } alt={ countrie.id }/>
                                        </div>
                                        <span className="toLeft">{ countrie.name }</span>
                                        {this.props.countriesAdded.find(c => c.id === countrie.id)?
                                            <button className="btn-add toRight" onClick={ () => this.props.handleRemove(countrie.id) }>Remove</button>
                                            :
                                            <button className="btn-add toRight" onClick={ () => this.props.handleAddCountrie(countrie) }>Add</button>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div >
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
        getCountriesList: () => dispatch(getCountriesList()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCountrie);