
import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import clsx from 'clsx';

import { makeStyles } from '@mui/styles';

import validate from 'validate.js';

import { Box, Button, Grid, TextField, Typography } from '@mui/material';

import DLogo from '../../components/Common/Logo';

import { SignInRemit } from '../../redux/actions/remit/auth' ;

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        overflow: 'hidden',
        overflowY: 'scroll',
        "& .MuiGrid-item": {
            textAlign: 'center'
        }
    },
    panel: {
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: '20px',
        width: '50%',
        backgroundColor: 'white'
    },
    title: {
        color: theme.palette.primary.main,
        fontSize: '30px',
        fontWeight: 600,
        fontFamily: 'Robot'
    },
    description: {
        marginTop : '48px',
        paddingBottom: '20px',
        fontWeight: '600',
        fontSize: '40px'
    },
    label: {
        textAlign: 'left',
        color: 'gray',
        fontSize: '15px'
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    forgotPass: {
        fontSize: '13px',
        fontWeight: '700',
        textAlign: 'left'
    },
    fontNormal: {
        fontSize: '14px'
    }
}))

const schema = {
    email: {
        presence: { allowEmpty: false, message: 'is required' },
        email: true,
        length: {
            maximum: 300,
        },
    }
};

const Forgot = (props) => {

    const classes = useStyles();

    const navigate = useNavigate();

    const hasError = field => formState.touched[field] && formState.errors[field] ? true : false;

    const {
        to,
        hexAuthenticated,
        SignIn,
        SignInDex,
        SignInSwap,
        SignInRemit
    } = props;

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
    const [formState, setFormState] = useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    });

    useEffect(() => {
        const errors = validate(formState.values, schema);

        setFormState(formState => ({
            ...formState,
            isValid: errors ? false : true,
            errors: errors || {},
        }));

    }, [formState.values]);

    useEffect(() => {
        if (to) {
            switch (to) {
                case "hex":
                    if (hexAuthenticated) navigate('/remit/user');
                    break;
                default:
                    break;
            }
        }
    }, [to]);
    const handleSubmit = async () => {
        if(formState.isValid){
            if(to === "hex") {
                await SignInRemit(formState.values, navigate) ;
            }
        }
    }

    return (
        <Box className={clsx(classes.root, classes.flex)}>
            <Box className={clsx(classes.panel, classes.flex)}>
                <Grid container spacing={2}>
                    <Grid item xs={12} className={classes.title}>
                        <DLogo sx = {{marginTop:'30px'}}/>
                    </Grid>
                    <Grid item xs={12} className={classes.description}>
                        Reset your password
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.fontNormal}>Enter the email address you used to register with RemitFix and we’ll send you instructions to reset your password.</Typography>
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
                            sx={{ marginTop: '8px' }}
                            helperText={hasError('email') ? formState.errors.email[0] : null}
                            error={hasError('email')}
                            onChange={handleChange}
                            value={formState.values.email || ''}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant={'contained'} size={'medium'} sx = {{width : '80%'}} onClick={handleSubmit}>Send email</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/login" style = {{ textDecoration: 'underline #00cc00'}}>
                            <Button
                                variant="text"
                                size="large"
                                sx = {{width:'80%', color:'#00CC00', fontSize:'15px'}}
                            >
                                Login with your credentials
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
const mapStateToProps = state => ({
})
const mapDispatchToProps = {
    SignInRemit
}

export default connect(mapStateToProps, mapDispatchToProps)(Forgot);