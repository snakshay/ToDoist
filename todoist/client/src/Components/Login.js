import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logIn, setDoing, setDone, setToDo } from '../Actions';


import CssBaseline from '@material-ui/core/CssBaseline';
import { TextField } from '@material-ui/core/';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {

            borderColor: "black"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "purple"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "purple"
        }
    },
    input: {
        color: '#49274a'
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
        color: "#49274a",
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function Login() {
    const classes = useStyles();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [data, setData] = useState('');
    const [loading,setLoading]=useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    function handleSubmit(e) {
        setLoading('Please wait...');
        let body = {
            "userName": userName,
            "passwordHash": password
        }

        // console.log(body);
        let apiResponse = axios.post('https://todolistserver-snakshay.herokuapp.com/login', body)
            .then((response) => {
                // console.log('in response' + response)
                setData(response.data);
                setError('');
                if (data) { }
                // console.log(data);

                // console.log(Object.values(response.data.todo));
                dispatch(logIn(response.data.userName));

                dispatch(setToDo(Object.values(response.data.todo)));
                dispatch(setDoing(Object.values(response.data.doing)));
                dispatch(setDone(Object.values(response.data.done)));
                localStorage.setItem('user', userName);
                localStorage.setItem('password', password);
                history.push('/dashboard');
            })
            .catch((error) => {
                // console.log('Error occurred');
                apiResponse = error.response;
                setLoading('');
            })
            .finally(() => {
                // console.log('api response' + apiResponse);
                setLoading('');
                if (apiResponse !== undefined) {
                    if (apiResponse.data !== undefined) {
                        // console.log(apiResponse.data)
                        setError(apiResponse.data.errorMessage ?? '')
                    }
                }
                else {
                    localStorage.setItem('user', userName);
                    localStorage.setItem('password', password);
                    history.push('/dashboard');
                }
            });
    }
    return (
        <>

            <Container component="main" maxWidth="xs" className='border'>
                <CssBaseline />
                <div className={classes.paper}>
                    {/* <Avatar className={classes.avatar}>

                    </Avatar> */}
                    <Typography component="h1" variant="h5" style={{ fontWeight: 'bold' }}>
                        LogIn
                    </Typography>
                    <form className={classes.form} noValidate >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    type='text'
                                    label="User Name"
                                    InputLabelProps={{
                                        style: { color: '#49274a' },
                                    }}
                                    inputProps={{
                                        style: { color: '#49274a' }
                                    }}
                                    className={classes.root}
                                    onChange={(e) => setUserName(e.target.value)}
                                />

                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    placeholder="Password should be atleast 8 characters"
                                    className={classes.root}
                                    InputLabelProps={{

                                        className: classes.input

                                    }}
                                    inputProps={{
                                        style: { color: '#49274a' }
                                    }}

                                    onChange={(e) => setPassword(e.target.value)}

                                />
                            </Grid>
                            <Grid container justify="flex-end">
                        <Grid item>
                            <Link to="/SigIn" variant="body2">
                                Don't have an account? Sign Up
                                </Link>
                        </Grid>
                    </Grid>
                        </Grid>


                        <span className='error'>{error}</span>






                    </form>
                    {userName.length > 1 && password.length > 1 ?
                        <button onClick={(e) => handleSubmit(e)} className='btn hover'>LogIn</button> :
                        <button type='submit' className='btn disabled'>LogIn</button>
                    }
                    {loading}
                </div>
                <br /><br />        <br /><br />
                <br />
            </Container>


        </>
    )
}