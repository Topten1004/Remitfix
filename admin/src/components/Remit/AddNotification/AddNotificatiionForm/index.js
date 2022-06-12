import React, { useState, useEffect, useRef } from 'react' ;

import { useNavigate } from 'react-router-dom';
import JoditEditor from "jodit-react";

import { connect } from 'react-redux';
import { AddNotification } from '../../../../redux/actions/remit/notification';

import clsx from 'clsx';

import {
    Box, 
    TextField,
    Grid,
    Button,
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
    }, 
    controls : {
        width : "80%"
    } ,
    tablename : {
        fontSize : "20px",
        fontWeight : 600,
        
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    },
    label : {
        fontWeight : 500,
        fontSize : '16px',

        paddingLeft : '10px',
        paddingBottom : '5px'
    }
}))

const config = {
    readonly: false 
}

const AddNotificationForm = (props) => {

    const classes = useStyles() ;

    const navigate = useNavigate() ;

    const {
        AddNotification
    } = props ;
    
    const editor = useRef(null) ;
	const [content, setContent] = useState('') ;
    const [title, setTitle] = useState('') ;

    const handleChangeTitle = ( e ) => {
        setTitle(e.target.value) ;
    }

    const handleChangeContent = ( newContent ) => {
        setContent(newContent) ;
    }

    const handleAddNotification = async () => {
        await AddNotification(title, content, navigate) ;
    };

    return (
        <Box className={clsx( classes.root , classes.flex )}>
            <Box  className={classes.controls }>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <Box className={classes.tablename} >
                            Add Notification
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className={classes.label}>
                            Title
                        </Box>
                        <TextField
                            name={"title"}
                            size='small'

                            value={title}
                            onChange={handleChangeTitle}

                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Box className={classes.label}>
                            Description
                        </Box>                        
                        <JoditEditor
                            ref={editor}
                            value={content}
                            config={config}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={newContent => handleChangeContent(newContent)}
                            onChange={newContent => {}}
                        />
                    </Grid>
                    <Grid item xs={6} >
                        <Button 
                            variant='contained' 
                            size='small'
                            onClick={() => handleAddNotification()}
                            sx={{ pl : 2 , pr : 2 , mb : 3}} 
                            
                            fullWidth
                        >
                                Add Notification
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

const mapStateToProps = state => ({

})
const mapDispatchToProps = {
    AddNotification
}
export default connect(mapStateToProps, mapDispatchToProps)(AddNotificationForm) ;