const {
  createWithdraw,
  getWithdrawById,
  getWithdraws,
  getMyWithdraw
} = require('../controllers/withdraw.controller');

const router = require("express").Router();
const { protected, admin } = require('../middlewares/auth.middleware');

//Add Withdrawal
router.route('/')
  .post(createWithdraw).get(getWithdraws);

//Get A Specified Withdrawal done by a particular user
router.route('/:id')
  .get(getWithdrawById);

//Get All Withdrawal by a specified user
// router.route('/mywithdraw')
//   .get(getMyWithdraw)




module.exports = router;