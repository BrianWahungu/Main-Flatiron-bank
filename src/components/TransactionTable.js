import React, { useState, useEffect } from 'react';
import './TransactionTable.css'; // Import the CSS file

const TransactionTable = ({ transactions, searchTerm }) => {
  const [sortedTransactions, setSortedTransactions] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortColumn, setSortColumn] = useState('description');

  useEffect(() => {
    // Filter transactions based on the search term
    const filteredTransactions = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort transactions based on the selected column and order
    const sorted = [...filteredTransactions].sort((a, b) => {
      const colA = a[sortColumn].toLowerCase();
      const colB = b[sortColumn].toLowerCase();

      if (colA < colB) {
        return sortOrder === 'asc' ? -1 : 1;
      }
      if (colA > colB) {
        return sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });

    setSortedTransactions(sorted);
  }, [transactions, searchTerm, sortColumn, sortOrder]);

  const handleSort = (column) => {
    // If the same column is clicked, reverse the order; otherwise, set it to 'asc'
    setSortOrder(column === sortColumn ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc');
    setSortColumn(column);
  };

  const handleDelete = (id) => {
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
    setSortedTransactions(updatedTransactions);
  };

  return (
    <div>
      <table className="table-container">
        {/* Table header with sorting functionality */}
        <thead>
          <tr>
            <th onClick={() => handleSort('description')}>
              Description {sortColumn === 'description' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
            </th>
            <th onClick={() => handleSort('category')}>
              Category {sortColumn === 'category' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
            </th>
            <th onClick={() => handleSort('amount')}>
              Amount {sortColumn === 'amount' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
            </th>
            <th>Delete</th> {/* Add a new column header for the delete buttons */}
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {sortedTransactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>
                <button onClick={() => handleDelete(transaction.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
