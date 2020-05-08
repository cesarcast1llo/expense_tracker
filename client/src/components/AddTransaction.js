import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <div className="wrapper">
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="text">Expense</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="What was it?"
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">
              Amount <br />
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="How much was it?"
              style={{ marginBottom: 5 }}
            />
            -{' '}
            <span style={{ paddingTop: 5, color: 'red' }}>
              will be an expense
            </span>
            <br />+{' '}
            <span style={{ paddingTop: 5, color: 'red' }}>
              will be positive income
            </span>
          </div>
          <button className="btn">Add transaction</button>
        </form>
      </div>
    </>
  );
};
