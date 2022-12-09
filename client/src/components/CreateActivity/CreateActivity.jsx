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

    handleVerification(){
        if(this.state.name){}
        if(this.state.dificult){}
        if(this.state.name){}
        if(this.state.name){}
    }

    render(){
        return(
            <div className='activity'>
                <form className='toTop' onSubmit={ this.handleSubmit }>
                    <h2 className='toRight'>Add tourist activity</h2>

                    <label>Name:</label>
                    <input type='text' name='name' required='true' placeholder='Ej: Sky' onChange={ this.handleChange }/>

                    <label>Dificulty:</label>
                    <input type='number' name='dificulty' required='true' placeholder='Ej: 7' onChange={ this.handleChange }/>

                    <label>Duration:</label>
                    <input type='time' name='duration' required='true' placeholder='Ej: 2' onChange={ this.handleChange }/>

                    <label>Season:</label>
                    <select type='text' name='season' required='true' placeholder='Options > Spring / Summer / Autum / Winter / All year' onChange={ this.handleChange }>
                        <option value='Spring'>Spring</option>
                        <option value='Summer'>Summer</option>
                        <option value='Autum'>Autum</option>
                        <option value='Winter'>Winter</option>
                        <option value='All year'>All year</option>
                    </select>

                    <button type="submit">Save</button>
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