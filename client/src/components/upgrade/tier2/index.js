import React from "react";
import { Box, Stack, Grid , Typography, Divider, TextField, Radio, Button} from '@mui/material';

import { makeStyles } from "@mui/styles";
import { textAlign } from "@mui/system";
import { styled } from '@mui/material/styles';

import PropTypes from 'prop-types';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { useNavigate } from "react-router-dom";

const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
    ({ theme, checked }) => ({
      '.MuiFormControlLabel-label': checked && {
        color: theme.palette.primary.main,
      },
    }),
);

function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();
  
    let checked = false;
  
    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }
  
    return <StyledFormControlLabel checked={checked} {...props} />;
}
  
MyFormControlLabel.propTypes = {
    /**
     * The value of the component.
     */
    value: PropTypes.any,
};

const useStyles = makeStyles ({
    mainContent : {
        display : 'flex',
        color : '#4115DD',
        paddingBottom : '15px',
        paddingTop : '15px',
        border : '1.5px solid #4115DD',
        background : '#F1EFFD',
        borderRadius : '5px',
        marginTop : '50px',
        fontSize : '15px',
        textAlign : 'center',
        justifyContent : 'center'
    },
    mainBox : {
        marginLeft : '92px',
        marginRight : '92px',
    },
    business : {
        marginTop : '30px',
        fontSize : '20px',
        fontWeight : '700',
        marginLeft : '0px !important',
        textAlign : 'left !important'
    },
    company : {
        fontSize : '15px',
        color : '#1B262C',
        marginTop : '20px',
        textAlign : 'left !important'
    },
    btnSave : {
        marginTop : '40px', 
        width : '60%', 
        background : '#183765', 
        borderRadius : '3px', 
        color:'#FFFFFF',
        fontSize : '17px',
        "&:hover" : {
            background : '#D5D5D5',
            color : '#000000',
        }
    },
    btnUpload : {
        borderRadius : '3px', 
        border : '1px solid #183765', 
        height : '140px', 
        marginTop : '20px'
    }
})

const TierComponent = (props) => {

    const classes = useStyles();

    const navigate = useNavigate();

    const onToDashboard = () => {
        navigate("/dashboard");
    }

    return (
        <>
        <Box className= {classes.mainBox}>
            <Grid container>
                <Grid item xs = {12} lg = {12}>
                    <Box className = {classes.mainContent}>You are able to transfer&nbsp;<Typography sx = {{fontWeight : '700 !important'}}>3,000 NOK</Typography>&nbsp;monthly by completing your profile</Box>
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <Box className = {classes.business}>Proof of identify</Box>
                    <Divider sx = {{marginTop : '8px'}} />
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <Box className = {classes.company}>Your registration letter</Box>
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <Button fullWidth className = {classes.btnUpload}>Upload registration letter</Button>
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <Box className = {classes.business}>Proof of funds</Box>
                    <Divider sx = {{ marginTop : '20px', background : "#D5D5D5" }}/>
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <Box className = {classes.company}>Upload your last bank statement as proof of funds.</Box>
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <Button fullWidth className = {classes.btnUpload}>Upload bank statement</Button>
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <Box className = {classes.business}>Proof of address</Box>
                    <Divider sx = {{ marginTop : '20px', background : "#D5D5D5" }}/>
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <Box className = {classes.company}>Please upload an utility bill to verify your</Box>
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <Button fullWidth className = {classes.btnUpload}>Upload utility bill</Button>
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <Button fullWidth onClick = {onToDashboard} className = {classes.btnSave}>Save and submit</Button>
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <Typography sx = {{color : '#818181', marginTop : '20px', fontSize : '13px'}}>By confirming, you affirm that the information you provided above iscompletely accurate&nbsp;<br/>and you are authorized representative of thebusiness, who have authorization to send&nbsp;<br/>money or get paid on behalf ofthe business</Typography>
                </Grid>
            </Grid>
        </Box>
        </>
    )
}
export default TierComponent;