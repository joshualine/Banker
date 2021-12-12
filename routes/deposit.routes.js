const { 
  createDeposit,
  getDepositById,
  getDeposits,
} = require('../controllers/deposit.controller');

const router = require("express").Router();
const { protected, admin } = require('../middlewares/auth.middleware');

//Add Deposit
router.route('/')
  .post(createDeposit);

//Get All Deposit
router.route('/:user_id')
  .get(getDeposits)

//Get A Specified Deposit
router.route('/:id')
  .get(getDepositById);


module.exports = router;