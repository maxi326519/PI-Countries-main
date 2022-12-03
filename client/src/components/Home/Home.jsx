import React from 'react';
import { connect } from 'react-redux';
import { clearErrors } from '../../redux/actions'

import SearchBar from './SearchBar/SearchBar';
import CountriesList from './CountriesList/CountriesList';
import ErrorAlert from '../ErrorAlert/ErrorAlert'

import './Home.css';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(){
        this.props.clearErrors();
    }

    render(){
        return(
            <div className='home'>
                <SearchBar/>
                <CountriesList
                    page={ this.props.match.params.id }
                />
                <ErrorAlert
                    message={ this.props.message }
                    handleClose={ this.handleClose }
                />
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        message: state.list.error.message
    }
}

function mapDispatchToProps(dispatch){
    return{
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);