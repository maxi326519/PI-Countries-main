import React from 'react';

import './ActivitiesList.css';

export default class ActivitiesList extends React.Component {
    render(){
        return(
            <div className="activity-table">
                <h2>Tourist Activities</h2>
                <div className="activity-row">
                    <span>Name</span>
                    <span>Season</span>
                    <span>Duration</span>
                    <span>Dificult</span>
                </div>
                {
                    this.props.activities && this.props.activities.length ?
                    this.props.activities.map( activity => {
                        return(
                            <div className="activity-row">
                                <span>{ activity.name }</span>
                                <span>{ activity.season }</span>
                                <span>{ activity.duration }</span>
                                <span>{ activity.dificulty }</span>
                            </div>
                        )
                    })
                    :<div>
                        <span className="activities-empty">No activities</span>
                    </div>
                }
            </div>
        )
    }
} 