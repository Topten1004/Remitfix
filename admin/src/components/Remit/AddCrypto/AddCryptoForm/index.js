import React, { useState, useEffect } from 'react' ;

import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { AddCrypto } from '../../../../redux/actions/remit/crypto';

import validate from 'validate.js';
import clsx from 'clsx';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import FileUpload from "react-mui-fileuploader"

import {
    Box, 
    TextField,
    Grid,
    Button,
    Input,
    InputLabel,
    Avatar
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    flex : {
        display : "flex" ,
        justifyContent : "center" ,
        alignItems : "center" ,
        flexDirection : "column",
    },
    root : {
        backgroundColor : 'white',
        paddingTop : "15px" ,
        paddingBottom : "15px" ,

        "& .MuiFormControl-root" : {
            marginBottom : "15px"
        } ,
        "& .MuiGrid-item" : {
            fontSize : "14px"
        }
    } , 
    title : {
        color : theme.palette.primary.main ,
        fontSize : "35px"
    } , 
    controls : {
        width : "80%"
    } ,
    advertise : {
        color : theme.palette.primary.main ,
        fontSize : "12px" ,
        marginBottom : "15px"
    },
    tablename : {
        fontSize : "20px",
        fontWeight : 600,
        
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    },
    upload : {
        cursor : 'pointer',

        display : 'flex !important',
        alignItems : 'center !important',
        justifyContent : 'center !important',
        
        "&:hover" : {
            color : theme.palette.info.main
        },
        "& .MuiSvgIcon-root" : {
            fontSize : '30px',
            paddingRight : '5px'
        }
    }
}))

const schema = {
    name: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    symbol: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    decimal: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    pair: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    deposit_fee: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    transfer_fee: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    logo : {
        presence: { allowEmpty: false, message: 'is required' },
    },
    paper : {
        presence: { allowEmpty: false, message: 'is required' },
    },
};

const AddCryptoForm = (props) => {

    const classes = useStyles() ;

    const navigate = useNavigate() ;

    const {
        error,
        AddCrypto
    } = props ;
    
    const [logo, setLogo] = useState({ preview: "", raw: "" });
    const [paper, setPaper] = useState({ preview: "", raw: "" });

    const [formState, setFormState] = useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    });

    const hasError = field => formState.touched[field] && formState.errors[field] ? true : false;

    const handleChange = event => {
        event.persist();
    
        setFormState(formState => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]:
                    event.target.type === 'file'
                    ? event.target.files[0]
                    : event.target.value,
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true,
            },
        }));
    };

    const handleChangeLogo = e => {
        handleChange(e) ;
        if (e.target.files.length) {
            setLogo({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            });
        }
    };
    const handleChangePaper = e => {
        handleChange(e) ;
        if (e.target.files.length) {
            setPaper({
                preview: e.target.files[0].name,
                raw: e.target.files[0]
            });
        }
    }

    const handleAddCrypto = async () => {

        console.log("Validate Add Crypto.", formState.isValid);

        if(formState.isValid){
            AddCrypto(formState.values, navigate) ;
        }
    };

    useEffect(()=>{
        const errors = validate(formState.values, schema);
        
        setFormState(formState => ({
          ...formState,
          isValid: errors ? false : true,
          errors: errors || {},
        }));
    
    }, [formState.values] );

    return (
        <Box className={clsx( classes.root , classes.flex )}>
            <Box  className={classes.controls }>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <Box className={classes.tablename} >
                            Add Crypto
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name={"name"}
                            label='Name'
                            size='small'

                            helperText={hasError('name') ? formState.errors.name[0] : null}
                            error={hasError('name')}
                            onChange={handleChange}
                            value={formState.values.name || ''}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name={"symbol"}
                            label='Symbol'
                            size='small'

                            helperText={hasError('symbol') ? formState.errors.symbol[0] : null}
                            error={hasError('symbol')}
                            onChange={handleChange}
                            value={formState.values.symbol || ''}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name={"decimal"}
                            type={'number'}
                            label='Decimal'
                            size='small'

                            helperText={hasError('decimal') ? formState.errors.decimal[0] : null}
                            error={hasError('decimal')}
                            onChange={handleChange}
                            value={formState.values.decimal || ''}

                            InputProps={{
                                inputProps : {
                                    min : 0
                                }
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name={"pair"}
                            label='Pair'
                            size='small'

                            helperText={hasError('pair') ? formState.errors.pair[0] : null}
                            error={hasError('pair')}
                            onChange={handleChange}
                            value={formState.values.pair || ''}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                            name={"deposit_fee"}
                            label='Deposit Fee'
                            size='small'
                            type={'number'}

                            helperText={hasError('deposit_fee') ? formState.errors.deposit_fee[0] : null}
                            error={hasError('deposit_fee')}
                            onChange={handleChange}
                            value={formState.values.deposit_fee || ''}

                            InputProps={{
                                inputProps : {
                                    min : 0
                                }
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                            name={"transfer_fee"}
                            label='Transfer Fee'
                            size='small'
                            type={'number'}

                            helperText={hasError('transfer_fee') ? formState.errors.transfer_fee[0] : null}
                            error={hasError('transfer_fee')}
                            onChange={handleChange}
                            value={formState.values.transfer_fee || ''}

                            InputProps={{
                                inputProps : {
                                    min : 0
                                }
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor="upload-logo" className={classes.upload}>
                            {
                                logo.preview ? (
                                    <Avatar src={logo.preview} />
                                ) : (
                                    <>
                                        <CloudUploadIcon /> Upload Logo.
                                    </> 
                                )
                            }
                        </InputLabel>
                        <Input
                            type="file"
                            id="upload-logo"
                            name="logo"
                            style={{ display: "none" }}
                            onChange={handleChangeLogo}
                        />
                    </Grid>
                    <Grid item xs={6} >
                        <InputLabel htmlFor="upload-paper" className={classes.upload} >
                            {
                                paper.preview ? (
                                    paper.preview.slice(0 , 4) + "..." + paper.preview.slice(paper.preview.length - 10, paper.preview.length)
                                ) : (
                                    <>
                                        <CloudUploadIcon /> Upload WhitePaper.
                                    </> 
                                )
                            }
                        </InputLabel>
                        <Input
                            type="file"
                            id="upload-paper"
                            name='paper'
                            style={{ display: "none" }}
                            onChange={handleChangePaper}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <Button 
                            variant='contained' 
                            size='small'
                            onClick={() => handleAddCrypto()}
                            sx={{ pl : 2 , pr : 2 , mb : 3}} 
                            
                            fullWidth
                        >
                                Add Crypto
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

const mapStateToProps = state => ({
    error : state.remit.crypto.error
})
const mapDispatchToProps = {
    AddCrypto
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCryptoForm) ;