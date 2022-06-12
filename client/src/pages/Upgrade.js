import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Stack, Grid, Span, Divider} from "@mui/material";

import UpgradeComponent from "../components/upgrade";

const useStyles = makeStyles({
    root  : {
        display : 'flex !important',
        background : '#F3F5F7',
        justifyContent : 'center'
    },
    topBox : {
        display : 'flex !important',
        background : 'linear-gradient(to right bottom, #5F42F0, #8F5FDD) !important',
        width : '100%',
        height : '332px',
        justifyContent : 'center',
        textAlign : 'center'
    },
    attent : {
        marginTop : '60px',
        color : '#FFFFFF',
        fontSize : '15px',
    },
    profile : {
        fontSize : '36px',
        fontWeight : '700',
        color : '#FFFFFF',
        justifyContent : 'center'
    },
    verify : {
        fontSize : '15px',
        color : '#FFFFFF',
        justifyContent : 'center'
    },
    mainBox : {
        display : 'flex',
        position : 'absolute',
        background : "#ffffff",
        border : '1px solid #EAEAEA',
        height : 'fit-content',
        zIndex : 9999,
        marginTop : '226px',
        width : '60%',
        textAlign : 'center',
        justifyContent : 'center'
    },
    mainContent : {
        display : 'flex',
        position : 'absolute',
        marginLeft: '92px',
        marginRight : '92px',
        color : '#4115DD',
        paddingBottom : '15px',
        paddingTop : '15px',
        border : '1.5px solid #4115DD',
        background : '#F1EFFD',
        borderRadius : '5px',
        marginTop : '50px',
        paddingLeft : '30px',
        paddingRight : '30px',
        fontSize : '15px'
    },
    business : {
        color : '#000000',
        fontWeight : '700',
        fontSize : '20px',
        marginTop: '129px',
        paddingLeft :'0px',
    },
    businessLine : {
        marginTop : '164px'
    }
})

const Upgrade = (props) => {

    const classes = useStyles();

    return (
        <Box className = {classes.root}>
            <Box className= {classes.topBox}>
                <Box >
                    <Typography className = {classes.attent}>Attention needed</Typography>
                    <Typography className = {classes.profile}>Complete your business profile</Typography>
                    <Typography className = {classes.verify}>We won’t be able to process your transfer until you complete your profile and<br /> your ID verified. </Typography>
                </Box>
            </Box>
            <Box className = {classes.mainBox}>
                <UpgradeComponent />
            </Box>
        </Box>
    )
}

export default Upgrade;