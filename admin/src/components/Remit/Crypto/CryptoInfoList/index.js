import React, { useEffect, useState } from 'react' ;

import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { CryptoList, DeleteCrypto } from '../../../../redux/actions/remit/crypto';

import * as config from '../../../../static/constants';

import TableLoading from '../../../Common/TableLoading';
import EmptyDataRow from '../../../Common/EmptyDataRow';
import swal from 'sweetalert' ;

import AddTaskIcon from '@mui/icons-material/AddTask';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

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
    IconButton,
    ButtonGroup,
    Button,
    Tooltip
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

const CryptoInfoList = (props) => {
    const classes = useStyles();

    const {
        cryptoList,
        CryptoList,
        DeleteCrypto
    } = props ;

    const headFields = [
        "Name",
        "Symbol",
        "Pair",
        "Decimal",
        "Deposit Fee",
        "Transfer Fee",
        "Logo",
        "WhitePaper",
        <SettingsOutlinedIcon />
    ]

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

    const handleAddCrypto = () => {
        navigate('/Remit/addcrypto') ;
    }

    const handleDeleteRow = async (_id) => {

        const isOk = await swal({
            title: "Are you sure?",
            text: "Are you sure you wish to delete this crypto?",
            icon: "warning",
            buttons: [
              'No, I am not sure!',
              'Yes, I am sure!'
            ],
        }) ;

        if(isOk) {
            let result = await DeleteCrypto(_id) ;

            if(result) CryptoList() ;
        }
    }

    useEffect(() => {
        CryptoList() ;
    },[]);

    return (
        <Box className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} className={classes.tablename}>
                    CA1HEX  CRYPTO LIST
                </Grid>
                <Grid item xs={12} >
                    <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'flex-end'}>
                        <TextField 
                            size='small'
                            value={searchkey}
                            placeholder={'Search by crypto name.'}
                            onChange={(e) => handleSearchKey(e.target.value)}
                        />
                        <Box sx={{cursor : 'pointer'}}>
                            <Tooltip
                                title={'Add Crypto'}
                            >
                                <Button size='medium' variant='contained' color='info'
                                    startIcon={
                                        <AddTaskIcon /> 
                                    }
                                    onClick={() => handleAddCrypto()}
                                >
                                    Add Crypto
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
                                    cryptoList ? cryptoList.length ? cryptoList.filter(list => list.name.toLowerCase().search(searchkey) >= 0 || list.symbol.toLowerCase().search(searchkey) >= 0).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                        return(
                                            <TableRow key={index}>
                                                <TableCell>{row.name}</TableCell>
                                                <TableCell>{row.symbol}</TableCell>
                                                <TableCell>{row.pair}</TableCell>
                                                <TableCell>{row.decimal}</TableCell>
                                                <TableCell>{row.deposit_fee}</TableCell>
                                                <TableCell>{row.transfer_fee}</TableCell>
                                                <TableCell>
                                                    <Box component={'img'} src={`${config.PUBLIC_CA1HEX_ADMIN_API}${row.logo}`} width={30} height={30}/>
                                                </TableCell>
                                                <TableCell>
                                                    <a href={`${config.PUBLIC_CA1HEX_ADMIN_API}${row.whitepaper}`} target='_blank'>
                                                        {`${config.PUBLIC_CA1HEX_ADMIN_API}${row.whitepaper}`}
                                                    </a>
                                                </TableCell>
                                                <TableCell>
                                                    <ButtonGroup>
                                                        <Button variant='contained' size='small' color='info'>Edit</Button>
                                                        <Button variant='contained' size='small' color='secondary'
                                                            onClick={() => handleDeleteRow(row._id)}
                                                        >Delete</Button>
                                                    </ButtonGroup>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    }) : <EmptyDataRow colSpan={9} />:
                                    <TableLoading colSpan={9} />
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={cryptoList ? cryptoList.length : 1}
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
    cryptoList : state.remit.crypto.cryptoList
})
const mapDispatchToProps = {
    CryptoList,
    DeleteCrypto
}
export default connect(mapStateToProps, mapDispatchToProps)(CryptoInfoList) ;