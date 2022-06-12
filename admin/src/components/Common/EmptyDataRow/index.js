import React from "react";

import HourglassDisabledIcon from '@mui/icons-material/HourglassDisabled';

import {
    Box,
    TableCell, 
    TableRow
} from '@mui/material' ;

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    empty : {
        textAlign : 'center !important',
        fontSize : '16px !important'
    },
    box : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    }
}));

const EmptyDataRow = (props) => {

    const classes = useStyles() ;

    const {
        colSpan
    } = props ;

    return (
        <>
            <TableRow>
                <TableCell colSpan={colSpan} className={classes.empty}>
                    <Box className={classes.box}>
                        <HourglassDisabledIcon />Empty Database
                    </Box>
                </TableCell>
            </TableRow>
        </>
    )
}
export default EmptyDataRow ;