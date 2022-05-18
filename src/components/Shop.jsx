import React from "react";
import {Button, Grid, Link, makeStyles,Paper, Typography} from "@material-ui/core";
import image from "../Images/shop.jpg";
const useStyle = makeStyles({
    picture:{
        // height:"auto",
        width:"100%",
        paddingTop:50,
        // borderRadius:10
    },
    paper:{
        height:300,
        width:570,
        // background:"red",
        marginLeft:"-530px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        fontFamily:"nunito",
        fontSize:18,
        fontWeight:600,
    },
    Btn:{
        textTransform:"capitalize",
        fontSize:16,
        background:"#4287f5",
        color:"white",
        width:120,
        fontWeight:600,
        marginTop:20,
        '&:hover': {
            cursor: 'pointer',
            color: "white",
            background: "pink",
            height: 45,
            width: 125,

        },
    }
});
const Shop = ()=>{
    const classes = useStyle();
    return(<>
    <Grid container style={{background:"#f5e9e9",padding:"30px 0px 70px 0px"}}>
        <Grid item xs={6}>
            <img src={image} alt="shop" className={classes.picture} />
        </Grid>
        <Grid item xs={6} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Paper elevation={5} className={classes.paper}>
                <Typography className={classes.text}>Shop Your Customized T-shirts Here</Typography>
                <Button className={classes.Btn}><Link href="/tshirt" style={{ textDecoration: "none", color: "white", display: "flex", alignItems: "center" }}>Explore</Link></Button>
            </Paper>
        </Grid>
    </Grid>
    </>);
};
export{Shop};