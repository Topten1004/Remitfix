import React from "react";

import { makeStyles } from "@mui/styles";

import { useState } from "react";
import { Box, Typography, Button, Grid, TextField, FormControl, MenuItem, InputLabel, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, Paper, Divider, Container } from "@mui/material"

import { Link } from "react-router-dom";
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";
import HomeLayout from "../layouts/HomeLayout";

import CountrySelect from "../components/authentication/register/CountrySelect";
import SelectCurrency from "../components/selectCurrency";

import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import logoImg from '../assets/dark_logo.png';
import Img10 from '../assets/Image10.png';
import Img11 from '../assets/Image11.png';
import Img12 from '../assets/Image12.png';
import Img13 from '../assets/Image13.png';
import Img14 from '../assets/Image14.png';
import ImgSecure from '../assets/secure.png';
import ImgSimple from '../assets/simple.png';
import ImgTimer from '../assets/timer.png';
import ImgTransparent from '../assets/transparent.png';
import ImgWallet from '../assets/wallet.png';
import ImgFlexible from '../assets/flexible.png';
import backImg from '../assets/bg.png';

import { StayCurrentLandscape } from "@material-ui/icons";
import ExchangeChart from "../components/home/chart";
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const useStyles = makeStyles({
    mainContent: {
        marginLeft: '139px',
        marginRight: '139px',
        marginTop: '180px'
    },
    mainBox1: {
        display: 'block',
    },
    mainBox2: {
        display: 'block',
    },
    btnWork: {
        background: '#C72127',
        color: '#FFFFFF',
        borderRadius: '4px',
        marginTop: '15px',
        paddingLeft: '36px',
        paddingRight: '38px',
        paddingTop: '12px',
        paddingBottom: '7px',
        "&:hover": {
            color: '#000000',
        }
    },
    started: {
        background: '#C72127',
        color: '#ffffff',
        fontSize: '16px',
        paddingLeft: '88px',
        paddingRight: '92px',
        paddingTop: '15px',
        paddingBottom: '13px',
        "&:hover": {
            color: '#000000',
        }
    },
    rotated: {
        transform: 'rotate(90deg)',
        fontSize: '46px',
        color: '#1B262C'
    },
    stepper: {
        width: '4px',
        background: '#DDDDDD',
        height: '250px',
        left: '20px',
        zIndex: -1,
        position: 'absolute'
    },
    circleIcon: {
        fontSize: '46px',
        color: '#1B262C',
        zIndex: 1,
    },
    started: {
        justifyContent: 'center',
        background: '#C72127',
        marginTop: '15px',
        color: '#FFFFFF',
        height: '46px',
        weight: '260px ! important',
        textAlign: 'center',
        paddingTop: '15px',
        paddingBottom: '13px',
        paddingLeft: '90px',
        paddingRight: '90px',
        "&:hover": {
            color: '#000000'
        }
    },
    hello: {
        fontSize: '36px',
        fontWeight: '700',
        lineHeight: '36px',
        marginTop: '75px',
    },
    mainContent1: {
        marginTop: '80px'
    },
    darkContent: {
        background: '#1B3764',
        borderRadius: '24px',
        marginRight: '231px',
        height: '865px',
        zIndex: -1,
    },
    whiteContent: {
        borderRadius: '4px',
        boxShadow: 3,
        left: '80px',
        background: 'white',
        position: 'absolute',
        right: '0px',
        zIndex: 2,
        height: '780px',
    },
    topbox: {
        marginLeft: '60px',
        marginRight: '140px',
        marginTop: '50px',
        display: 'block'
    },
    secondBox: {
        marginLeft: '60px',
        marginRight: '140px',
        marginTop: '37px',

    },
    btnRece: {
        background: '#1B3764',
        borderRadius: '22px',
        color: '#FFFFFF',
        width: '160px',
        height: '43px',
        "&:hover": {
            color: '#000000'
        }
    },
    btnSend: {
        background: '#FFFFFF',
        borderRadius: '22px',
        color: '#818181',
        width: '160px',
        height: '43px'
    },
    btnReg: {
        background: '#C72127',
        color: '#FFFFFF',
        borderRadius: '5px',
        marginTop: '8px',
        height: '27px',
        textAlign: 'center',
        marginBottom: '20px',
        width: '80%',
        justifyContent: 'center',
        "&:hover": {
            background: '#1B3764',
        }
    },
    btnProc: {
        background: '#C72127',
        color: '#FFFFFF',
        borderRadius: '4px',
        marginTop: '25px',
        paddingLeft: '65px',
        paddingRight: '71px',
        paddingTop: '16px',
        paddingBottom: '11px',
        fontSize: '16px',
        fontWeight: '700',
        "&:hover": {
            color: '#000000',
        }
    },
    btnGet: {
        marginTop: '25px',
        width: '260px',
        background: '#C72127',
        color: '#FFFFFF',
        fontSize: '16px',
        fontWeight: '700',
        paddingLeft: '78px',
        paddingRight: '82px',
        paddingTop: '16px',
        paddingBottom: '11px',
    },
    paperContainer: {
        backgroundImage: `url(${backImg})`,
        height : '538px',
    }
});

