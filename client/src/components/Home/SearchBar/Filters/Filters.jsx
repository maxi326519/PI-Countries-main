import React from 'react';
import { connect } from 'react-redux';
import { filterCountries, getCountriesList } from '../../../../redux/actions';

import './Filter.css';

class Filters extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display: { display: 'none' },
            filter: {
                america: true,
                europe: true,
                africa: true,
                asia: true,
                oceania: true,
                antarctica: true
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleDisplay = this.handleDisplay.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(name){
        this.setState({ ...this.state, filter: { ...this.state.filter, [name]: !this.state.filter[name] }});
    }

    handleDisplay(){
        if(this.state.display.display === 'none')
            this.setState({ ...this.state, display: { display: 'block' } })
        else
            this.setState({ ...this.state, display: { display: 'none' } })
    }

    async handleSubmit(e){
        e.preventDefault();
        await this.props.getCountriesList();
        this.props.filterCountries(this.state.filter);
    }

    render(){
        return(
            <div className="filters" onSubmit={ this.handleSubmit }>
                <button className="filters__btn-drop-dawn" onClick={ this.handleDisplay }>v Filter</button>
                <form className="filters__container" style={ this.state.display }>
                    <div className='filters__options' onClick={() => { this.handleChange('america') } }>
                        <span>America</span>
                        <input type='checkbox' name='america' checked={ this.state.filter.america } onChange={(e) => { this.handleChange(e.target.name) }}/>
                    </div>

                    <div className='filters__options' onClick={() => { this.handleChange('europe') } }>
                        <span>Europe</span>
                        <input type='checkbox' name='europe' checked={ this.state.filter.europe } onChange={(e) => { this.handleChange(e.target.name) }}/>
                    </div>

                    <div className='filters__options' onClick={() => { this.handleChange('africa') } }>
                        <span>Africa</span>
                        <input type='checkbox' name='africa' checked={ this.state.filter.africa } onChange={(e) => { this.handleChange(e.target.name) }}/>
                    </div>

                    <div className='filters__options' onClick={() => { this.handleChange('asia') } }>
                        <span>Asia</span>
                        <input type='checkbox' name='asia' checked={ this.state.filter.asia } onChange={(e) => { this.handleChange(e.target.name) }}/>
                    </div>

                    <div className='filters__options' onClick={() => { this.handleChange('oceania') } }>
                        <span>Oceania</span>
                        <input type='checkbox' name='oceania' checked={ this.state.filter.oceania } onChange={(e) => { this.handleChange(e.target.name) }}/>
                    </div>

                    <div className='filters__options' onClick={() => { this.handleChange('antarctica') } }>
                        <span>Antarctica</span>
                        <input type='checkbox' name='antarctica' checked={ this.state.filter.antarctica } onChange={(e) => { this.handleChange(e.target.name) }}/>
                    </div>
                    <button className='filters__btn' type='submit'>Apply</button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return{
        filterCountries: filters => dispatch(filterCountries(filters)),
        getCountriesList: filters => dispatch(getCountriesList())
    }
}

export default connect(null, mapDispatchToProps)(Filters);