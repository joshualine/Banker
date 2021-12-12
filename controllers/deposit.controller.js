const Deposit = require('../models/deposit.model');
const asyncHandler = require('express-async-handler');

// @description     Create new Deposit
// @route           POST /api/deposits
// @access          Authenticated User/ Admin
const createDeposit = asyncHandler(async (req, res) => {
  const {
    user,
    amount,
  } = req.body

  if (amount && amount.length === 0) {  //Prevent amount from being 0.0 naira
    res.status(400)
    throw new Error('Deposit must be greated that 0.0')
    return
  } else {
    const deposit = new Deposit({
      amount,
      // user: req.user._id,
      user
    })

    const createdDeposit = await deposit.save()

    res.status(201).json(createdDeposit)
  }
})

// @desc    Get deposit by ID
// @route   GET /api/deposits/:id
// @access  Private
const getDepositById = asyncHandler(async (req, res) => {
  const deposit = await Deposit.findById(req.params.id).populate(
    'user',
    'firstname lastname email balance'
  ).populate('amount transactionTime').select('user deposit')

  if (deposit) {
    res.json(deposit)
  } else {
    res.status(404)
    throw new Error('Deposit not found')
  }
})


// @desc    Get all Deposits made by a specified user
// @route   GET /api/deposits/:user_id
// @access  Authenticated user/Admin
const getDeposits = asyncHandler(async (req, res) => {
  const deposits = await Deposit.find({}).populate('user', 'firstname')
  res.json(deposits)
})

module.exports = {
  createDeposit,
  getDepositById,
  getDeposits
  
}