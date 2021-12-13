const {
  createWithdraw,
  getWithdrawById,
  getWithdraws,
  getMyWithdraw
} = require('../controllers/withdraw.controller');

const router = require("express").Router();
const { protected, admin } = require('../middlewares/auth.middleware');

//Add Withdrawal      //Get all withrawal made by the user
router.route('/')
  .post(createWithdraw)
  .get(protected, getWithdraws);

//Get A Specified Withdrawal done by the user
router.route('/:id')
  .get(getWithdrawById);


module.exports = router;