const Home = () => {

    const classes = useStyles();

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box>
            <HomeLayout />
            <Box className={classes.mainContent}>
                <Grid container>
                    <Grid item xs={6}>
                        <Box className={classes.mainBox1}>
                            <Typography className={classes.hello}>Hello to money<br />that matters.</Typography>
                            <Typography sx={{ fontSize: '16px', marginTop: '20px' }}>Get the real exchange rate known as mid-market<br /> rate and our fees are 7x cheaper than using<br /> banks and most money transfer providers.</Typography>
                            <Button className={classes.btnWork} >How it works</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={classes.mainBox2}>
                            <CountrySelect />
                            <SelectCurrency title="You send" price="2.000" />
                            <Box sx={{ display: 'flex' }}>
                                <Box sx={{ display: 'grid' }}>
                                    <Box sx={{ display: 'flex', marginTop: '17px' }}>
                                        <AddCircleIcon className={classes.circleIcon}></AddCircleIcon>
                                        <Typography sx={{ marginTop: '15px', paddingLeft: '20px', fontSize: '14px', fontWeight: '700', color: '#5929FB' }}>First three transfers are fee-free!</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <PauseCircleFilledIcon className={classes.rotated} sx={{ marginTop: '17px' }}></PauseCircleFilledIcon>
                                        <Box sx={{ marginTop: '30px', paddingLeft: '20px', fontSize: '14px', display: 'flex' }}><Typography sx={{ fontWeight: '700' }}>Total amount:</Typography><Typography sx={{ fontSize: '15px', marginTop: '1px' }}>&nbsp;2.000 NOK</Typography></Box>
                                    </Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <CancelIcon className={classes.circleIcon} sx={{ marginTop: '17px' }}></CancelIcon>
                                        <Box sx={{ marginTop: '30px', paddingLeft: '20px', fontSize: '14px', display: 'flex' }}><Typography sx={{ fontWeight: '700 !important' }}>Real exchange rate:</Typography><Typography sx={{ fontSize: '15px', marginTop: '1px' }}>&nbsp;1 NOK - 0.109976 SOS</Typography></Box>
                                    </Box>
                                </Box>
                                <Box className={classes.stepper}></Box>
                            </Box>
                            <SelectCurrency title="Recipient gets" price="100" />
                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}><Typography sx={{ color: '#5929FB', fontWeight: '700' }}>You are saving 150 NOK</Typography><Typography sx={{ color: '#818181' }}>&nbsp;in this transfer.</Typography><Typography sx={{ color: '#FF0000', textDecoration: 'underline' }}>&nbsp;Compare prices</Typography></Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button className={classes.started}>Get started</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.mainContent1}>
                <Box className={classes.darkContent}>
                    <Grid container>
                        <Grid item lg={6}>
                            <Typography sx={{ fontSize: '30px', fontWeight: '700', color: '#FFFFFF', marginLeft: '139px', marginTop: '100px' }}>Bye-bye to the hellish old<br /> way of sending money</Typography>
                        </Grid>
                        <Grid item lg={6}>
                            <Typography sx={{ fontSize: '16px', color: '#FFFFFF', marginTop: '100px', marginRight: '92px' }}>Get the real exchange rate known as mid-market rate and our<br /> fees, which are shown upfront is 7x cheaper than using banks <br />and most money transfer providers.</Typography>
                        </Grid>
                    </Grid>
                    <Box fullWidth boxShadow={3} className={classes.whiteContent}>
                        <Box className={classes.topbox}>
                            <Typography sx={{ fontSize: '12px', color: '#1B262C' }}>You send exactly</Typography>
                            <Stack justifyContent='space-between' direction='row'>
                                <Box sx={{ marginTop: '10px', display: 'flex' }}>
                                    <TextField sx={{ width: '140px', height: '44px', borderRadius: '2px', size: "small", border: '1px solid #818181' }} InputProps={{ sx: { height: '44px' } }}></TextField>
                                    <FormControl sx={{ marginLeft: '15px', height: '44px', width: '260px' }}>
                                        <Select
                                            id="demo-simple-select"
                                            value={age}
                                            onChange={handleChange}
                                            sx={{ height: '44px' }}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Box sx={{ marginTop: "10px", marginLeft: "15px", marginRight: "15px" }}>
                                        <SyncAltIcon sx={{ color: "#1B3764" }} />
                                    </Box>
                                    <FormControl sx={{ marginLeft: '15px', height: '44px', width: '260px' }}>
                                        <Select
                                            id="demo-simple-select"
                                            value={age}
                                            onChange={handleChange}
                                            sx={{ height: '44px' }}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box sx={{ display: 'block' }}>
                                    <Typography sx={{ color: '#1B262C', fontWeight: '700', textAlign: 'right', fontSize: '24px' }}>1 NOK = 9.0552 USD</Typography>
                                    <Typography sx={{ color: '#818181', fontSize: '14px', textAlign: 'right' }}>Mid-market exchange rate</Typography>
                                </Box>
                            </Stack>
                        </Box>
                        <Box className={classes.secondBox}>
                            <Box>
                                <Button className={classes.btnSend}>Sending</Button>
                                <Button className={classes.btnRece}>Receiving</Button>
                            </Box>
                            <Box sx={{ marginTop: '50px' }}>
                                <Grid container >
                                    <Grid item lg={1}>
                                        <Typography sx={{ marginTop: '40px' }}>Recipient gets<br /> 100 USD with</Typography>
                                        <Divider sx={{ marginTop: '40px' }} />
                                        <Typography sx={{ marginTop: '40px' }}>Transfer Fee</Typography>
                                        <Divider sx={{ marginTop: '40px' }} />
                                        <Typography sx={{ marginTop: '40px' }}>Exchange Rate</Typography>
                                        <Divider sx={{ marginTop: '40px' }} />
                                        <Typography sx={{ marginTop: '40px' }}>Total to pay</Typography>
                                    </Grid>
                                    <Grid item lg={1.5}>
                                        <Stack fullWidth boxShadow={3} sx={{ background: '#ffffff', borderRadius: '4px', alignItems: 'center', justifyContent: 'center' }}>
                                            <Box fullWidth sx={{ marginTop: '10px', height: '23px', background: '#3FD93F' }}></Box>
                                            <Box component="img" src={logoImg} sx={{ marginTop: '10px', width: 160, height: 40, zIndex: 2 }} />
                                            <Divider fullWidth sx={{ marginTop: '45px' }} />
                                            <Box sx={{ fontSize: '16px', fontWeight: '700', textAlign: 'center', color: '#1B3764', marginTop: '38px', zIndex: 2 }}>27 NOK</Box>
                                            <Divider sx={{ marginTop: '42px' }} />
                                            <Box sx={{ fontSize: '16px', fontWeight: '700', textAlign: 'center', color: '#1B3764', marginTop: '38px', zIndex: 2 }}>9.0552</Box>
                                            <Box sx={{ fontSize: '12px', textAlign: 'center', color: '#818181', marginTop: '1px', zIndex: 2 }}>Mid-market rate</Box>
                                            <Divider sx={{ marginTop: '23px' }} />
                                            <Box sx={{ fontSize: '20px', fontWeight: '700', textAlign: 'center', color: '#3FD93F', marginTop: '35px', zIndex: 2 }}>932 NOK</Box>
                                            <Box sx={{ fontSize: '12px', textAlign: 'center', fontWeight: '700', color: '#3FD93F', marginTop: '0px', zIndex: 2 }}>Save up to 65 NOK</Box>
                                            <Button className={classes.btnReg}>Register Now</Button>
                                        </Stack>
                                    </Grid>
                                    <Grid item lg={1.5}>
                                        <Stack fullWidth sx={{ background: '#ffffff', borderRadius: '4px', alignItems: 'center', justifyContent: 'center' }}>
                                            <Box component="img" src={Img10} sx={{ marginTop: '40px' }}></Box>
                                            <Divider sx={{ marginTop: '40px' }} />
                                            <Typography sx={{ marginTop: '40px', fontSize: '16px', color: '#818181', marginBottom: '40px' }}>29 NOK</Typography>
                                            <Divider />
                                            <Typography sx={{ marginTop: '40px', fontSize: '16px', color: '#818181', marginBottom: '40px' }}>9.6787</Typography>
                                            <Divider />
                                            <Typography sx={{ marginTop: '40px', fontSize: '16px', color: '#818181' }}>997 NOK</Typography>
                                            <Typography sx={{ marginTop: '15px', fontSize: '12px', fontWeight: '700', color: '#D80606' }}>-65 NOK</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item lg={1.5}>
                                        <Stack fullWidth sx={{ background: '#ffffff', borderRadius: '4px', alignItems: 'center', justifyContent: 'center' }}>
                                            <Box component="img" src={Img11} sx={{ marginTop: '40px' }}></Box>
                                            <Divider sx={{ marginTop: '40px' }} />
                                            <Typography sx={{ marginTop: '40px', fontSize: '16px', color: '#818181', marginBottom: '40px' }}>29 NOK</Typography>
                                            <Divider />
                                            <Typography sx={{ marginTop: '40px', fontSize: '16px', color: '#818181', marginBottom: '40px' }}>9.6787</Typography>
                                            <Divider />
                                            <Typography sx={{ marginTop: '40px', fontSize: '16px', color: '#818181' }}>997 NOK</Typography>
                                            <Typography sx={{ marginTop: '15px', fontSize: '12px', fontWeight: '700', color: '#D80606' }}>-65 NOK</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item lg={1.5}>
                                        <Stack fullWidth sx={{ background: '#ffffff', borderRadius: '4px', alignItems: 'center', justifyContent: 'center' }}>
                                            <Box component="img" src={Img12} sx={{ marginTop: '40px' }}></Box>
                                            <Divider sx={{ marginTop: '40px' }} />
                                            <Typography sx={{ marginTop: '40px', fontSize: '16px', color: '#818181', marginBottom: '40px' }}>29 NOK</Typography>
                                            <Divider />
                                            <Typography sx={{ marginTop: '40px', fontSize: '16px', color: '#818181', marginBottom: '40px' }}>9.6787</Typography>
                                            <Divider />
                                            <Typography sx={{ marginTop: '40px', fontSize: '16px', color: '#818181' }}>997 NOK</Typography>
                                            <Typography sx={{ marginTop: '15px', fontSize: '12px', fontWeight: '700', color: '#D80606' }}>-65 NOK</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item lg={1.5}>
                                        <Stack fullWidth sx={{ background: '#ffffff', borderRadius: '4px', alignItems: 'center', justifyContent: 'center' }}>
                                            <Box component="img" src={Img13} sx={{ marginTop: '40px' }}></Box>
                                            <Divider sx={{ marginTop: '40px' }} />
                                            <Typography sx={{ marginTop: '40px', fontSize: '16px', color: '#818181', marginBottom: '40px' }}>29 NOK</Typography>
                                            <Divider />
                                            <Typography sx={{ marginTop: '40px', fontSize: '16px', color: '#818181', marginBottom: '40px' }}>9.6787</Typography>
                                            <Divider />
                                            <Typography sx={{ marginTop: '40px', fontSize: '16px', color: '#818181' }}>997 NOK</Typography>
                                            <Typography sx={{ marginTop: '15px', fontSize: '12px', fontWeight: '700', color: '#D80606' }}>-65 NOK</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item lg={1.5}>
                                        <Stack fullWidth sx={{ background: '#ffffff', borderRadius: '4px', alignItems: 'center', justifyContent: 'center' }}>
                                            <Box component="img" src={Img14} sx={{ marginTop: '40px' }}></Box>
                                            <Divider sx={{ marginTop: '40px' }} />
                                            <Typography sx={{ marginTop: '40px', fontSize: '16px', color: '#818181', marginBottom: '40px' }}>29 NOK</Typography>
                                            <Divider />
                                            <Typography sx={{ marginTop: '40px', fontSize: '16px', color: '#818181', marginBottom: '40px' }}>9.6787</Typography>
                                            <Divider />
                                            <Typography sx={{ marginTop: '40px', fontSize: '16px', color: '#818181' }}>997 NOK</Typography>
                                            <Typography sx={{ marginTop: '15px', fontSize: '12px', fontWeight: '700', color: '#D80606' }}>-65 NOK</Typography>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Stack sx={{ marginTop: '200px' }}>
                <Typography sx={{ textAlign: 'center', fontSize: '30px', fontWeight: '700' }} >We use the real exchange rate</Typography>
                <Stack sx={{ marginLeft: '300px', marginRight: '300px' }}>
                    <Grid container>
                        <Grid item lg={12}>
                            <ExchangeChart />
                        </Grid>
                        <Grid item lg={6}>
                            <Typography sx={{ marginTop: '80px', fontSize: '16px', fontWeight: '700' }}>Fair mark-ups</Typography>
                            <Typography sx={{ fontSize: '16px', marginTop: '15px' }}>Banks and high-street money transfer services<br />charge you gobs of money by adding ridiculous<br />mark-ups to the exchange rate plus unfair<br />commissions.</Typography>
                        </Grid>
                        <Grid item lg={6}>
                            <Typography sx={{ marginTop: '80px', fontSize: '16px', fontWeight: '700' }}>Cheaper fees</Typography>
                            <Typography sx={{ fontSize: '16px', marginTop: '15px' }}>At RemitFix, you get the real exchange rate<br /> known as mid-market rate and our fees, which<br /> are shown upfront is 7x cheaper than using<br /> banks and most money transfer providers.</Typography>
                        </Grid>
                    </Grid>
                </Stack>
            </Stack>
            <Stack sx={{ background: '#F5F7F9' }}>
                <Stack sx={{ marginLeft: '140px', marginRight: '170px', marginBottom: '100px', marginTop: '100px', background: '#F5F7F9' }}>
                    <Grid container spacing={0}>
                        <Grid item lg={6}>
                            <Typography sx={{ marginTop: '280px', fontSize: '30px', fontWeight: '700' }}>How It Works</Typography>
                            <Typography sx={{ marginTop: '25px' }}>RemitFix is the cheaper, faster, and safer way to<br />send money to family and friends, pay bills and<br />tuition fees. <br /><br />At RemitFix, you get the real exchange rate<br /> known as mid-market rate and our fees, which<br /> are shown upfront is 7x cheaper than using<br /> banks and most money transfer providers.</Typography>
                            <Button className={classes.btnProc}>View the process</Button>
                        </Grid>
                        <Grid item lg={3}>
                            <Box sx={{ width: '244px !important', background: '#C72127', height: '290px !important', borderRadius: '4px' }}>
                                <Box sx={{ paddingTop: '30px' }}>
                                    <Box sx={{ marginLeft: '25px', color: '#C72127', fontSize: '30px', fontWeight: '700', display: 'flex', width: '50px', height: '50px', textAlign: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', background: '#FFFFFF' }}>1</Box>
                                    <Typography sx={{ fontSize: '20px', marginLeft: '25px', marginTop: '25px', fontWeight: '700', color: '#FFFFFF' }}>Choose Country and<br /> Enter Amount</Typography>
                                    <Typography sx={{ fontSize: '16px', marginLeft: '25px', marginTop: '25px', color: '#FFFFFF' }}>In our currency calculator,<br /> you will see the real<br /> exchange rate </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ marginTop: '54px', width: '244px !important', background: '#6B2FF9', height: '290px !important', borderRadius: '4px' }}>
                                <Box sx={{ paddingTop: '30px' }}>
                                    <Box sx={{ marginLeft: '25px', color: '#6B2FF9', fontSize: '30px', fontWeight: '700', display: 'flex', width: '50px', height: '50px', textAlign: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', background: '#FFFFFF' }}>3</Box>
                                    <Typography sx={{ fontSize: '20px', marginLeft: '25px', marginTop: '25px', fontWeight: '700', color: '#FFFFFF' }}>Choose Delivery <br />Option</Typography>
                                    <Typography sx={{ fontSize: '16px', marginLeft: '25px', marginTop: '25px', color: '#FFFFFF' }}>You have flexible options<br /> to choose</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={3}>
                            <Box sx={{ marginTop: '50px', width: '244px !important', background: '#1B3764', height: '290px !important', borderRadius: '4px' }}>
                                <Box sx={{ paddingTop: '30px' }}>
                                    <Box sx={{ marginLeft: '25px', color: '#1B3764', fontSize: '30px', fontWeight: '700', display: 'flex', width: '50px', height: '50px', textAlign: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', background: '#FFFFFF' }}>2</Box>
                                    <Typography sx={{ fontSize: '20px', marginLeft: '25px', marginTop: '25px', fontWeight: '700', color: '#FFFFFF' }}>Choose or Add New<br /> Recipient</Typography>
                                    <Typography sx={{ fontSize: '16px', marginLeft: '25px', marginTop: '25px', color: '#FFFFFF' }}>And tell us the reason for<br /> the transfer</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ marginTop: '54px', width: '244px !important', background: '#3FD93F', height: '290px !important', borderRadius: '4px' }}>
                                <Box sx={{ paddingTop: '30px' }}>
                                    <Box sx={{ marginLeft: '25px', color: '#3FD93F', fontSize: '30px', fontWeight: '700', display: 'flex', width: '50px', height: '50px', textAlign: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', background: '#FFFFFF' }}>4</Box>
                                    <Typography sx={{ fontSize: '20px', marginLeft: '25px', marginTop: '25px', fontWeight: '700', color: '#FFFFFF' }}>Review Transfer<br /> Details and Pay</Typography>
                                    <Typography sx={{ fontSize: '16px', marginLeft: '25px', marginTop: '25px', color: '#FFFFFF' }}>You can either pay via<br /> debit/credit card</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Stack>
            </Stack>
            <Stack>
                <Stack sx={{ marginLeft: '170px', marginRight: '170px', marginTop: '100px', marginBottom: '100px' }}>
                    <Typography sx={{ fontSize: '30px', fontWeight: '700', textAlign: 'center' }}>Why customers keep<br /> choosing RemitFix</Typography>
                    <Grid container>
                        <Grid item lg={4} sx={{ display: 'flex' }}>
                            <Stack direction="column">
                                <Stack justifyContent='center' alignItems='center'>
                                    <Box component="img" src={ImgWallet} sx={{ marginTop: '10px', width: 90, height: 90, zIndex: 2 }} />
                                    <Typography sx={{ textAlign: 'center', marginTop: '25px', fontWeight: '700', fontSize: '20px' }}>Much Cheaper</Typography>
                                    <Typography sx={{ textAlign: 'center', marginTop: '15px', fontSize: '16px' }}>We charge the bare minimum fee<br /> that is 6-8x cheaper than using a <br />high street money transfer operator.</Typography>
                                </Stack>
                                <Stack justifyContent='center' alignItems='center' sx={{ marginTop: '80px' }}>
                                    <Box component="img" src={ImgWallet} sx={{ marginTop: '10px', width: 90, height: 90, zIndex: 2 }} />
                                    <Typography sx={{ textAlign: 'center', marginTop: '25px', fontWeight: '700', fontSize: '20px' }}>Much Cheaper</Typography>
                                    <Typography sx={{ textAlign: 'center', marginTop: '15px', fontSize: '16px' }}>We charge the bare minimum fee<br /> that is 6-8x cheaper than using a <br />high street money transfer operator.</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item lg={4} sx={{ display: 'flex' }}>
                            <Stack direction='column'>
                                <Stack justifyContent='center' alignItems='center'>
                                    <Box component="img" src={ImgTimer} sx={{ marginTop: '10px', width: 90, height: 90, zIndex: 2 }} />
                                    <Typography sx={{ textAlign: 'center', marginTop: '25px', fontWeight: '700', fontSize: '20px' }}>Much Cheaper</Typography>
                                    <Typography sx={{ textAlign: 'center', marginTop: '15px', fontSize: '16px' }}>We charge the bare minimum fee<br /> that is 6-8x cheaper than using a <br />high street money transfer operator.</Typography>
                                </Stack>
                                <Stack justifyContent='center' alignItems='center' sx={{ marginTop: '80px' }}>
                                    <Box component="img" src={ImgWallet} sx={{ marginTop: '10px', width: 90, height: 90, zIndex: 2 }} />
                                    <Typography sx={{ textAlign: 'center', marginTop: '25px', fontWeight: '700', fontSize: '20px' }}>Much Cheaper</Typography>
                                    <Typography sx={{ textAlign: 'center', marginTop: '15px', fontSize: '16px' }}>We charge the bare minimum fee<br /> that is 6-8x cheaper than using a <br />high street money transfer operator.</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item lg={4} sx={{ display: 'flex' }}>
                            <Stack direction='column'>
                                <Stack justifyContent='center' alignItems='center'>
                                    <Box component="img" src={ImgTransparent} sx={{ marginTop: '10px', width: 90, height: 90, zIndex: 2 }} />
                                    <Typography sx={{ textAlign: 'center', marginTop: '25px', fontWeight: '700', fontSize: '20px' }}>Much Cheaper</Typography>
                                    <Typography sx={{ textAlign: 'center', marginTop: '15px', fontSize: '16px' }}>We charge the bare minimum fee<br /> that is 6-8x cheaper than using a <br />high street money transfer operator.</Typography>
                                </Stack>
                                <Stack justifyContent='center' alignItems='center' sx={{ marginTop: '80px' }}>
                                    <Box component="img" src={ImgWallet} sx={{ marginTop: '10px', width: 90, height: 90, zIndex: 2 }} />
                                    <Typography sx={{ textAlign: 'center', marginTop: '25px', fontWeight: '700', fontSize: '20px' }}>Much Cheaper</Typography>
                                    <Typography sx={{ textAlign: 'center', marginTop: '15px', fontSize: '16px' }}>We charge the bare minimum fee<br /> that is 6-8x cheaper than using a <br />high street money transfer operator.</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Stack>
            <Stack sx={{ background: '#F5F7F9', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ textAlign: 'center', marginTop: '71px', fontSize: '30px', fontWeight: '700' }}>Send money the smart way</Typography>
                <Button className={classes.btnGet}>Get Started</Button>
                <Typography sx={{ marginTop: '10px' }}>Or see &nbsp;<Button sx = {{color : '#C72127'}} to="/" component={Link}>
                    how it works
                </Button></Typography>
            </Stack>
            <Stack sx = {{ background : '#F5F7F9' }}>
                <Paper fullWidth className = {classes.paperContainer}>
                    <Typography sx = {{ fontSize : '20px', fontWeight : '700', color: '#ffffff', marginTop : '100px', marginLeft : '140px' }}>GLOBAL HEADQUARTERS</Typography>
                    <Typography sx = {{ marginLeft : '140px', color : '#ffffff', fontSize : '16px', marginTop : '15px'}}>Coliemore House,<br />Coliemore Road,<br />Dalkey,<br />Co. Dublin</Typography>
                    <Box sx = {{ color : 'white', fontWeight : '700', display : 'flex', marginLeft : '140px', marginTop : '70px'}}>
                        <PhoneIcon></PhoneIcon>
                        <Typography sx = {{ marginLeft : '20px'}}>&nbsp; +1&nbsp;312&nbsp;994&nbsp;1880</Typography>
                    </Box>
                    <Box sx = {{ marginLeft : '140px', fontWeight : '700', color : 'white', marginTop : '20px', display : 'flex'}}>
                        <MailOutlineIcon></MailOutlineIcon>
                        <Typography sx = {{ marginLeft : '20px'}}>&nbsp;INFO@REMITFIX.COM</Typography>
                    </Box>
                </Paper>
            </Stack>
        </Box>
    );
}
export default Home;