const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  deposit: [
    {
      amount: { type: Number, required: true, default: 0.0 },
    },
  ],
  withdraw: [
    {
      amount: { type: Number, required: true, default: 0.0 },
    },
  ],
  transfer: [
    {
      amount: { type: Number, required: true, default: 0.0 },
      transferedBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Account',
      },
    },
  ],
  isSuccesful: {
    type: Boolean,
    required: true,
    default: true,
  },
  transactionTime: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model("Transaction", TransactionSchema);