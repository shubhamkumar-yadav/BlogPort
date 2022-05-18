import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import Rating from '@material-ui/lab/Rating';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
const useStyle = makeStyles({
    container: {
        background: "#fff5f5",
        height: 800,
        width: "70vw",
        margin: "auto",
        marginBottom: 40,
        borderRadius: 10
    },
    heading: {
        textAlign: "center",
        fontFamily: "nunito",
        // fontWeight: 600,
        fontSize: 20,
        color: "white",
        background: "#38758f",
        borderRadius: 25,
        width: "50%",
        height: 35,
        marginTop: 90,
        margin: "auto",
        marginBottom: "-20px",
        position: "relative",
        zIndex: 1
    },
    desc: {
        fontFamily: "nunito",
        padding: 60
    },
    icons: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "60px 60px 0px 60px",
        marginTop: "120px",
        color: "grey"
    },
    // word:{
    //     display:"flex",
    //     alignItems:"center",
    //     justifyContent:"space-between",
    //     padding:"0px 60px 0px 120px",
    //     // marginTop:"120px",
    //     color:"grey",
    //     textAlign:"center"
    // }
});
const Blog = () => {
    const classes = useStyle();
    const [rating, setRating] = React.useState(4);
    return (<>
        <Typography className={classes.heading}>Linked List</Typography>
        <Paper elevation={5} className={classes.container}>
            <SimpleBar style={{ maxHeight: "90vh" }}>
                <Typography className={classes.desc}>
                    What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Why do we use it?
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    Where does it come from?
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </Typography>
                <Box className={classes.icons}>
                    <Box component="fieldset" mb={3} borderColor="transparent" style={{cursor:"pointer"}}>
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                        />
                    </Box>
                    <Box style={{cursor:"pointer"}}>
                        <CommentIcon />
                    </Box>
                    <Box style={{cursor:"pointer"}}>
                        <ShareIcon />
                    </Box>
                </Box>
            </SimpleBar>
        </Paper>
    </>);
};
export { Blog };