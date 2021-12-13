const Withdraw = require('../models/withdraw.model');
const asyncHandler = require('express-async-handler');

// @description     Create new Withdraw
// @route           POST /api/withdraw
// @access          Authenticated User/ Admin
const createWithdraw = asyncHandler(async (req, res) => {
  const {
    user,
    amount,
  } = req.body

  if (amount && amount.length === 0) {  //Prevent amount from being 0.0 naira
    res.status(400)
    throw new Error('Withdrawal must be greated that 0.0')
    return
  } else {
    const withdraw = new Withdraw({
      amount,
      // user: req.user._id,
      user
    })

    const createdWithdraw = await withdraw.save()

    res.status(201).json(createdWithdraw)
  }
})

// @desc    Get withdraw by ID
// @route   GET /api/withdraws/:id
// @access  Authenticated user
const getWithdrawById = asyncHandler(async (req, res) => {
  const withdraw = await Withdraw.findById(req.params.id)
    .populate(
      'user',
      'firstname lastname'
    )
    // .populate('amount transactionTime')
    // .select('user withdraw')

  if (withdraw) {
    res.json(withdraw)
  } else {
    res.status(404)
    throw new Error('Withdraw not found')
  }
})


// @desc    Get logged in user withdraws
// @route   GET /api/withdraws/mywithdraw
// @access  Authenticated user
const getMyWithdraw = asyncHandler(async (req, res) => {
  const Withdraw = await Withdraw.find({ user: req.user._id })
  res.json(Withdraw)
})

// @desc    Get all withrdaw
// @route   GET /api/withrdaws
// @access  Admin
const getWithdraws = asyncHandler(async (req, res) => {
  const withdraws = await Withdraw.find({}).populate('user', 'id firstname')
  res.json(withdraws)
})

module.exports = {
  createWithdraw,
  getWithdrawById,
  getWithdraws,
  getMyWithdraw

}