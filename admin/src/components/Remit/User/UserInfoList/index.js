import React, { useEffect, useState } from 'react' ;

import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { DeleteUser, UserList } from '../../../../redux/actions/remit/user';

import TableLoading from '../../../Common/TableLoading';
import ProfileTableRow from './ProfileTableRow';

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import {
    Box,
    Grid,
    TableContainer,
    TablePagination,
    Table,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
    Stack,
    TextField
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root : {
        padding : '20px',

        backgroundColor : 'white',

        "& .MuiTableHead-root" : {
            "& .MuiTableCell-root" : {
                backgroundColor : 'lightgray'
            }
        },
        "& .MuiTableCell-root" :{
            padding : "0px !important",
            paddingTop : "5px !important",
            paddingBottom : "5px !important",
            textAlign : "center",
            fontSize : "14px" ,
            cursor : "pointer" ,
            fontFamily : [
                'Inter',
                '-apple-system',
                'BlinkMacSystemFont',
                'San Francisco',
                'Segoe UI',
                'Roboto',
                'Helvetica Neue',
                'sans-serif'
            ].join(',')
        },
        "& .MuiTablePagination-root" : {
            "& .MuiTablePagination-selectLabel" : {
                margin : "0px !important" ,
                fontWeight : "bold"
            },
            "& .MuiTablePagination-displayedRows" : {
                margin : "0px !important" ,
                fontWeight : "bold"
            }
        }
    },
    tablecontainer : {
        border : '1px solid lightgray'
    },
    tablename : {
        fontSize : "20px",
        fontWeight : 600,
        alignSelf : "flex-end",
        textAlign : 'center'
    }
}))

const UserInfoList = (props) => {
    const classes = useStyles();

    const {
        userList,
        UserList, DeleteUser
    } = props ;

    const navigate = useNavigate() ;

    const headFields = [
        "Email",
        "Refferal",
        "Email Verified",
        "Phone Verified",
        "Status",
        <ManageAccountsIcon />
    ]

    const [page, setPage] = useState(0) ;
    const [rowsPerPage, setRowsPerPage] = useState(5) ;
    const [searchkey, setSearchKey] = useState('') ;


    const handleSearchKey = (key) => {
        setSearchKey(key) ;
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        UserList() ;
    },[]);

    return (
        <Box className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} className={classes.tablename}>
                    CA1HEX USER LIST
                </Grid>
                <Grid item xs={12} >
                    <Stack flexDirection={'row'} justifyContent={'space-between'}>
                        <TextField 
                            size='small'
                            placeholder='Search by email...'
                            value={searchkey}
                            onChange={(e) => handleSearchKey(e.target.value)}
                        />
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <TableContainer className={classes.tablecontainer}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell />
                                    {
                                        headFields.map((field, index) => {
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
                                {
                                    userList ? userList.filter(list => list.email.toLowerCase().search(searchkey) >= 0).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                        return(
                                            <ProfileTableRow row={row} key={index}
                                                DeleteUser={DeleteUser}
                                                UserList={UserList}
                                                navigate={navigate}
                                            />
                                        )
                                    }) : <TableLoading colSpan={8} />
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={userList ? userList.length : 1}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

const mapStateToProps = state => ({
    userList : state.remit.user.userList
})
const mapDispatchToProps = {
    UserList,
    DeleteUser
}
export default connect(mapStateToProps, mapDispatchToProps)(UserInfoList) ;