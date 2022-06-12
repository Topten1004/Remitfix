import React from 'react';

import { Link } from 'react-router-dom';
import {
    Box,
    Stack,
    Button,
    Checkbox,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl
} from '@mui/material';

import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(() => ({
    smallTitle : {
        fontSize : '17px',
        fontWeight : '700',
        marginTop:'24px',
        marginBottom : '22px',
        marginLeft: '20px'
    },
    btnCurrent: {
        color: '#4115DD',
        border : '1px solid #4115DD',
        background : '#F1EFFD',
        fontSize: '15px',
        borderRadius : 3,
        marginBottom : '19px',
        marginTop : '19px',
        height : '28px',
        marginRight : '21px'
    },
    root: {
        marginLeft:'10px',
        border: "1px solid",
        borderColor: '#EAEAEA',
        display: "flex",
        flexDirection: "column",
        marginTop:'28px'
    },
    title: {
        paddingTop:'15px',
        paddingLeft:'15px',
        fontSize: "14px",
        fontWeight: "bold"
    },
    content: {
        paddingTop:'15px',
        paddingLeft:'15px',
        fontSize: "14px",
        paddingBottom:'10px',
    }
}));

const VerifyInfo = () => {

    const classes = useStyles();

    return (
        <Box component={"div"} className={classes.root}>
            <Stack justifyContent='space-between' flexDirection={'row'}>
                <Box className= {classes.smallTitle}>Tier</Box>
                <Button className={classes.btnCurrent}>Current</Button>
            </Stack>
            <Divider />
            <Stack flexDirection={'column'} justifyContent={'center'}>
                <Stack flexDirection={'row'} sx = {{ p:'150'}}>
                    <Box component={"div"} className={classes.title} >
                        Transfer amount in this level :
                    </Box>
                    <Box  sx={{ color: '#4115DD', mt:'13px', fontWeight : '700'}}>
                              3,000$
                    </Box>
                </Stack>
                <Stack justifyContent={'space-between'} flexDirection={'row'}>
                    <Box component={"div"} className={classes.content} sx={{ pt: '10px' }}>
                        Business details
                    </Box>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="other" control={<Radio />} label="Complete" sx={{ color: '#00FF00'}} />
                        </RadioGroup>
                    </FormControl>
                </Stack>
                <Stack justifyContent={'space-between'} flexDirection={'row'}>
                    <Box component={'div'} className={classes.content}>
                        Business address
                    </Box>
                    <Link to="/dashboard">
                        <Box component="p" sx = {{paddingTop:'15px', paddingRight:'20px', margin:'auto'}}>Fill in your details</Box>
                    </Link>
                </Stack>
            </Stack>
        </Box >
    )
}

export default VerifyInfo;