import React from 'react'
import {Link} from 'react-router-dom';

export default function Title(){
    return(
        <nav>
            <ul>
                <li><Link to="/">Makale Listesi</Link></li>
                <li><Link to="/add">Makale Yaz</Link></li>
            </ul>
        </nav>
    )
}