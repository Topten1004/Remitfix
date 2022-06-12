import React from "react";
import { Box, Stack, Grid , Typography, Divider, TextField, Radio, Button} from '@mui/material';

import { makeStyles } from "@mui/styles";
import { textAlign } from "@mui/system";
import { styled } from '@mui/material/styles';

import PropTypes from 'prop-types';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { CountrySelect } from "../authentication/register";

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
        color : '#707070',
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
    }
})
const UpgradeComponent = (props) => {

    const classes = useStyles();

    const navigate = useNavigate();

    const onTier = () => {
        navigate("/tier");
    }
    return (
        <>
        <Box className= {classes.mainBox}>
            <Grid container>
                <Grid item xs = {12} lg = {12}>
                    <Box className = {classes.mainContent}>You are able to transfer&nbsp;<Typography sx = {{fontWeight : '700 !important'}}>3,000 NOK</Typography>&nbsp;monthly by completing your profile</Box>
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <Box className = {classes.business}>Business information</Box>
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <Box className = {classes.company}>Company name</Box>
                </Grid>
                <Divider />
                <Grid item xs = {12} lg = {12}>
                    <TextField fullWidth sx = {{marginTop : '8px'}}></TextField>
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <Box className = {classes.company}>Registration number</Box>
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <TextField fullWidth sx = {{marginTop :'8px'}}></TextField>
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <Box className = {classes.company}>Compnay type</Box>
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <RadioGroup name="use-radio-group" defaultValue="first">
                    <Stack direction="row">
                        <MyFormControlLabel sx={{ borderRadius :'5px', width: '50%', border: '1px solid #D5D5D5', marginLeft: '0px' , marginTop : '10px'}} value="Sole" label="Sole proprietorship" control={<Radio />} />
                        <MyFormControlLabel sx={{ borderRadius :'5px', width: '50%', border: '1px solid #D5D5D5', marginRight: '0px ! important' , marginTop : '10px'}} value="Partner" label="Partnership" control={<Radio />} />
                    </Stack>
                    </RadioGroup>
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <RadioGroup name="use-radio-group" defaultValue="first">
                    <Stack direction="row">
                        <MyFormControlLabel sx={{ borderRadius :'5px', width: '50%', border: '1px solid #D5D5D5', marginLeft: '0px' , marginTop : '10px'}} value="Limited" label="Limited Company" control={<Radio />} />
                        <MyFormControlLabel sx={{ borderRadius :'5px', width: '50%', border: '1px solid #D5D5D5', marginRight: '0px ! important' , marginTop : '10px'}} value="Non" label="Non-profit" control={<Radio />} />
                    </Stack>
                    </RadioGroup>
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <RadioGroup name="use-radio-group" defaultValue="first">
                    <Stack direction="row">
                        <MyFormControlLabel sx={{ borderRadius :'5px', width: '50%', border: '1px solid #D5D5D5', marginLeft: '0px', marginTop : '10px' }} value="Trust" label="Trust" control={<Radio />} />
                        <MyFormControlLabel sx={{ borderRadius :'5px', width: '50%', border: '1px solid #D5D5D5', marginRight: '0px ! important' , marginTop : '10px'}} value="Other" label="Other" control={<Radio />} />
                    </Stack>
                    </RadioGroup>
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <Box className = {classes.company} sx = {{marginTop : '20px'}}>Brief description of your company</Box>
                    <TextField fullWidth multiline id="outlined-multiline-static" rows={4} defaultValue="" sx = {{marginTop : '8px'}}></TextField>
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <Box className = {classes.business}>Business address</Box>
                    <Divider sx = {{ background : '#EAEAEA'}} />
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <Box className = {classes.company}>Street address</Box>
                    <TextField fullWidth></TextField>
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <Box className = {classes.company}>City/Town</Box>
                    <TextField fullWidth></TextField>
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <Box className = {classes.company}>Postal Code</Box>
                    <TextField fullWidth></TextField>
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <Box className = {classes.company}>Country of registration</Box>
                    <CountrySelect fullWidth />
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <Button fullWidth onClick = {onTier} className = {classes.btnSave}>Save and submit</Button>
                </Grid>
                <Grid item xs = {12} lg = {12}>
                    <Typography sx = {{color : '#818181', marginTop : '20px', fontSize : '13px'}}>By confirming, you affirm that the information you provided above iscompletely accurate &nbsp;<br/>and   you   are   authorized   representative   of   thebusiness, who have authorization to send&nbsp;<br/>money or get paid on behalf ofthe business</Typography>
                </Grid>
            </Grid>
        </Box>
        </>
    )
}
export default UpgradeComponent;