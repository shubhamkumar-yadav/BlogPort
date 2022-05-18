import React, { useState } from "react";
import { AppBar, Badge, Box, Link, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const useStyle = makeStyles({
    container: {
        background: "white",
        height: 80,
        boxShadow: "none"
    },
    logo: {
        color: "#0e4db3",
        fontFamily: "Oleo Script Swash Caps",
        fontSize: 35,
        cursor: "pointer",
    },
    subContainer: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "auto",
        marginBottom: "auto",
        padding: "0px 40px 0px 40px"
    },
    loginBtn: {
        // background: "#f0ddef",
        // color: "red",
        textTransform: "capitalize",
        // '&:hover': {
        //     cursor: 'pointer',
        //     color: "black",
        //     background: "#f0ddef",
        //     height: 48,
        //     width: 200,

        // },
        // height: 46,
        // width: 190,
        // fontFamily: "poppins",
        // fontWeight:600,
        display: "flex",
        alignItems: "center"
    },
    cart: {
        color: "#526075",
        fontSize: 33
    }
});
const Header = () => {
    const classes = useStyle();
    const [showLoginButton, setShowLoginButton] = useState(true);
    const [showLogoutButton, setShowLogoutButton] = useState(false);
    const clientId = "834370218751-m8cjhi7upfrfmqptj409vme68rsmq04l.apps.googleusercontent.com";
    const onLoginSuccess = (res) => {
        console.log("Login Success:", res.profileObj);
        setShowLoginButton(false);
        setShowLogoutButton(true);
    };
    const onFailureSuccess = (res) => {
        console.log("Login Failed:", res);
    };
    const onSignoutSuccess = () => {
        alert("Logout Success");
        setShowLoginButton(true);
        setShowLogoutButton(false);
    };
    return (<>
        <AppBar className={classes.container}>
            <Toolbar className={classes.subContainer}>
                <Typography className={classes.logo}><Link href="/" style={{ textDecoration: "none", color: "#0e4db3", }}>BlogPort</Link></Typography>
                <Box className={classes.loginBtn}>
                    {showLoginButton ?
                        <GoogleLogin
                            clientId={clientId}
                            buttonText="Login"
                            onSuccess={onLoginSuccess}
                            onFailure={onFailureSuccess}
                            cookiePolicy={'single_host_origin'}
                        // icon={false}
                        /> : null
                    }
                    {showLogoutButton ?
                        <>
                            <Badge 
                            badgeContent={4} 
                            color="error" 
                            showZero
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                              }}
                            >
                                <ShoppingCartIcon className={classes.cart} />&nbsp;&nbsp;&nbsp;&nbsp;
                            </Badge>
                            <GoogleLogout
                                clientId={clientId}
                                buttonText="Logout"
                                onLogoutSuccess={onSignoutSuccess}
                            // icon={false}
                            />
                        </>
                        : null
                    }
                    {/* <Link href="/login" style={{ textDecoration: "none", color: "grey", display: "flex", alignItems: "center" }}>
                        <img style={{ width: 20 }} src={google} alt="google" />&nbsp;
                    </Link> */}
                </Box>
            </Toolbar>
        </AppBar>
    </>)
};
export { Header };