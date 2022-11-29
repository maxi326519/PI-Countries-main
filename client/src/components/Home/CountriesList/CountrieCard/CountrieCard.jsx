import React from 'react';

export default class CountrieCard extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <img src={ this.props.img[0] }/>
                <div>
                    <span>{ this.props.countrie }</span>
                    <span>{ this.props.continent }</span>
                </div>
            </div>
        )
    }
}