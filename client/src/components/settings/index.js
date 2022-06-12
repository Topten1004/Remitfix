import React from "react";

import { makeStyles } from "@mui/styles";

import { useState, useEffect } from "react";

import { Grid, Typography, Box, Stack } from "@mui/material";

const Settings = (props) => {
    return (
        <>
            <Grid container>
                <Grid item xs = {12}>
                    <Typography>Email Settings</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Settings;