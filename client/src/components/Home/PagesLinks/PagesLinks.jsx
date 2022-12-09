import React from 'react';
import { Link } from 'react-router-dom';

import './PagesLinks.css';

export default class PagesLinks extends React.Component{

    constructor(props){
        super(props);
        this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck(arg){
        if(arg === 'suma'){
            if(this.props.currentPage < this.props.maxPages){
                return this.props.currentPage +1;
            }else{
                return this.props.maxPages;
            }
        }

        if(arg === 'resta'){
            if(this.props.currentPage > 1){
                return this.props.currentPage -1;
            }else{
                return 1;
            }
        }
    }

    render(){
        return(
            <div>
                {(()=>{
                return (
                    <div className="countries__pages-link">
                        <Link
                            className={ this.props.currentPage <= 1 ? 'disabled-link' : null }
                            to={`/countries/page/${ this.handleCheck('resta') }`}
                            onClick={this.props.handleUpdate}
                            >{'<'}</Link>
                        <span>{ `${ this.props.currentPage } de ${ this.props.maxPages }` }</span>
                        <Link
                            className={ this.props.currentPage >= this.props.maxPages ? 'disabled-link' : null }
                            to={`/countries/page/${ this.handleCheck('suma') }`}
                            onClick={this.props.handleUpdate}
                        >{'>'}</Link>
                    </div>
                )})()}
            </div>
        )
    }
}