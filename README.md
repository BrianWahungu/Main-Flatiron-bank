# Banking Transactions Web App

This project is a React application that allows users to view, filter, add, and delete banking transactions. It fetches transaction data from a local server using the JSON DB server and displays the data in a tabular format. Users can filter transactions by description, sort them based on various columns, and add new transactions to the table. Additionally, users can delete individual transactions from the table.

# Table of Contents

- Project Overview
- Getting Started
    - Prerequisites
    - Installation
    - Running the App
- Usage
- Features
- Contributing
- License

# Project Overview
The project implements a React web application to manage banking transactions. It consists of the following components:

- App.js: The main component that handles data fetching, filtering, and state management.- 
SearchBar.js: A component that provides a search bar for filtering transactions by description.
- TransactionTable.js: A component that displays the table of transactions with sorting and delete functionality.
- TransactionForm.js: A component that allows users to add new transactions.

# Getting Started

## Prerequisites
Before running the application, ensure you have the following installed on your machine:

- Node.js: You can download and install Node.js from the official website: https://nodejs.org

## Installation

1. Clone the repository to your local machine using the following command:
- git clone <repository-url>

2. Navigate to the project directory:
- cd banking-transactions-web-app

3. Install the necessary dependencies using npm or yarn:
- npm install
- yarn install

## Running the App

To start the development server and run the React app, use the following command:
- npm start
or
- yarn start

The app will be accessible at http://localhost:3000 in your web browser.

# Usage
1. View Transactions: Upon launching the app, you will see a table displaying all transactions fetched from the server.

2. Search Transactions: Use the search bar at the top right corner to filter transactions by description. The table will update in real-time to display only the transactions matching the search term.

3. Sort Transactions: Click on the column headers (Description, Category, or Amount) to sort transactions in ascending order based on that column. Click again to sort in descending order.

4. Add a New Transaction: Scroll down to the bottom of the page, where you will find a form labeled "Add Transaction." Enter the description, category, and amount of the new transaction and click "Add Transaction." The new transaction will be added to the table.

5. Delete a Transaction: Each row in the table has a "Delete" button. Clicking on the "Delete" button for a specific transaction will remove it from the table.

# Features
- View a table of all transactions.
- Filter transactions by description using the search bar.
- Sort transactions in ascending or descending order by clicking on column headers.
- Add new transactions to the table using the "Add Transaction" form.
- Delete individual transactions from the table.

# Contributing
Contributions to this project are welcome! If you find any bugs, have feature suggestions, or want to contribute improvements, feel free to open an issue or submit a pull request.

# License
This project is licensed under the MIT License. You are free to modify and distribute this code as you see fit.