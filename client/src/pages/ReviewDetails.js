import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Card, Stack, Link, Grid, Container, Typography } from '@mui/material';

// components
import Page from '../components/Page';
import ReviewDetail from '../components/sendmoney/ReviewDetail/index';

import { useNavigate } from 'react-router-dom';

const RootStyle = styled(Page)(({ theme }) => ({
    display: 'flex',
    backgroundColor: '#F3F5F7',
}));

const ContainerStyle = styled('div')(({ theme }) => ({
    backgroundColor: '#FFFFFF',
    width: '53%',
    margin: 'auto',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
}));

const ContentStyle = styled('div')(({ theme }) => ({
    backgroundColor: '#FFFFFF',
    maxWidth: 600,
    margin: 'auto',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(0, 0, 0, 0)
}));

// ----------------------------------------------------------------------

export default function ReviewDetails() {
    return (
        <RootStyle title="Review details | RemitFix">
            <ContainerStyle>
                <Container maxWidth="sm">
                        <Grid container >
                            <Grid item xs={12}>
                                <ReviewDetail />
                            </Grid>
                        </Grid >
                </Container>
            </ContainerStyle>
        </RootStyle>
    );
}
