import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { sentenceCase } from 'change-case';
import { useState, useEffect } from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Box,
  Grid,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination
} from '@mui/material';
// components
import Page from '../components/Page';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import SearchNotFound from '../components/SearchNotFound';
import { UserListToolbar } from '../components/_dashboard/user';
import { connect } from 'react-redux';
//
import PropType from 'prop-types';
import { GetTransfers } from '../redux/action/transfer'
// ----------------------------------------------------------------------
import TransferListHead from 'src/components/_dashboard/transfer/TransferListHead';

import { makeStyles } from '@mui/styles';

const TABLE_HEAD = [
  { id: 'name', label: 'Full name', alignRight: false },
  { id: 'country', label: 'Country', alignRight: false },
  { id: 'type', label: 'Service type', alignRight: false },
  { id: '' }
];

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  mainContent : {
    backgroundColor: '#F3F5F7',
    marginRight : '140px',
    marginLeft : '45px', 
  },
  title: {
    fontSize: '30px !important',
    color: '#000000',
    marginTop :'30px',
    fontWeight: '700'
  },
  btnBox : {
    marginTop : '28px',
    border : '1px solid #EAEAEA',
    height : '90px'
  },
  btnRecipient : {
    width: '190px',
    height: '40px',
    backgroundColor: '#183765',
    mt: '15px'
  },
  boxMain : {
    backgroundColor:'#FFFFFF',
    mb :'10px',
    display:'flex',
    marginTop : '28px'
  },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
   btnItem: {
    backgroundColor: '#FFFFFF',
    border: 1,
    fontSize: '14px',
    fontWeight: '100',
    color: '#AFAFAF !important',
    height : '50px',
    marginLeft: '10px',
    marginTop: '20px',
    marginBottom: '20px',
    border : '1px solid',
    borderRadius: 3,
    borderColor :' #D5D5D5 !important'
  },
  mainArea:{
    backgroundColor :'#Ffffff',
    border : '1px solid #EAEAEA',
    color : '#EAEAEA',
    marginTop:'20px'
  }
}))

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

const Recipient = (props) => {

  const classes = useStyles();

  const navigate = useNavigate();

  const { message, GetTransfers, flag } = props;

  useEffect(() => {
    if(flag === 0) {
      GetTransfers();
    }
  } , [flag]) ;
  
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('transaction');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = message.map((n) => n.TRANSACTION);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const onAddRecipient = () => {
    navigate("/add/recipient");
  }

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - message.length) : 0;

  const filteredUsers = applySortFilter(message, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;

  return (
    <Page title="Recipient |RemitFix">
      <Stack className = {classes.mainContent}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2} >
          <Typography className = {classes.title}>Recipient</Typography>
          <Button className = {classes.btnRecipient} variant="contained" onClick = {onAddRecipient}>Add New recipient</Button>
        </Stack>
        <Box className = {classes.boxMain}>
          <Grid container lg={12} xs={12} spacing = {1}>
            <Grid item lg={2}>
              <Button fullWidth className={classes.btnItem}>Service type</Button>
            </Grid>
            <Grid item lg={2}>
              <Button fullWidth className={classes.btnItem}>Country</Button>
            </Grid>
            <Grid item lg={2}>
              <Button fullWidth className={classes.btnItem}>Date added</Button>
            </Grid>
            <Grid item lg={4}>
              <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />
            </Grid>
          </Grid>
        </Box>
        <Box className = {classes.mainArea}>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <TransferListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={message.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const { TRANSACTION, DATE, RECIPIENT, RECIPIENT_NATION, SENDER, SENDER_NATION, AMOUNT, STATUS } = row;
                      const isItemSelected = selected.indexOf(TRANSACTION) !== -1;

                      return (
                        <TableRow
                          hover
                          key={TRANSACTION}
                          tabIndex={-1}
                          role="checkbox"
                          selected={isItemSelected}
                          aria-checked={isItemSelected}
                        >
                          <TableCell component="th" scope="row" padding="none">
                            <Stack direction="row" alignItems="center" spacing={2}>
                              <Typography variant="p" noWrap sx={{ pl: '20px' }}>
                                {TRANSACTION}
                              </Typography>
                              {/* <Avatar alt={name} src={avatarUrl} /> */}
                            </Stack>
                          </TableCell>
                          <TableCell align="left">{DATE}</TableCell>
                          <TableCell align="left">{RECIPIENT}</TableCell>
                          <TableCell align="left">{RECIPIENT_NATION}</TableCell>
                          <TableCell align="left">{AMOUNT}</TableCell>
                          <TableCell align="left">
                          <span class="iconify" data-icon="akar-icons:circle-fill"></span>
                            <Label
                              variant="ghost"
                              color={(STATUS === 'Rjected' && 'error' || STATUS === 'Complete' && 'success') || 'success'}
                            >{STATUS}
                            </Label>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                {isUserNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={message.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Stack>
    </Page>
  );
}

Recipient.propsType = {
  message: PropType.array.isRequired,
  flag: PropType.number.isRequired
}

const mapStateToProps = (state) => ({
  message: state.transfer.message,
  flag: state.transfer.flag
})

const mapDispatchToProps = {
  GetTransfers
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipient);