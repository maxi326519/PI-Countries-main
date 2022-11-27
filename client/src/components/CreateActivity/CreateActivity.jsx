import React from 'react';

import './CreateActivity.css' 

export default class CreateActivity extends React.Component{
    constructor(props){
        super(props);
        this.activity = {
            name: '',
            dificult: 0,
            time: '',
            season: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
    }

    handleChange(e){
        // seeter el estado
    }

    render(){
        return(
            <div className='activity'>
                <form onSubmit={this.handleSubmit}>
                    <h2>Add tourist activity</h2>

                    <label>Name:</label>
                    <input type='text' id='name'/>

                    <label>Dificult:</label>
                    <input type='text' id='dificult'/>

                    <label>Time:</label>
                    <input type='text' id='time'/>

                    <label>Season:</label>
                    <input type='text' id='season'/>

                    <button>Save</button>
                </form>
            </div>
        )
    }
}