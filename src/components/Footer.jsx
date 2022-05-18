import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailIcon from '@material-ui/icons/Mail';
const useStyle = makeStyles({
    container: {
        backgroundColor: "#0369b3",
        height: 374.6,
        bottom: 0,
        width: "100%",
        // marginTop:40
    },
    innerContainer: {
        display: "flex",
        padding: 40
    },
    innerFooter: {
        backgroundColor: "#116fb2",
        height: 82.5,
        width: "100%",
        bottom: 0,
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    footerText: {
        '&:hover': {
            color: "#e87287",
            cursor: 'pointer',
        }
    },
    social: {
        display: "flex",
        color: "white",
        padding: "10px 0px 0px 0px",
        alignItems: "center",
    },
    socialIcon: {
        '&:hover': {
            color: "#ee344e",
            cursor: 'pointer',
        },
        fontSize: 30
    },
    patient: {
        color: "white",
        display: "flex",
        alignItems: "center",
        padding: "5px 5px 5px 0px",
        transition: "background-position 275ms ease",
        '&:hover': {
            cursor: 'pointer',
            fontSize:7,
            color:"#e87287"
        },
    },
    forPatient: {
        paddingLeft: 50
    },
    contact:{
        color:"white",
        display:"flex",
        alignItems:"center",
        padding:5
    }
});
const Footer = () => {
    const classes = useStyle();
    return (<>
        <footer>
            <Box className={classes.container}>
                <Grid container className={classes.innerContainer}>
                    <Grid item xs={3}>
                        <Typography style={{ height: "auto", maxWidth: "57%", cursor: 'pointer',color:"white",fontFamily: "Oleo Script Swash Caps",fontSize:30 }}>BlogPort</Typography>
                        <Typography style={{ color: "white", fontSize: "0.9375rem", marginTop: 18, marginBottom: 7 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                        <Box className={classes.social}>
                            <FacebookIcon className={classes.socialIcon} variant="filled" />
                            <TwitterIcon style={{ padding: 5 }} className={classes.socialIcon} variant="outlined" />
                            <LinkedInIcon style={{ padding: 5 }} className={classes.socialIcon} variant="outlined" />
                            <InstagramIcon style={{ padding: 5 }} className={classes.socialIcon} variant="outlined" />
                            <SportsBaseballIcon style={{ padding: 5 }} className={classes.socialIcon} variant="outlined" />
                        </Box>
                    </Grid>
                    <Grid item xs={3} className={classes.forPatient}>
                        <Typography style={{ fontWeight: 700, color: "white", fontSize: 20, marginBottom: 30, textTransform: "capitalize", fontFamily: "Poppins,sans-serif" }}>Assistance</Typography>
                        <Typography className={classes.patient}><ArrowForwardIosIcon style={{fontSize:14}} />&nbsp;&nbsp;<Typography>Home</Typography></Typography>
                        <Typography className={classes.patient}><ArrowForwardIosIcon style={{fontSize:14}} />&nbsp;&nbsp;<Typography>About Us</Typography></Typography>
                        <Typography className={classes.patient}><ArrowForwardIosIcon style={{fontSize:14}} />&nbsp;&nbsp;<Typography>Login</Typography></Typography>
                        <Typography className={classes.patient}><ArrowForwardIosIcon style={{fontSize:14}} />&nbsp;&nbsp;<Typography>Sign Up</Typography></Typography>
                        <Typography className={classes.patient}><ArrowForwardIosIcon style={{fontSize:14}} />&nbsp;&nbsp;<Typography>Contact Us</Typography></Typography>
                    </Grid>
                    <Grid item xs={3} className={classes.forPatient}>
                        <Typography style={{ fontWeight: 700, color: "white", fontSize: 20, marginBottom: 30, textTransform: "capitalize", fontFamily: "Poppins,sans-serif" }}>We Provide</Typography>
                        <Typography className={classes.patient}><ArrowForwardIosIcon style={{fontSize:14}} />&nbsp;&nbsp;<Typography>DataStructures</Typography></Typography>
                        <Typography className={classes.patient}><ArrowForwardIosIcon style={{fontSize:14}} />&nbsp;&nbsp;<Typography>Blockchain</Typography></Typography>
                        <Typography className={classes.patient}><ArrowForwardIosIcon style={{fontSize:14}} />&nbsp;&nbsp;<Typography>Algorithms</Typography></Typography>
                        <Typography className={classes.patient}><ArrowForwardIosIcon style={{fontSize:14}} />&nbsp;&nbsp;<Typography>ReactJs</Typography></Typography>
                        <Typography className={classes.patient}><ArrowForwardIosIcon style={{fontSize:14}} />&nbsp;&nbsp;<Typography>Python</Typography></Typography>
                    </Grid>
                    <Grid item xs={3} className={classes.forPatient}>
                        <Typography style={{ fontWeight: 700, color: "white", fontSize: 20, marginBottom: 30, textTransform: "capitalize", fontFamily: "Poppins,sans-serif" }}>Contact Us</Typography>
                        <Typography className={classes.contact}>
                            <LocationOnIcon style={{padding:"10px 10px 10px 0px",fontSize:27}}/>3556 Beech Street, San Francisco,California, CA 94108
                        </Typography>
                        <Typography className={classes.contact}><PhoneAndroidIcon style={{padding:"10px 10px 10px 0px"}} fontSize='small'/>+1 315 369 5943</Typography>
                        <Typography className={classes.contact}><MailIcon style={{padding:"10px 10px 10px 0px"}} fontSize='small'/> doccure@example.com</Typography>
                    </Grid>
                </Grid>
                <Box className={classes.innerFooter}>
                    <Typography style={{ padding: 35 }}>© 2022 BlogPort. All rights reserved.</Typography>
                    <Typography style={{ padding: 35 }}>
                        <Typography variant='span' className={classes.footerText}>Terms and Conditions</Typography>&nbsp; | &nbsp;<Typography className={classes.footerText} variant='span'>Policy</Typography>
                    </Typography>
                </Box>
            </Box>
        </footer>
    </>);
};
export { Footer };