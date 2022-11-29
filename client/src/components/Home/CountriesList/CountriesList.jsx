import React from 'react';
import CountrieCard from './CountrieCard/CountrieCard';
import { connect } from 'react-redux';
import { getCountriesList } from '../../../redux/actions';

import './CountriesList.css';

class CountriesList extends React.Component{

    componentDidMount(){
        this.props.getCountriesList();
    }

    render(){
        return(
            <div className='countries-list'>
                {
                    this.props.list?.map( (countrie, i) =>{
                        if(i<10){
                            console.log(i);
                            console.log(countrie);
                            return (
                                <CountrieCard
                                 key={ countrie.id }
                                 id={ countrie.id }
                                 img={ countrie.img }
                                 countrie={ countrie.name }
                                 continent={ countrie.continent }
                                />
                           )
                        }
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        list: state.list
    }
}

function mapDispatchToProps(dispatch){
    return {
        getCountriesList: () => dispatch(getCountriesList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesList)