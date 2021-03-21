import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles/home.css';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';

import Footer from './Footer';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         padding: theme.spacing(2),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//     },
// }));


export default function Home() {

    const history = useHistory();
    const User = useSelector((state) => state.User);
    return (
        <>
            <div className='main'>
                <div className='home'>
                    <div className='getting-started'>
                        <div className='header'>Organize your work with ToDoList</div>

                        <div className='btn-container'>
                            {User.length === 0 ? <button className='btnDark' onClick={(e) => history.push('/SignIn')} >Getting Started</button> : <button className='btnDark' onClick={(e) => history.push('/Dashboard')}>Getting Started</button>}

                        </div>
                    </div>
                </div>

                <div className='task-manager'>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} sm={6}>
                            <div className='task-manager-left'>
                                <p className='header-font'>A task manager you can trust for life</p><br />
                                <p>Curently released in development to our first 500 connections only. This is just released as a part of hobbyist project only.  No copyright infringement intended. All rights reserved to <a href='https://todoist.com/'>todoist</a> </p><br />
                                <p>Our team is committed to staying independent and earning your trust for as long as you need our apps.</p><br />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} sm={6}>
                            <p className='task-manager-right'></p>
                        </Grid>
                    </Grid>
                </div>
                <br /><br /><br /><br />
                <div className='mental-space'>
                    <div className='mental-space-header'>
                        <span style={{ backgroundColor: '#ffffaa' }}> Free up your mental space</span>

                    </div>

                    <div className='mental-space-content'>

                        <span style={{ textAlign: 'center' }}>
                            Regain clarity and calmness by getting all those tasks out of your head and onto your to-do list (no matter where you are or what device you use).
                            <br /><br />
                            Single Page Web Application created with Node, React, Express, MongoDb<br />
                            <Link to='/About' style={{ color: 'purple' }}> See all tools used </Link>
                        </span>
                    </div>
                </div>

                <br /><br /><br /><br />
                <div className='task-manager'>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} sm={12}>
                            <p className='task-manager-left sync-devices'>
                                <span className='header-font'>Sync across various devices</span><br /><br />
                                <span className='tm-content'>With responsive web design manage your tasks across various devices at ease</span><br />
                            </p>
                        </Grid>
                        <Grid item xs={12} md={6} sm={12}>
                            <p className='sync-devices-right'></p>
                        </Grid>
                    </Grid>
                </div>

            </div>

            <Footer />
        </>
    )
}