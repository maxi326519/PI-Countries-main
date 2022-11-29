import React from 'react';

export default class Details extends React.Component{

    render(){
        return(
            <div>
                <img src={ this.props.img } alt={`${this.props.name}-flag`}/>
                <span>{ this.props.id }</span>
                <span>{ this.props.countrie }</span>
                <span>{ this.props.continent }</span>
                <span>{ this.props.capital }</span>
                <span>{ this.props.subRegion }</span>
                <span>{ this.props.area }</span>
                <span>{ this.props.pupulation }</span>
                <span>{ this.props.activitiys }</span>
            </div>
        )
    }
}