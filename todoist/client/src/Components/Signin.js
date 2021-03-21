import React, { useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../Actions';


import CssBaseline from '@material-ui/core/CssBaseline';
import { TextField } from '@material-ui/core/';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './styles/signin.css'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link to='/'>
                TodoList
        </Link >{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
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

export default function Signin() {
    const classes = useStyles();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confrimPassword, setconfirmPassword] = useState('');
    const [error, setError] = useState('');//api error
    const [loading,setLoading]=useState('');
    //form validation errors
    
    
    const [userData, setUserData] = useState(false);
    const [passwordError, setPasswordError] = useState(false);//password matching error
    const [passwordLenghtError, setPasswordLengthError] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    function handleSubmit(e) {
        setLoading('Please wait...');
        let body = {
            "userName": userName,
            "passwordHash": password,
            "confirmPasswordHash": confrimPassword
        }
        // console.log(body);
        let apiResponse = axios.post('https://todolistserver-snakshay.herokuapp.com/register', body)
            .then((response) => {
                // console.log(response.data.userName)
                localStorage.setItem('user', userName);
                    localStorage.setItem('password', password);
                 dispatch(logIn(response.data.userName));
                 history.push('/dashboard');

            })
            .catch((error) => {
                // console.log("error occured" + error);
                apiResponse = error.response;
                setLoading('');

            })
            .finally(() => {
                setLoading('');
                // console.log('api response:' + apiResponse);
                if (apiResponse !== undefined) {
                    if (apiResponse.data !== undefined) {
                        setError(apiResponse.data.errorMessage ?? '');
                        console.log('user already exists!');
                    }
                }
                else {
                    // console.log("welcome " + userName);
                    dispatch(logIn(userName));
                    localStorage.setItem('user', userName);
                    localStorage.setItem('password', password);
                    history.push('/dashboard');
                }
            })




    }
    function handleNameChange(e) {
        setUserName(e.target.value);

        userName.length >= 4 ? setError('') : setError('username must be atleast 5 letters long')
    }

    return (
        < div >
            <Container component="main" maxWidth="xs" className='border'>
                <CssBaseline />
                <div className={classes.paper} >
                    {/* <Avatar className={classes.avatar}>

                    </Avatar> */}
                    <Typography component="h1" variant="h5" style={{ fontWeight: 'bold' }}>
                        Sign up
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    type='text'
                                    label="User Name"
                                    helperText={error}
                                    onChange={handleNameChange}
                                    InputLabelProps={{
                                        style: { color: '#49274a' },

                                    }}
                                    inputProps={{
                                        style: { color: '#49274a' }
                                    }}
                                    FormHelperTextProps={{
                                        style: { color: 'red' }
                                    }}
                                    className={classes.root}

                                />

                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"

                                    onChange={(e) => {
                                        password.length > 6 ? setPasswordLengthError('') : setPasswordLengthError('Password must be atleast 8 characters long');
                                        setPassword(e.target.value)
                                    }}

                                    placeholder="Password should be atleast 8 characters"
                                    className={classes.root}
                                    InputLabelProps={{

                                        className: classes.input

                                    }}
                                    inputProps={{
                                        style: { color: '#49274a' }
                                    }}
                                    FormHelperTextProps={{
                                        style: { color: 'red' }
                                    }}
                                    helperText={passwordLenghtError}
                                />

                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Confrim Password"
                                    type="password"
                                    placeholder="Password should be atleast 8 characters"
                                    // helperText={passwordError}
                                    onChange={(e) => {
                                        setconfirmPassword(e.target.value);
                                        password === confrimPassword ? setPasswordError(false) : setPasswordError(true);

                                    }}
                                    className={classes.root}
                                    InputLabelProps={{
                                        style: { color: '#49274a' }
                                    }}
                                    inputProps={{
                                        style: { color: '#49274a' }
                                    }}
                                    FormHelperTextProps={{
                                        style: { color: 'red' }
                                    }}

                                />
                                {password === confrimPassword || !passwordError ? <span></span> : <span className='error'>Password's don't match</span>}
                            </Grid>
                    
                            <Grid item xs={12}>

                                <FormControlLabel
                                    control={<Checkbox className='checkbox' color="secondary" style={{ color: 'purple' }} onClick={(e) => setUserData(!userData)} />}
                                    label="I understand that data is only for development purposes and will be deleted in production"

                                />
                               
                            </Grid>
                        </Grid>
                    </form>
                    <br/>
                    {userName.length > 2 && password.length > 7 && confrimPassword.length > 7 && password === confrimPassword  && userData?
                        <button className='btn hover' onClick={(e) => handleSubmit(e)}>  SIGN UP</button>
                        :
                        <button className='btn disabled' >SIGN UP</button>
                    }
{loading}




                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to="/LogIn" variant="body2">
                                Already have an account? Log in
                                </Link>
                        </Grid>
                    </Grid>

                </div>

                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    )
}

