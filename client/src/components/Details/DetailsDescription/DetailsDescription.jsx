import React from 'react';

import './DetailsDescription.css';

export default class App extends React.Component {
    render(){
        return(
          <div className="details__text toRight">
            <div className='details__content'>
              <span><b>ID: </b></span>
              <span>{this.props.details.id}</span>
            </div>
            <div className='details__content'>
              <span><b>Continent: </b></span>
              <span>{this.props.details.continent}</span>
            </div>
            <div className='details__content'>
              <span><b>Capital: </b></span>
              <span>{this.props.details.capital}</span>
            </div>
            <div className='details__content'>
              <span><b>Subregion: </b></span>
              <span>{this.props.details.subregion}</span>
            </div>
            <div className='details__content'>
              <span><b>Area: </b></span>
              <span>{this.props.details.area}</span>
            </div>
            <div className='details__content'>
              <span><b>Population: </b></span>
              <span>{this.props.details.population}</span>
            </div>
          </div>
        )
    }
}