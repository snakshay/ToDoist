import React, { useEffect } from 'react';
export default function LogOut() {
    useEffect(() => {
        localStorage.removeItem('password');
        localStorage.removeItem('user');
    }, [])

    return (
        <div>
            <h2>User successfully logged out</h2>
            Go back to <a href='https://todoistweb.netlify.app/'>ToDoList</a>
        </div>
    );
}