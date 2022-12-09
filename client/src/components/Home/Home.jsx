import React from 'react';
import { connect } from 'react-redux';
import { clearErrors } from '../../redux/actions'

import SearchBar from './SearchBar/SearchBar';
import CountriesList from './CountriesList/CountriesList';
import ErrorAlert from '../Alert/Alert';
import PageNotFound from '../PageNotFound/PageNotFound';

import './Home.css';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.handleValidations = this.handleValidations.bind(this);
    }

    handleValidations(){
        const maxPages = this.props.length / 10;
        if(!Number.isInteger(Number(this.props.match.params.id))) return false;
        if(this.props.length < 10) return true;
        if(this.props.match.params.id <= 0 || this.props.match.params.id > maxPages) return false;
        return true;
    }

    render(){
        return(
            <div className='home'>
                <SearchBar/>
                {
                    this.handleValidations()
                    ?   <CountriesList
                            page={ this.props.match.params.id }
                        />
                    :   <PageNotFound/>
                }
                <ErrorAlert
                    message={ this.props.message }
                    error={ true }
                    handleClose={ this.props.clearErrors }
                />
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        length: state.list.data.length,
        message: state.list.error.message
    }
}

function mapDispatchToProps(dispatch){
    return{
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);