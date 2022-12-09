import React from 'react';

import './Loading.css'
import loading from '../../assets/gif/loading.webp';

export default class Loading extends React.Component {
    render(){
        return(
            <div className="loading">
                <span>Loading</span>
                <img src={ loading } alt='loading'/>
            </div>
        )
    }
}