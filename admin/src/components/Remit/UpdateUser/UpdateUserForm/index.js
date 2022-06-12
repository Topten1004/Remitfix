import React, { useState, useEffect } from 'react' ;

import { useNavigate } from 'react-router-dom';

import validate from 'validate.js';

import { connect } from 'react-redux';

import { AddCrypto } from '../../../../redux/actions/remit/crypto';

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
    root : {
        backgroundColor : 'white' ,

        padding : '15px' ,
        
        "& .MuiGrid-item" : {
            textAlign : 'center'
        },
        "& .MuiButtonBase-root" : {
            textTransform : 'capitalize'
        }
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

const UpdateUserForm = (props) => {

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
        <Box className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <Box className={classes.tablename} >
                        Update User
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name={"email"}
                        label='Email'
                        size='small'

                        helperText={hasError('email') ? formState.errors.email[0] : null}
                        error={hasError('email')}
                        onChange={handleChange}
                        value={formState.values.email || ''}

                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name={"password"}
                        label='Password'
                        size='small'

                        helperText={hasError('password') ? formState.errors.password[0] : null}
                        error={hasError('password')}
                        onChange={handleChange}
                        value={formState.values.password || ''}

                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name={"refferal_code"}
                        label='Refferal'
                        size='small'

                        helperText={hasError('refferal_code') ? formState.errors.refferal_code[0] : null}
                        error={hasError('refferal_code')}
                        onChange={handleChange}
                        value={formState.values.refferal_code || ''}

                        InputProps={{
                            inputProps : {
                                min : 0
                            }
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        variant='contained' 
                        size='small'
                        onClick={() => handleAddCrypto()}
                        sx={{ pl : 2 , pr : 2 , mb : 3}} >
                            Add Crypto
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

const mapStateToProps = state => ({
    error : state.remit.crypto.error
})
const mapDispatchToProps = {
    AddCrypto
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserForm) ;