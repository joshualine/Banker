const Withdraw = require('../models/withdraw.model');
const asyncHandler = require('express-async-handler');

// @description     Create new Withdraw
// @route           POST /api/withdraws
// @access          Authenticated User/ Admin
const createWithdraw = asyncHandler(async (req, res) => {
  const {
    user,
    amount,
  } = req.body

  if (amount <= 0) {  //Prevent amount from being 0.0 or negative naira
    res.status(400)
    throw new Error('Withdraw must be greater than 0.0')
    return
  } else {
    const withdraw = new Withdraw({
      amount,
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
    .populate('amount transactionTime')
    .select('user withdraw')

  if (withdraw) {
    res.json(withdraw)
  } else {
    res.status(404)
    throw new Error('Withdraw not found')
  }
})


// @desc    Get all withrdaw made by a specified user
// @route   GET /api/withrdaws
// @access  Authenticated user/Admin
const getWithdraws = asyncHandler(async (req, res) => {
  const withdraws = await Withdraw.find({ user: req.user._id }).populate('user', 'firstname')
  res.json(withdraws)
})

module.exports = {
  createWithdraw,
  getWithdrawById,
  getWithdraws,
}