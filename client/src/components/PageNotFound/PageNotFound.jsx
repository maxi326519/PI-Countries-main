import React from 'react';

import './PageNotFound.css';

export default class PageNotFound extends React.Component {
    render(){
        return(
            <div className="page-not-found">
                <div className="container">
                    <h2>ERROR 404</h2>
                    <span>Page Not Found</span>
                </div>
            </div>
        )
    }
}