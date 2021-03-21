
import React from 'react';
import { Link } from 'react-router-dom';
export default function UserNotLogin() {
    return (
        <div>
            <h2>Please login to continue</h2>
            <Link to='/LogIn'>Login User</Link>
        </div>
    )
}