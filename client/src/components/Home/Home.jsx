import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import CountriesList from './CountriesList/CountriesList';

import './Home.css';

export default class Home extends React.Component {
    render(){
        return(
            <div className='home'>
                <SearchBar/>
                <CountriesList/>
            </div>
        )
    }
}