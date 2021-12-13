const mongoose = require('mongoose');

const DepositSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Deposit must be performed by a particular user'],
    ref: 'User',
  },
  amount: { type: Number, required: true, default: 0.0 },

  isSuccesful: {
    type: Boolean,
    required: true,
    default: true,
  },
  transactionTime: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model("Deposit", DepositSchema);