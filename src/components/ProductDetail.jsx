import React from "react";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import Slider from "react-slick";
import { subTshirt } from "../data/tshirt/tshirt.js";
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const useStyle = makeStyles({
    container: {
        height: 690,
        display: "flex",
        alignItems: "center",
        marginTop: 80,
        width: "85vw",
        margin: "auto",
        paddingLeft: 50,
        paddingRight: 50
    },
    productImg: {
        height: "auto",
        // width: 90
    },
    productBtn: {
        color: "white",
        textTransform: "capitalize",
        borderRadius: 0,
        width: 280,
        fontSize: 17,
        padding: 8,
        marginTop: 40
    },
    leftContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
    },
    rightContainer: {

    },
    heading: {
        fontFamily: "nunito",
        fontSize: 20,
        fontWeight: 600,
        color: "#2d302e"
    },
    productPrice: {
        display: "flex",
        alignItems: "center",
        paddingTop: 20
    },
    mainDesc: {
        paddingTop: 20,
        paddingLeft: 16
    },
    Desc: {
        color: "grey",
        fontSize: 15,
        padding: 8,
        // paddingLeft:35,
        lineHeight: 2
    },
    Desc1: {
        fontWeight: 600,
        fontSize: 16,
        fontFamily: "nunito"
    }
});
// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block",borderRadius:"50%",background:"black" }}
//             onClick={onClick}
//         />
//     );
// }

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", borderRadius:"50%",background:"black" }}
//             onClick={onClick}
//         />
//     );
// }
const ProductDetail = () => {
    const classes = useStyle();
    const settings = {
        dots: false,
        infinite: true,
        // speed: 1300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000    };
    return (<>
        <Grid container className={classes.container}>
            <Grid item xs={6} className={classes.leftContainer}>
                <Box style={{ width: 250 }}>
                    <Slider {...settings}>
                        {
                            subTshirt.map((item) => (
                                <img className={classes.productImg} src={item.url} alt="product" />
                            ))
                        }
                    </Slider>
                </Box>
                <Button variant="contained" color="primary" className={classes.productBtn}>Add to Cart</Button>
            </Grid>
            <Grid item xs={6} className={classes.rightContainer}>
                <Typography className={classes.heading}>Declare Variables not War Half Sleeve Unisex T-Shirt</Typography>
                <Typography className={classes.productPrice}><Typography style={{ color: "grey", fontSize: 18 }}><s style={{ color: "grey" }}>₹599</s></Typography><Typography style={{ fontWeight: 600, marginLeft: 20, fontSize: 18 }}>₹369</Typography></Typography>
                <Box className={classes.mainDesc}>
                    <ul>
                        <li className={classes.Desc}><Typography className={classes.Desc1}>Material/ Fabric&nbsp;:</Typography>100% Cotton, Bio-Wash</li>
                        <li className={classes.Desc}><Typography className={classes.Desc1}>Size & Fit&nbsp;: </Typography>This brand runs true to size. To ensure the best fit, we suggest consulting the size chart.</li>
                        <li className={classes.Desc}><Typography className={classes.Desc1}>Wash&nbsp;:</Typography>Don’t use Soap or Detergent directly on print.</li>
                    </ul>
                </Box>
                <Typography style={{ fontSize: "14px" }} className={classes.Desc}><Typography variant="span" className={classes.Desc1}>Colour&nbsp;:</Typography> &nbsp;&nbsp;Blue , Black , Red , Orange</Typography>
                <Box style={{ padding: 8 }}>
                    <Button style={{ background: "#0b2561", height: 37, width: 30 }}></Button>&nbsp;
                    <Button style={{ background: "black", height: 37, width: 30 }}></Button>&nbsp;
                    <Button style={{ background: "red", height: 37, width: 30 }}></Button>&nbsp;
                    <Button style={{ background: "orange", height: 37, width: 30 }}></Button>
                </Box>
                <Typography style={{ fontSize: "14px" }} className={classes.Desc}><Typography variant="span" className={classes.Desc1}>Size&nbsp;:</Typography>&nbsp;&nbsp;L</Typography>
                <Box style={{ padding: 8 }}>
                    <Button variant="outlined">S</Button>&nbsp;
                    <Button variant="outlined">M</Button>&nbsp;
                    <Button variant="outlined">L</Button>&nbsp;
                    <Button variant="outlined">XL</Button>&nbsp;
                    <Button variant="outlined">XXL</Button>
                </Box>
                <Typography className={classes.Desc}><Typography variant="span" style={{ color: "red" }} className={classes.Desc1}>Note&nbsp;:</Typography>&nbsp;&nbsp;Replacement  within 7 Days & Delivery Charges can't be refunded  </Typography>
            </Grid>
        </Grid>
    </>);
};
export { ProductDetail };