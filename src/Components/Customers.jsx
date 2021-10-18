import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useHistory } from 'react-router-dom';
import NoMatch from '../pages/NoMatch';

const Customers = () => {

    const history = useHistory();
    const [customers, setCustomers] = useState([]);
    const getCustomers = () => {
        fetch('http://localhost:8080/api/customers')
            .then(response => response.json())
            .then(data => {
                setCustomers(data);
            });
    }

    useEffect(() => {
        getCustomers();
    }, []);

    const handleCustomer = (id) => {
        history.push(`/customers/${id}`);
    }
    const loggedInUser = async()=>{
        const userFromStorage = await sessionStorage.getItem('user')
        return userFromStorage;
    }
    // console.log(loggedInUser)
    
   
    return (
        <div>
            {
                 loggedInUser.email  ? (
                    <div>
                        <b> Customers Details of the Company</b>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>First Name</TableCell>
                                        <TableCell align="right">Email Id</TableCell>
                                        <TableCell align="right">Username</TableCell>
                                        <TableCell align="right">Phone Number</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {customers.map((customer) => (
                                        <TableRow
                                            onClick={() => handleCustomer(customer.email)}
                                            key={customer.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {
                                                    customer.first_name ? customer.first_name : 'No Name Provided'
                                                }

                                            </TableCell>
                                            <TableCell align="right">
                                                {
                                                    customer.email ? customer.email : 'No Email Provided'
                                                }

                                            </TableCell>
                                            <TableCell align="right">
                                                {
                                                    customer.username ? customer.username : 'No Username Provided'
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
                ) : <NoMatch />
            }

        </div>
    );
};

export default Customers;


