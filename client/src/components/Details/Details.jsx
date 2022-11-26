import React from 'react';

export default class Details extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <img src={ this.props.img }/>
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