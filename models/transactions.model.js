const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Transaction must be performed by a particular user'],
    ref: 'User',
  },

  transfer: {
    amount: {type: Number, required: true},

    receiver:
    {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Transfer must be made to a user'],
      ref: 'User',
    },

    // isSuccesful: {
    //   type: Boolean,
    //   required: true,
    //   default: true,
    // },
    // transactionTime: { type: Date, required: true, default: Date.now },
  },

  deposit: {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: [true, 'Deposit must be performed by a particular user'],
    //   ref: 'User',
    // },
     type: Number,

    isSuccesful: {
      type: Boolean,
      required: true,
      default: true,
    },
    // transactionTime: { type: Date, required: true, default: Date.now },
  },

  withdraw: {
   type: Number,

    isSuccesful: {
      type: Boolean,
      required: true,
      default: true,
    },
    // transactionTime: { type: Date, required: true, default: Date.now },
  },
  transactionTime: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model("Transaction", TransactionSchema);