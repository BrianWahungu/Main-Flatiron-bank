import React, { useState } from 'react';
import './TransactionForm.css'; // Import the CSS file

const TransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      description,
      category,
      amount: parseFloat(amount), // Convert amount to a number (assuming it's a decimal value)
    };
    addTransaction(newTransaction); // Call the parent component's function to add the new transaction
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit">Add Transaction</button>
      </div>
    </form>
  );
};

export default TransactionForm;
