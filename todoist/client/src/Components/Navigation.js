import React, { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



import './styles/navigation.css';


function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export default function Navigation(props) {

    const [width] = useWindowSize();
    // console.log("device resoultion:" + height + "*" + width);
    const User = useSelector((state) => state.User);

    return (
        <div>
            <div>
                <AppBar >
                    <Toolbar className='Navbar'>

                        {User.length === 0 ?
                            <>
                                <Typography variant="h6" className='linkElement'>
                                    {width > 650 ?
                                        <Link to='/' className='link'>Home</Link> :
                                        <Link to='/'><i className="fas fa-home link" title='Home'></i></Link>}
                                </Typography>
                                <Typography variant="h6" className='linkElement'>
                                    {width > 650 ?
                                        <Link to='/About' className='link'>About</Link> :
                                        <Link to='/About' className='link'><i className="fas fa-info link" title='About'></i>
                                        </Link>
                                    }
                                </Typography>

                                <Typography variant="h6" className='linkElement' style={{ flex: 20 }} >
                                    {width > 650 ?
                                        <Link to='/SignIn' className='link'>SignUp </Link> :
                                        <Link to='/SignIn' className='link'><i className="fas fa-user-plus link" title='SigUp'></i>
                                        </Link>
                                    }

                                </Typography>
                                <Typography variant="h6" className='linkElement' style={{ flex: 1 }}>
                                    {width > 650 ?
                                        <Link to='/LogIn' className='link '>Login</Link> :
                                        <Link to='/LogIn' className='link '><i className="fas fa-sign-in-alt link" title='LogIn'></i></Link>
                                    }

                                </Typography>

                            </>
                            : <>
                                <Typography variant="h6" className='linkElement'>
                                    {width > 650 ?
                                        <Link to='/' className='link'>Home</Link> :
                                        <Link to='/'><i className="fas fa-home link" title='Home'></i></Link>}
                                </Typography>
                                <Typography variant="h6" className='linkElement'>
                                    {width > 650 ?
                                        <Link to='/About' className='link'>About</Link> :
                                        <Link to='/About' className='link'><i className="fas fa-info link" title='About'></i>
                                        </Link>
                                    }
                                </Typography>


                                <Typography variant="h6" className='linkElement' style={{ flex: 20 }}>
                                    {width > 650 ?
                                        <Link to='/Dashboard' className='link '>Hi {User}!</Link> :
                                        <Link to='/Dashboard' className='link '><i className="far fa-user link"></i></Link>
                                    }

                                </Typography>
                                <Typography variant="h6" className='linkElement' style={{ flex: 1 }} >
                                    {width > 650 ?
                                        <Link to='/LogOut' className='link'>LogOut </Link> :
                                        <Link to='/LogOut' className='link'><i className="fas fa-sign-out-alt link"></i>
                                        </Link>
                                    }

                                </Typography>

                            </>}
                    </Toolbar>
                </AppBar>

                <Toolbar />

            </div>
            <br />
            <br />
        </div >
    )
}