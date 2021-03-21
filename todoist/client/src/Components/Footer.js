import React from 'react';
import Grid from '@material-ui/core/Grid';

import './styles/footer.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
export default function Footer() {
    // const classes = useStyles();

    const User = useSelector((state) => state.User);
    return (
        <>
            <div className='Footer'>
                <br />
                <br />
                <hr />
                <br /><br /><br />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8} sm={8}>
                        <div className='info'>
                            <p className='name'>Created by Akshay</p><br />
                            <p>Connect with me</p>
                            <p><span ><a href='https://facebook.com/snakshay'><i className="fab fa-facebook"></i></a></span>
                                <span className='spacing'><a href='https://www.instagram.com/snakshay/'><i className="fab fa-instagram"></i></a></span>
                                <span className='spacing'><a href='https://www.linkedin.com/in/snakshay/'><i className="fab fa-linkedin"></i></a></span>
                                <span className='spacing'><a href='https://github.com/snakshay'><i className="fab fa-github"></i></a></span></p>


                        </div>
                    </Grid>

                    <Grid item xs={6} md={2} sm={2}>
                        <br />
                        <br />
                        {User.length > 0 ? <Link to='/Dashboard'>Create account</Link> : <Link to='/SignIn'>Create account</Link>}


                    </Grid>
                    <Grid item xs={6} md={2} sm={2}>
                        <br />
                        <br />
                        {User.length > 0 ? <Link to='/Dashboard'>Already have account? LogIn</Link> : <Link to='/LogIn'>Already have account? LogIn</Link>}


                    </Grid>
                </Grid>
                <br /><br /><br />

            </div>
            <div className='last'>All rights reserved Coypright @ToDoList 2021</div>
        </>

    )
}