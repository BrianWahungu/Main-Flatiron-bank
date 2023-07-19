import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionTable from './components/TransactionTable';
import SearchBar from './components/SearchBar';
import TransactionForm from './components/TransactionForm';
import './App.css'; // Import the CSS file for global styles

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://api.npoint.io/3e016fd4c2609a659af3/transactions/') 
      .then(response => {
        console.log('Data from API:', response.data);
        setTransactions(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const addTransaction = (newTransaction) => {
    // Update the transactions state with the new transaction
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="app-container">
      <h1>My Banking Transactions</h1>
      <SearchBar handleSearch={handleSearch} />
      <TransactionTable transactions={transactions} searchTerm={searchTerm} />
      <TransactionForm addTransaction={addTransaction} />
    </div>
  );
};

export default App;
