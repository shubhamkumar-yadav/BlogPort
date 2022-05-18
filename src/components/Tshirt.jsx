import React from "react";
import { makeStyles, Box, Typography, Grid, Link } from "@material-ui/core";
import { Button } from '@mantine/core';
import { tshirt } from "../data/tshirt/tshirt.js";
import RemoveIcon from '@material-ui/icons/Remove';
const image = "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const useStyle = makeStyles({
    container: {
        backgroundImage: `url(${image})`,
        height: "693px",
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        // justifyContent:"center",
        // objectFit: "contain",
        flexDirection: "column",
        backgroundColor: "#faedee"
    },
    txt: {
        fontFamily: "Poppins",
        // fontWeight:600,
        fontSize: 40,
        marginLeft: 620,
        marginTop: 220
    },
    shop: {
        textTransform: "capitalize",
        marginTop: 40,
        marginLeft: 545,
        width: 150,
        border: "none",
        outline: "none",
        height: 40,
        // color:"black"
    },
    subContainer: {
        background: "#f5f2f2",
    },
    productImg: {
        height: "auto",
        width: "55%",
        padding: 10,
        marginLeft: 50,
    },
    product: {
        height: 390,
        padding: 20,
        background:"white",
        marginTop:25,
        // boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        '&:hover': {
            transform: "scale(1)",
            cursor: 'pointer',
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        },
    },
    productDec: {
        color: "grey",
        fontSize: 14,
        textAlign: "center",
        // paddingTop:10,
        height: 20
    },
    productTxt: {
        padding: "0px 30px 0px 30px",
        paddingTop: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 65
    },
    heading: {
        textAlign: "center",
        paddingTop: 45,
        fontFamily: "nunito",
        fontSize: 23,
        fontWeight: 600,
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    icon: {
        color: "#bdbac2",
    }
});
const Tshirt = () => {
    const classes = useStyle();
    return (<>
        <Box className={classes.container}>
            <Typography className={classes.txt}>Get Your <Typography variant="span" style={{ color: "#f2acb0" }}>&nbsp;Customized </Typography><br /> Tshirts</Typography>
            <Link href="#deal" style={{ textDecoration: "none", color: "white", display: "flex", alignItems: "center" }}><Button variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }} className={classes.shop}>Shop Now</Button></Link>
        </Box>
        <Box className={classes.subContainer}>
            <Typography id="deal" className={classes.heading}><RemoveIcon className={classes.icon} />&nbsp;Deal For Everyone&nbsp;<RemoveIcon className={classes.icon} /></Typography>
            <Grid container style={{ padding: "22px 30px 40px 40px" }}>
                {
                    tshirt.map((item, index) => {
                        return (
                                <Grid  item className={classes.product} xs={3}>
                                    <Link href="/productDetail" style={{textDecoration:"none"}}>
                                        <img className={classes.productImg} src={item.url} alt={index} />
                                        <Typography className={classes.productDec}>{item.desc}</Typography>
                                        <Typography className={classes.productTxt}><Typography style={{ fontSize: 14,color:"black" }}>₹369</Typography> <Typography style={{ color: "grey", fontSize: 14 }}><s>₹499</s></Typography><Typography style={{ color: "green", fontSize: 12 }}>46% &nbsp;off</Typography></Typography>
                                        <Typography style={{ color: "green", fontSize: 15, fontWeight: 600, paddingLeft: 27, height: 15 }}>Deal of the Day</Typography>
                                    </Link>
                                </Grid>
                        );
                    })
                }
            </Grid>
        </Box>
    </>);
};
export { Tshirt };