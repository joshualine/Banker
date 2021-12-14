const AccountStatement = require('../models/transactions.model');
const asyncHandler = require('express-async-handler');

// @description     Create new Transfer
// @route           POST /api/transfers
// @access          Authenticated User/ Admin
const createStatement = asyncHandler(async (req, res) => {
  const {
    user,
    // amount,
    // receiver,
  } = req.body

  const statement = new AccountStatement({
    user,
    // transfer,
    // withdraw,
    // deposit,
  })

  const createdStatement = await statement.save()

  res.status(201).json(createdStatement)

  // if (amount <= 0) {  //Prevent amount from being 0.0  or negative naira
  //   res.status(400)
  //   throw new Error('Transfer must be greated that 0.0')
  //   return
  // } else {
    // const transfer = new Transfer({
    //   user,
    //   amount,
    //   receiver,
    // })

  //   const createdTransfer = await transfer.save()

  //   res.status(201).json(createdTransfer)
  // }
})

module.exports = {
  createStatement,
}