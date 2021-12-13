const {
  createTransfer,
  getTransferById,
  getTransfers,
} = require('../controllers/withdraw.controller');

const router = require("express").Router();
const { protected, admin } = require('../middlewares/auth.middleware');

//Add Transfer   //Get all transfers done by the user
router.route('/')
  .post(createTransfer)
  .get(protected, getTransfers);

//Get A Specified Transfer
router.route('/:id')
  .get(getTransferById);



module.exports = router;