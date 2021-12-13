const mongoose = require('mongoose');

const TransferSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Transfer must be performed by a particular user'],
    ref: 'User',
  },
  amount: { type: Number, required: [true, 'Transfer must have amount'] },

  receiver: [
    {
      user: {
        type: mongoose.Schema.Types,
        required: [true, 'Transfer must be made to a user'],
        ref: 'User',
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

module.exports = mongoose.model("Transfer", TransferSchema);