import React from 'react';
import { Link } from 'react-router-dom'

import './Welcome.css';

export default class Welcome extends React.Component{

    render(){
        return(
            <div className='welcome'>
                <h2 className='toBottom'>Welcome to the countries app!</h2>
                <Link className='toTop' to='/countries/page/1'>Let's go</Link>
            </div>
        )
    }
}