import React from 'react';

import './ErrorAlert.css';

export default class ErrorAlert extends React.Component{

    constructor(props){
        super(props);
        this.state = { isActive: false, display: 'none' }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate(){
        if(this.props.message && !this.state.isActive) this.setState({ isActive: true, display: 'flex' })
    }

    handleChange(){
        this.setState({ isActive: false, display: 'none'});
        this.props.handleClose();
    }

    render(){
        return(
            <div className="alert-back" style={ this.state }>
                <div className="alert-content">
                    <span className="alert-error">Error:</span>
                    <span className="alert-message">{ this.props.message }</span>
                    <button className="alert-close" onClick={ this.handleChange }>Accept</button>
                </div>
            </div>
        )
    }
}