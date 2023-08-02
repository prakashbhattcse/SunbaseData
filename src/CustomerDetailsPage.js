import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const CustomerDetailsPage = ({ customers, onDeleteCustomer }) => {
    return (
      <>
        <h1>Customer Details</h1>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.address}</td>
                <td>{customer.city}</td>
                <td>{customer.state}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td><button onClick={() => onDeleteCustomer(customer.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/add-customer">Add Customer</Link>
      </>
    );
  };

  export default CustomerDetailsPage;