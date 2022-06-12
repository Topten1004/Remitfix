import React from "react";

import {
    CircularProgress,
    TableCell, TableRow
} from '@mui/material' ;

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    loading : {
        textAlign : 'center'
    }
}));

const TableLoading = (props) => {

    const classes = useStyles() ;

    const {
        colSpan
    } = props ;

    return (
        <>
            <TableRow>
                <TableCell colSpan={colSpan} className={classes.loading}>
                    <CircularProgress 
                        size={30}
                    />
                </TableCell>
            </TableRow>
        </>
    )
}
export default TableLoading ;