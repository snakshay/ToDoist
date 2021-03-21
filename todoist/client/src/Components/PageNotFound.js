import React from 'react';
import './styles/pnf.css'
export default function PageNotFound() {
    // 
    return (
        < div className='not-found'>
            <br /><br /><br />
            <h1> Not Found</h1>
            <h2>Error 404!</h2>
            Go back to <a href='https://todoistwebapp.netlify.app/'>TodoList</a>
        </div >
    );
}