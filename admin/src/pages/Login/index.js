
import React, { useState, useEffect } from 'react' ;

import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';

import ReCAPTCHA from 'react-google-recaptcha' ;

import validate from 'validate.js';

import { SignInRemit } from '../../redux/actions/remit/auth' ;

import clsx from 'clsx' ;

import { makeStyles } from '@mui/styles';

import DLogo from '../../components/Common/Logo';

import {
    Box,
    Grid,
    TextField,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Button,
    Typography
} from '@mui/material' ;
import { fontFamily } from '@mui/system';

const useStyles = makeStyles((theme) => ({
    root : {
        height : '100vh',
        overflow : 'hidden',
        overflowY : 'scroll' ,
        "& .MuiGrid-item" : {
            textAlign : 'center'
        }
    },
    panel : {
        paddingLeft : '5%',
        paddingRight : '5%',
        paddingBottom : '20px',
        width : '50%' ,
        backgroundColor : 'white'
    },
    title : {
        color : theme.palette.primary.main,
        fontSize : '30px',
        fontWeight : 600,
        fontFamily : 'Robot'
    },
    description : {
        paddingBottom : '20px',
        fontWeight : '600' ,
        fontSize : '40px'
    },
    label : {
        textAlign : 'left',
        color : 'gray',
        fontSize : '15px'
    },
    flex : {
        display : 'flex' ,
        alignItems : 'center' ,
        justifyContent : 'center',
    },
    forgotPass : {
        fontSize : '13px',
        fontWeight: '700',
        textAlign:'left'
    }
}))

const schema = {
    email: {
        presence: { allowEmpty: false, message: 'is required' },
        email: true,
        length: {
        maximum: 300,
        },
    },
    password: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
        minimum: 8,
        },
    },
};

const Login = (props) => {
    
    const classes = useStyles() ;

    const navigate = useNavigate() ;
    const {
        to,
        hexAuthenticated,
        SignInHex,
        SignInDex,
        SignInSwap,
        SignInRemit
    } = props ;

    const [captcha, setCaptcha] = useState(true);

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

    const handleSubmit = async () => {
        if(formState.isValid){
            if(to === "hex") {
                await SignInRemit(formState.values, navigate) ;
            }
        }
    }

    const onHandleRecaptcha = (value) => {
        setCaptcha(value);
    };

    useEffect(()=>{
        const errors = validate(formState.values, schema);
        
        setFormState(formState => ({
          ...formState,
          isValid: errors ? false : true,
          errors: errors || {},
        }));
    
    }, [formState.values] );

    useEffect(() => {
        if(to) {
            switch(to) {
                case "hex" :
                    if(hexAuthenticated) navigate('/remit/user');
                    break ;
                default :
                    break;
            }
        }
    }, [to]) ;

    return (
        <Box className={clsx(classes.root, classes.flex)}>
            <Box className={clsx(classes.panel, classes.flex)}>
                <Grid container spacing={2}>
                    <Grid item xs={12} className={classes.title}>
                        <DLogo sx = {{marginTop:'30px'}}/>
                    </Grid>
                    <Grid item xs={12} className={classes.description}>
                        Login to RemitFix
                    </Grid>
                    <Grid item xs={12}>
                        <Box className={classes.label}>
                            Enter your email
                        </Box>
                        <TextField
                            name={"email"}
                            type="email"
                            size={'small'}
                            fullWidth
                            
                            helperText={hasError('email') ? formState.errors.email[0] : null}
                            error={hasError('email')}
                            onChange={handleChange}
                            value={formState.values.email || ''}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Box className={classes.label}>
                            Enter your password
                        </Box>
                        <TextField
                            name={"password"}
                            type={"password"}
                            size={'small'}
                            fullWidth
                            
                            helperText={
                                hasError('password') ? formState.errors.password[0] : null
                            }
                            error={hasError('password')}
                            onChange={handleChange}
                            value={formState.values.password || ''}
                        />
                    </Grid>
                    <Grid item xs = {12}>
                        <Typography className = {classes.forgotPass}>Forgot password?</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name='is_check'
                                    />
                                }
                                label={
                                    <Box component={'span'}>
                                        Remember me on this device
                                    </Box>
                                }
                            />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant={'contained'} size={'medium'} sx = {{width : '80%'}} onClick={handleSubmit}>Log in</Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

const mapStateToProps = state => ({
    hexAuthenticated : state.remit.auth.isAuthenticated,
})
const mapDispatchToProps = {
    SignInRemit
}

export default connect(mapStateToProps, mapDispatchToProps)(Login) ;