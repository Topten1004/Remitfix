            
import React, { useEffect, useState } from 'react' ;

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import swal from 'sweetalert';

import {
    Box,
    Table,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
    Collapse,
    IconButton,
    ButtonGroup,
    Button
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    btGp : {
        "& .MuiButtonBase-root" :{
            textTransform : 'capitalize !important'
        }
    },
    title : {
        paddingLeft : '20px',
        textAlign : 'left',
        fontSize : '16px',
        fontWeight : "bold"
    }
}))
const ProfileTableRow = (props) => {

    const classes = useStyles() ;

    const profileHeadFields = [
        "First Name",
        "Last Name",
        "Coutry" ,
        "Language" ,
        "City" ,
        "Street",
        "Birthday"
    ]

    const { 
        row,
        DeleteUser, UserList,
        navigate
    } = props;

    const [open, setOpen] = useState(false);
  
    const handleDeleteRow = async (_id) => {
        const isOk = await swal({
            title: "Are you sure?",
            text: "Are you sure you wish to delete this user?",
            icon: "warning",
            buttons: [
              'No, I am not sure!',
              'Yes, I am sure!'
            ],
        }) ;

        if(isOk) {
            let result = await DeleteUser(_id) ;

            if(result) UserList() ;
        }
    }

    const handleUpdateRow = async (row) => {
        navigate('/Remit/updateuser' , {
            state : {
                userInfo : row
            }
        }) ;
    }

    return (
        <>
            <TableRow>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.refferal_code}</TableCell>
                <TableCell>{row.is_verified_email ? "verfied":"pending" }</TableCell>
                <TableCell>{row.is_verified_phone ? "verfied":"pending"}</TableCell>
                <TableCell>{row.allowed}</TableCell>
                <TableCell className={classes.btGp}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button size='small' color='secondary' onClick={() => handleDeleteRow(row._id)}>Delete</Button>
                        <Button size='small' color='info' onClick={() => handleUpdateRow(row)}>Update</Button>
                    </ButtonGroup>
                </TableCell>
            </TableRow>
            {
                row.profile && <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Box className={classes.title}>
                                    Profile( {row.profile.last_name + " " + row.profile.first_name} )
                                </Box>
                                <Table size="small" >
                                    <TableHead>
                                        <TableRow>
                                            {
                                                profileHeadFields.map((field, index) => {
                                                    return (
                                                        <TableCell key={index}>
                                                            { field }
                                                        </TableCell>
                                                    )
                                                })
                                            }
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>{row.profile.first_name}</TableCell>
                                            <TableCell>{row.profile.last_name}</TableCell>
                                            <TableCell>{row.profile.country}</TableCell>
                                            <TableCell>{row.profile.language}</TableCell>
                                            <TableCell>{row.profile.city}</TableCell>
                                            <TableCell>{row.profile.street}</TableCell>
                                            <TableCell>{row.profile.birthday}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            }
        </>
    )
}

export default ProfileTableRow ;