import React, { useEffect, useRef, useState } from 'react' ;

import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { DeleteNotification, NotificationList } from '../../../../redux/actions/remit/notification';

import TableLoading from '../../../Common/TableLoading';
import EmptyDataRow from '../../../Common/EmptyDataRow';
import swal from 'sweetalert' ;

import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import EditNotificationsOutlinedIcon from '@mui/icons-material/EditNotificationsOutlined';

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
    TextField,
    Button,
    Tooltip,
    ButtonGroup
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
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

        cursor : 'pointer',
        
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    }
}))

const NotificationInfoList = (props) => {
    const classes = useStyles();

    const {
        notificationList,
        NotificationList, DeleteNotification
    } = props ;

    const [page, setPage] = useState(0) ;
    const [rowsPerPage, setRowsPerPage] = useState(5) ;
    const [searchkey, setSearchKey] = useState('') ;
    const navigate = useNavigate() ;


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

    const handleAddNotification = () => {
        navigate('/Remit/addNotification') ;
    }

    const handleDeleteRow = async (_id) => {

        const isOk = await swal({
            title: "Are you sure?",
            text: "Are you sure you wish to delete this notification?",
            icon: "warning",
            buttons: [
              'No, I am not sure!',
              'Yes, I am sure!'
            ],
        }) ;

        if(isOk) {
            let result = await DeleteNotification(_id) ;
            if(result) await NotificationList() ;
        }
    }

    const decodeHtml = (html) => {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    const CreateMarkUp = (props) => {

        const {
            description
        } = props ;

        const ctrl = useRef(null) ;

        useEffect(() => {
            if(ctrl) ctrl.current.innerHTML = decodeHtml(description) ;
        }, []);

        return (
            <Box ref={ctrl} >
            </Box>
        )
    }
      
    
    useEffect(() => {
        NotificationList() ;
    }, []);

    return (
        <Box className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} className={classes.tablename}>
                    CA1HEX  NOTIFICATION LIST
                </Grid>
                <Grid item xs={12} >
                    <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'flex-end'}>
                        <TextField 
                            size='small'
                            value={searchkey}
                            placeholder={'Search by decription.'}
                            onChange={(e) => handleSearchKey(e.target.value)}
                        />
                        <Box sx={{cursor : 'pointer'}}>
                            <Tooltip
                                title={'Add Notification'}
                            >
                                <Button size='medium' variant='contained' color='info'
                                    startIcon={
                                        <NotificationAddOutlinedIcon /> 
                                    }
                                    onClick={() => handleAddNotification()}
                                >
                                    Add Notification
                                </Button>
                            </Tooltip>  
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <TableContainer className={classes.tablecontainer}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{width:120}}>Title</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>
                                        <EditNotificationsOutlinedIcon />
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    notificationList ? notificationList.length ? notificationList.filter(list => list.description.toLowerCase().search(searchkey) >= 0 ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                        return(
                                            <TableRow key={index}>
                                                <TableCell>{row.title}</TableCell>
                                                <TableCell>
                                                    <CreateMarkUp 
                                                        description={row.description}
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    <ButtonGroup>
                                                        <Button variant='contained' size='small' color='secondary' onClick={() => handleDeleteRow(row._id)}>Delete</Button>
                                                        <Button variant='contained' size='small' color='info' >Update</Button>
                                                    </ButtonGroup>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    }) : <EmptyDataRow colSpan={9} /> :
                                    <TableLoading colSpan={9} />
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={1}
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
    notificationList : state.remit.notification.notificationList
})
const mapDispatchToProps = {
    NotificationList,
    DeleteNotification
}
export default connect(mapStateToProps, mapDispatchToProps)(NotificationInfoList) ;