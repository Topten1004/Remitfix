import React from "react";

import { makeStyles } from "@mui/styles";

import { Box, Divider, FormControl, Select, Option, MenuItem, Typography, TextField } from "@mui/material";

const useStyles = makeStyles({
    container : {
        display : 'flex',
        flexWrap  : 'wrap'
    },
    textField : {
        margin : 'auto',
        alignItems : 'center',
        color : '#1B262C',
        fontSize : '30px',
        fontWeight : '700',
    },
    resize : {
        fontSize : 23,
    }
});

const SelectCurrency  = (props) => {
    
    const {title, price} = props;

    const classes = useStyles();
    return (
        <Box fullWidth sx={{ background: '#FFFFFF', borderRadius: '5px', border: '2px solid #818181', marginTop: '10px' }}>
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ marginLeft : '15px', display: 'block', width: '85%' }}>
                <Typography sx = {{ fontSize : '15px', color : '#818181'}}>{title}</Typography>
                <TextField variant="standard" fullWidth className = {classes.textField} defaultValue = {price} InputProps = {{ disableUnderline : true, classes: { input : classes.resize }}}></TextField>
            </Box>
            <Box sx = {{ width : '15%', display : 'flex'}}>
                <Divider orientation="vertical" />
                <Box sx = {{ marginLeft: '5px', marginRight:'0px'}}>
                    <FormControl style={{minWidth: 120, margin: 'auto', padding : 'auto', marginTop : '15px', fontWeight  : '700' }}>
                        <Select fullWidth sx = {{ width : '100% !important', fontSize : '24px', fontWeight : '700'}} id="demo-simple-select" variant="standard" disableUnderline>
                            <MenuItem value={10}>USDT</MenuItem>
                            <MenuItem value={20}>NOK</MenuItem>
                            <MenuItem value={30}>POUND</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    </Box>
    )
}
export default SelectCurrency;