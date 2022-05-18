import React from "react";
import image from "../Images/lond.jpg";
import { Box, makeStyles,Button } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
const useStyle = makeStyles({
    container: {
        backgroundImage: `url(${image})`,
        height: "693px",
        // width: '100vw',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop:60,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
    },
    input: {
        background:"white",
        height:60,
        width:630,
        paddingLeft:20,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5
    },
    iconButton:{
        background:"#4287f5",
        height:60,
        borderRadius:0,
        '&:hover': {
            cursor: 'pointer',
            background:"#4287f5"

        },
        color:"white",
        borderTopRightRadius:5,
        borderBottomRightRadius:5

    },
    main:{
        display:"flex",
        alignItems:"center",
        paddingTop:30
    }
});
const Landing = () => {
    const classes = useStyle();
    return (<>
        <Box style={{ backgroundColor: "#101224",}}>
            <Box className={classes.container}>
                <Box className={classes.main}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search Our Blogs ....."
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <Button type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </Button>
                </Box>
            </Box>
        </Box>
    </>);
};
export { Landing };