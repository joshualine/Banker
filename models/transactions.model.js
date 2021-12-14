const mongoose = require('mongoose');
const Transfer = require('../models/transfer.model');
const Withdraw = require('../models/withdraw.model');
const Deposit = require('../models/deposit.model');

// const TransferSchema = mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: [true, 'Transfer must be performed by a particular user'],
//     ref: 'User',
//   },
//   amount: { type: Number, required: [true, 'Transfer must have amount'] },

//   receiver:
//   {
//     type: mongoose.Schema.Types.ObjectId,
//     required: [true, 'Transfer must be made to a user'],
//     ref: 'User',
//   },

//   isSuccesful: {
//     type: Boolean,
//     required: true,
//     default: true,
//   },
//   transactionTime: { type: Date, required: true, default: Date.now },
// });

const TransactionSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Transaction must be performed by a particular user'],
    ref: 'User',
  },

  // transfer: [TransferSchemaw],

  transfer: [{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Transaction must be performed by a particular user'],
    ref: 'Transfer',
  }],
  deposit: [{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Transaction must be performed by a particular user'],
    ref: 'Deposit',
  }],
  withdraw: [{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Transaction must be performed by a particular user'],
    ref: 'Withdraw',
  }],

  // transfer: [Transfer],
  // withdraw: [Withdraw],
  // deposit: [Deposit],
});

module.exports = mongoose.model("Transaction", TransactionSchema);