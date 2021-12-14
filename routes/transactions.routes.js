const {
  makeDeposit, 
  getTransactions, 
  getTransactionById, 
  makeWithdrawal, 
  makeTransfer, 
  reverseTransfer,
} = require('../controllers/transactions.controller');

const router = require("express").Router();
const { protected, admin } = require('../middlewares/auth.middleware');

// Get all transactions performed by the user
router.route('/')
  .get(protected, getTransactions);

// Get a traansaction by ID
router.route('/:id')
  .get(protected, getTransactionById);

//Make Deposit
router.route('/deposits')
  // .get(protected, getDeposits)
  .post(protected,  makeDeposit)
  
//Make Withdrawal
router.route('/withdraws')
  .post(protected, makeWithdrawal);

//Make Transfer
router.route('/transfers')
  .post(protected, makeTransfer);

// Admin reverse transaction/transfer
router.route('/:id/reverse')
  .delete(protected, reverseTransfer)


module.exports = router;