import React from "react";
import { Box, makeStyles, Typography, Card } from "@material-ui/core";
import RemoveIcon from '@material-ui/icons/Remove';
import Slider from "react-slick";
import { data } from "../data/dataStructure/data.js";
import FavoriteIcon from '@material-ui/icons/Favorite';
const useStyle = makeStyles((theme) => ({
    heading: {
        fontFamily: "nunito",
        fontSize: 26,
        padding: 35,
        paddingTop: 45,
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

    },
    icon: {
        color: "#bdbac2",
    },
    carousel: {
        marginLeft: "auto",
        marginRight: "auto",
        padding: 20,
        paddingBottom: 40,

    },
    cardItem: {
        borderRadius: 5,
        height: 330,
        padding: 20,
        maxWidth: 310,
    },

    dots: {
        bottom: 0,
        "& li.slick-active button::before": {
            color: "#0168b3",
            marginTop: 55,
            fontSize: theme.typography.pxToRem(20),
        },
        "& li": {
            "& button::before": {
                fontSize: theme.typography.pxToRem(14),
                color: "#0168b3",
                marginTop: 55
            },
        }
    },
    name: {
        textAlign: "center",
        color: "white",
        fontSize: 18,
        paddingBottom: 20,
        fontFamily: "nunito",
        fontWeight: 600,
        background: "#d98ba2",
        borderRadius: 25,
        height: 15,
        marginBottom: "-20px",
        position: "relative",
        zIndex: 1,
        width:300,
        marginLeft:25,
        paddingTop:5

    },
    read: {
        color: "crimson",
        cursor: "pointer",
        marginTop: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    desc: {
        height: 230,
        fontSize: 15,
        fontFamily: "nunito",
        paddingTop: 40
    },
    container: {
        backgroundColor: "#fff5f5"
    }
}));
const DataStructure = () => {
    const classes = useStyle();
    const settings = {
        dots: true,
        infinite: true,
        speed: 1300,
        slidesToShow: 4,
        slidesToScroll: 2,
        dotsClass: `slick-dots ${classes.dots}`,
        arrows: false
    };
    return (<>
        <Box className={classes.container}>
            <Typography className={classes.heading}><RemoveIcon className={classes.icon} />&nbsp;DataStructures <Typography variant="span" style={{ color: "#4287f5", fontWeight: 600 }}>&nbsp;Blogs</Typography>&nbsp;<RemoveIcon className={classes.icon} /></Typography>
            <Box className={classes.carousel}>
                <Slider {...settings}>
                    {
                        data.map((item) => (
                            <Box>
                                <Typography className={classes.name}>{item.name}</Typography>
                                <Card className={classes.cardItem}>
                                    <Typography className={classes.desc}>{item.description}</Typography>
                                    <Typography className={classes.read}><FavoriteIcon className={classes.like} style={{ color: "grey" }} />Read More</Typography>
                                </Card>
                            </Box>
                        ))
                    }
                </Slider>
            </Box>
        </Box>
    </>);
};
export { DataStructure };