const Transfer = require('../models/transfer.model');
const asyncHandler = require('express-async-handler');

// @description     Create new Transfer
// @route           POST /api/transfers
// @access          Authenticated User/ Admin
const createTransfer = asyncHandler(async (req, res) => {
  const {
    user,
    amount,
    receiver,
  } = req.body

  if (amount <= 0) {  //Prevent amount from being 0.0  or negative naira
    res.status(400)
    throw new Error('Transfer must be greated that 0.0')
    return
  } else {
    const transfer = new Transfer({
      user,
      amount,
      receiver,
    })

    const createdTransfer = await transfer.save()

    res.status(201).json(createdTransfer)
  }
})

// @desc    Get Transfer by ID
// @route   GET /api/transfers/:id
// @access  Authenticated user/admin
const getTransferById = asyncHandler(async (req, res) => {
  const transfer = await Transfer.findById(req.params.id).populate(
    'user',
    'firstname lastname'
  ).populate('amount transactionTime').select('user transfer')

  if (transfer) {
    res.json(transfer)
  } else {
    res.status(404)
    throw new Error('Transfer not found')
  }
})


// @desc    Get all Transfers made by a specified user
// @route   GET /api/transfers
// @access  Authenticated user/Admin
const getTransfers = asyncHandler(async (req, res) => {
  const transfers = await Transfer.find({ user: req.user._id })
    .populate('user', 'firstname')
  res.json(transfers)
})

// @desc    Reverse Transfer
// @route   DELETE /api/transfers/:id
// @access  Admin
const reverseTransfer = asyncHandler(async (req, res) => {
  const transfer = await Transfer.findById(req.params.id)

  if (transfer) {
    await transfer.remove()
    res.json({ message: 'Transfer Reversed' })
  } else {
    res.status(404)
    throw new Error('Transfer not found')
  }
})


module.exports = {
  createTransfer,
  getTransferById,
  getTransfers,
  reverseTransfer,
}