import React from 'react';
import Footer from './Footer';
import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
import './styles/about.css';
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
export default function About() {

    return (
        <>
            <div className='about '>
                <Grid container spacing={3} >
                    <Grid item xs={12} md={12} sm={12} className='headline'>Some of the technologies used:</Grid>
                </Grid>

                <Grid container className='content' >
                    <Grid item xs={12} md={2} sm={3} lg={2} className='center'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png' alt='react' height='100px' width='150px'></img></Grid>

                    <Grid item xs={12} md={10} sm={9} lg={10} className='para'><span className='subheader'><a href='https://reactjs.org/'>React</a></span> <br />React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. Add <a href='https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en'>react dev tools</a> to browser and see state, props and component tree of this page</Grid>
                </Grid>

                <Grid container className='content' >
                    <Grid item xs={12} md={2} sm={3} lg={2} className='center'><img src='https://redux.js.org/img/redux.svg' alt='react' height='100px' width='150px'></img></Grid>

                    <Grid item xs={12} md={10} sm={9} lg={10} className='para'><span className='subheader'><a href='https://redux.js.org/'>Redux</a></span> <br />Redux is a Predictable State Container for JS Apps. The Redux DevTools make it easy to trace when, where, why, and how your application's state changed. <a href='https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl='>Add Redux Dev Tools</a> to browser and see how state changes in app</Grid>
                </Grid>

                <Grid container className='content' >
                    <Grid item xs={12} md={2} sm={3} lg={2} className='center'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png' alt='Redux' height='100px' width='150px'></img></Grid>

                    <Grid item xs={12} md={10} sm={9} lg={10} className='para'><span className='subheader'><a href='https://nodejs.org'>Node</a></span><br />Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. See <a href='https://nodejs.org/en/docs'>node</a> official doucmentation </Grid>
                </Grid>

                <Grid container className='content' >
                    <Grid item xs={12} md={2} sm={3} lg={2} className='center'><img src='https://symbols-electrical.getvecta.com/stencil_79/87_expressjs.72a4a0d57c.svg' alt='Express' height='100px' width='150px'></img></Grid>

                    <Grid item xs={12} md={10} sm={9} lg={10} className='para'><span className='subheader'><a href='https://expressjs.com/'>Express</a></span><br />Express provides a robust set of features for web, it is a minimal and flexible Node.js web application framework. Express is the first choice of server for js application</Grid>
                </Grid>

                <Grid container className='content' >
                    <Grid item xs={12} md={2} sm={3} lg={2} className='center'><img src='https://cdn.worldvectorlogo.com/logos/mongodb.svg' alt='MongoDb' height='100px' width='150px'></img></Grid>

                    <Grid item xs={12} md={10} sm={9} lg={10} className='para'><span className='subheader'><a href='https://www.mongodb.com/'>MongoDB</a></span><br />Since MongoDB uses JSON documents for database it make it a perfect choice to use in Javacript application </Grid>
                </Grid>

                <Grid container className='content ' >
                    <Grid item xs={12} md={2} sm={3} lg={2} className='center'><img src='https://material-ui.com/static/logo.png' alt='Material UI' height='125px' width='150px'></img></Grid>

                    <Grid item xs={12} md={10} sm={9} lg={10} className='para'><span className='subheader'><a href='https://material-ui.com/'>Material UI</a></span><br />React components for faster and easier web development, helps create responsive web page faster</Grid>
                </Grid>


            </div>
            <br /><br /><br /><br />
            This website is soley created as hobbyist project.  No copyright infringement intended. All rights reserved to <a href='https://todoist.com/'>todoist</a>
            <Footer />
        </>
    )
}