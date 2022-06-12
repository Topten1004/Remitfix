

import React from 'react' ;

import { useState, useEffect, useMemo } from 'react' ;
import { useLocation, useNavigate } from 'react-router-dom' ;

import { connect } from 'react-redux' ;
import { CreateUserProfile, UpdateUserProfile } from '../../../../redux/actions/remit/user';

import validate from 'validate.js';
import countries from 'react-select-country-list'
import languages from 'language-list' ;
import clsx from 'clsx' ;

import {
    Box ,
    TextField ,
    Button ,
    Grid ,
    FormControl,
    MenuItem,
    Select,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

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
}));

const schema = {
    first_name: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    last_name: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    city: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    street: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    country: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    postal_code: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    birthday : {
        presence: { allowEmpty: false, message: 'is required' },
    }
};

const UpdateProfileForm = (props) => {

    const classes = useStyles() ;
    const {
        error ,
        UpdateUserProfile,
        CreateUserProfile
    } = props ;

    const location = useLocation() ;
    const navigate = useNavigate() ;

    const languageList = useMemo(() => languages().getData()  , []) ;
    const countryList = useMemo(() => countries().getData() , []) ;

    const [profileInfo, setProfileInfo] = useState(null) ;


    const [formState, setFormState] = useState({
        isValid: false,
        values: {
        },
        touched: {},
        errors: {},
    }); 

    const handleChange = event => {
        setFormState(formState => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]:
                    event.target.type === 'checkbox'
                    ? event.target.checked
                    : event.target.value,
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true,
            },
        }));
    };

    const hasError = field => formState.errors[field] ? true : false;

    const handleSubmit = async() => {
        
        console.log(formState.isValid);

        if(formState.isValid) {
            if(profileInfo) {
                await UpdateUserProfile(formState.values, navigate) ;
            } else {
                await CreateUserProfile(location.state.userInfo._id, formState.values, navigate) ;
            }
        }
    }

    useEffect(() => {
        if(location.state) {
            setProfileInfo(location.state.userInfo.profile) ;

            setFormState(formState => ({
                ...formState,
                isValid : true,
                values: {
                    ...location.state.userInfo.profile,
                },
            }));
        }
    },[location]) ;

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
                            { profileInfo ? "Update " : "Create "} Profile
                        </Box>
                    </Grid> 
                    <Grid item xs={6}>
                        First name
                        <TextField
                            name={"first_name"}
                            type={"text"}
                            size={"small"}
                            placeholder={"First name"}

                            helperText={
                                hasError('first_name') ? formState.errors.first_name[0] : null
                            }
                            error={hasError('first_name')}
                            onChange={handleChange}
                            value={formState.values.first_name || ''}

                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        Last name
                        <TextField
                            name={"last_name"}
                            type={"text"}
                            size={"small"}
                            placeholder={"Last name"}

                            helperText={
                                hasError('last_name') ? formState.errors.last_name[0] : null
                            }
                            error={hasError('last_name')}
                            onChange={handleChange}
                            value={formState.values.last_name || ''}

                            fullWidth
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        Country
                        <FormControl fullWidth>
                            <Select
                                name={"country"}
                                value={formState.values.country || countryList[0].label}
                                onChange={handleChange}
                                size={"small"}
                            >
                                {
                                    countryList.map( (country , index) => {
                                        return (
                                            <MenuItem value={country.label} key={index}>{country.label}</MenuItem>
                                        )
                                    } )
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        City
                        <TextField
                            name={"city"}
                            type={"text"}
                            size={"small"}
                            placeholder={"City"}

                            helperText={
                                hasError('city') ? formState.errors.city[0] : null
                            }
                            error={hasError('city')}
                            onChange={handleChange}
                            value={formState.values.city || ''}

                            fullWidth
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        Street
                        <TextField
                            name={"street"}
                            type={"text"}
                            size={"small"}
                            placeholder={"Street"}

                            helperText={
                                hasError('street') ? formState.errors.street[0] : null
                            }
                            error={hasError('street')}
                            onChange={handleChange}
                            value={formState.values.street || ''}

                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        Postal Code
                        <TextField
                            name={"postal_code"}
                            type={"text"}
                            size={"small"}
                            placeholder={"Postal code"}

                            helperText={
                                hasError('postal_code') ? formState.errors.postal_code[0] : null
                            }
                            error={hasError('postal_code')}
                            onChange={handleChange}
                            value={formState.values.postal_code || ''}

                            fullWidth
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        Birthday
                        <TextField
                            name={'birthday'}
                            type={'date'}
                            size={'small'}
                            
                            helperText={
                                hasError('birthday') ? formState.errors.birthday[0] : null
                            }
                            error={hasError('birthday')}
                            onChange={handleChange}
                            value={formState.values.birthday || ''}

                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        Language
                        <FormControl fullWidth>
                            <Select
                                name={"language"}
                                value={formState.values.language || languageList[0].language}
                                onChange={handleChange}
                                size={"small"}
                            >
                                {
                                    languageList.map( (language , index) => {
                                        return (
                                            <MenuItem value={language.language} key={index}>{language.language}</MenuItem>
                                        )
                                    } )
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={12}>
                        <Button variant='contained' fullWidth onClick={() => handleSubmit()}>{ profileInfo ? "Update " : "Create "} Profile</Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
    UpdateUserProfile,
    CreateUserProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfileForm) ;