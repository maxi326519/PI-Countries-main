import React from 'react';
import { connect } from 'react-redux';
import { addActivity, clearErrors } from '../../redux/actions';

import './CreateActivity.css'
import AddCountrie from './AddCountrie/AddCountrie';
import ErrorAlert from '../Alert/Alert';

class CreateActivity extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            dificulty: 0,
            duration: '',
            season: '',
            countries: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAddCountrie = this.handleAddCountrie.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addActivity({
            ...this.state,
            countries: this.state.countries.map( c => c.id)
        });
    }

    handleChange(e){
        this.setState({ ...this.state, [e.target.name]: e.target.value });
        console.log(this.state);
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
            <div className='activity'>
                <form className='toTop' onSubmit={ this.handleSubmit }>
                    <h2 className='toRight'>Add tourist activity</h2>

                    <label className='toRight'>Name:</label>
                    <input type='text' name='name' placeholder='Ej: Sky' onChange={ this.handleChange }/>

                    <label className='toRight'>Dificulty:</label>
                    <input type='text' name='dificulty' placeholder='Ej: 7' onChange={ this.handleChange }/>

                    <label className='toRight'>Duration:</label>
                    <input type='text' name='duration' placeholder='Ej: 2' onChange={ this.handleChange }/>

                    <label className='toRight'>Season:</label>
                    <input type='text' name='season' placeholder='Options > Spring / Summer / Autum / Winter / All year' onChange={ this.handleChange }/>

                    <button className='toRight' type="submit">Save</button>
                </form>
                <AddCountrie
                    countriesAdded={ this.state.countries }
                    handleAddCountrie={ this.handleAddCountrie }
                    handleRemove={ this.handleRemove }
                    />
                <ErrorAlert
                    message={ this.props.activities.message || this.props.activities.error }
                    error={ this.props.activities.error ? true : false }
                    handleClose={ this.props.clearErrors }
                />
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        activities: state.activities
    }
}

function mapDispatchToProps(dispatch){
    return {
        addActivity: data => dispatch(addActivity(data)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateActivity);