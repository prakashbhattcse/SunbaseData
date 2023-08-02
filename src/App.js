import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import LoginPage from './LoginPage';
import CustomerDetailsPage from './CustomerDetailsPage';
import AddCustomerPage from './addCustomer';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [customers, setCustomers] = useState([
    {
      id: 1,
      firstName: 'Alice',
      lastName: 'Smith',
      address: '123 Main St',
      city: 'Springfield',
      state: 'IL',
      email: 'alice@example.com',
      phone: '123-456-7890',
    },
    {
      id: 2,
      firstName: 'Bob',
      lastName: 'Johnson',
      address: '456 Elm St',
      city: 'Shelbyville',
      state: 'IL',
      email: 'bob@example.com',
      phone: '234-567-8901',
    },
  ]);

  const handleLogin = (loginId, password) => {
    // Authenticate the user using the provided loginId and password
    setIsLoggedIn(true);
  };

  const handleAddCustomer = (customer) => {
    setCustomers((prevCustomers) => [
      ...prevCustomers,
      { id: prevCustomers.length + 1, ...customer },
    ]);
  };

  const handleDeleteCustomer = (customerId) => {
    setCustomers((prevCustomers) =>
      prevCustomers.filter((customer) => customer.id !== customerId)
    );
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <Router>
      <>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/customers">Customers</Link></li>
            <li><Link to="/add-customer">Add Customer</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/customers" element={<CustomerDetailsPage customers={customers} onDeleteCustomer={handleDeleteCustomer} />} />
          <Route path="/add-customer" element={<AddCustomerPage onAddCustomer={handleAddCustomer} />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
