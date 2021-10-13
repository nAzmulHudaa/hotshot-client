import React, { useState, useEffect, useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../App';
import NoMatch from '../pages/NoMatch';




const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/api/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const handleOrder = (id) => {
        history.push(`/orders/${id}`);
    }
    const loginToken = sessionStorage.getItem('token');
    return (
        <div>
            {
                loginToken || loggedInUser.email  ? (
                    <div >
                        <b> Orders Details of the Company</b>
                        <div >
                            <TableContainer component={Paper} style={{ marginTop: '20px', height: '100vh' }}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>First Name</TableCell>
                                            <TableCell align="right">Address</TableCell>
                                            <TableCell align="right">Status</TableCell>
                                            <TableCell align="right">Phone Number</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {orders.map((customer) => (
                                            <TableRow
                                                onClick={() => handleOrder(customer.billing.email)}
                                                key={customer.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {
                                                        customer.billing.first_name ? customer.billing.first_name : 'No Name Provided'
                                                    }

                                                </TableCell>
                                                <TableCell align="right">
                                                    {
                                                        customer.shipping.address_1 ? customer.shipping.address_1 : 'No Email Provided'
                                                    }

                                                </TableCell>
                                                <TableCell align="right">
                                                    {
                                                        customer.status ? customer.status : 'No Username Provided'
                                                    }
                                                </TableCell>
                                                <TableCell align="right">
                                                    {
                                                        customer.billing.phone ? customer.billing.phone : 'No Phone Number Provided'
                                                    }
                                                </TableCell>
                                                {/* <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell> */}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </div>

                    </div>
                ) : <NoMatch />
            }
        </div>
    );
};

export default Orders;