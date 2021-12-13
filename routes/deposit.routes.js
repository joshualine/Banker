const { 
  createDeposit,
  getDepositById,
  getDeposits,
} = require('../controllers/deposit.controller');

const router = require("express").Router();
const { protected, admin } = require('../middlewares/auth.middleware');

//Add Deposit   //Get all deposits done by the user
router.route('/')
  .post(createDeposit)
  .get(protected, getDeposits);

//Get A Specified Deposit
router.route('/:id')
  .get(getDepositById);



module.exports = router;